import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import HoC from '../../containers/HoC';

// import '!style-loader!css-loader!./override.css';
// import {  AppProfile, AppConfig } from '../../../types/models';
import { RootState } from '../../reducers';
// import * as DeadlineActions from '../../actions/deadlinetask'
import * as AppConfigActions from '../../actions/appconfig';
import { bindActionCreators } from 'redux';
// import MainForm from '../../components/MainForm';


declare interface IWelcomePageProps {
  title?:string;
}

export const WelcomePage = (props:IWelcomePageProps)=> {
  return <div className="jumbotron">
  <h2>Welcome to Reporting Hub </h2>
<h4>{props.title}</h4>
</div>;
};


export namespace Dashboard {
  export interface Props extends RouteComponentProps<void> {
//     profile:AppProfile;
    appconfig:AppConfig;
   appconfigactions:typeof AppConfigActions;
  }

  export interface State {
    /* empty */
  }
}

// @travelWrapper(mapStateToProps, mapDispatchToProps)
export class Dashboard extends React.Component<Dashboard.Props, Dashboard.State> {
  public isCancelled: any;
  constructor(props)
  {
    super(props);
  }

  public componentWillUnmount() {
    this.isCancelled = true;
}


  public async componentDidMount(){
    // this.props.appconfigactions.AppChanges({
    //   PageTitle:'Dashboard'
    // });
  }

  public render(){
    //   let form = <MainForm {...this.props} />;

      return <React.Fragment>
        {/* {form} */}
        <p>{this.props.appconfig.PageTitle}</p>
  <p>IsProduction: </p>
      </React.Fragment>;
  }
  
}

function mapStateToProps(state: RootState) {
  return {
    // profile:state.profile,
    appconfig:state.appconfig
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // deadlineactions: bindActionCreators(DeadlineActions as any, dispatch),
    appconfigactions:bindActionCreators(AppConfigActions as any,dispatch)
  };
}



export default connect(mapStateToProps,mapDispatchToProps)(HoC(Dashboard));