import * as React from "react";
import * as ReactDOM from "react-dom";

// import { SPFetchClient } from "@pnp/nodejs";

import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { configureStore } from "./store";
import Layout from "./containers/Layout";
import { ConnectedRouter } from "connected-react-router";
import AppRoutes from "./routes";

const history = createBrowserHistory();
const store = configureStore();

declare interface IReduxAppProps {

}

const ReduxApp = (props) => (
  <Provider store={store}>
  <Layout history={history} {...props}>
    <ConnectedRouter history={history}>
      <AppRoutes pagePath={""} />
    </ConnectedRouter>
  </Layout>
</Provider>
);

export default ReduxApp;