import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
// import profile from './profile';
// import deadlinetask from './deadlinetask';


import {RouterState} from 'react-router-redux';
// import { CERRecord, TodoStoreState, AppProfile, DashboardModel, PettyCashView, LocalizedData, AppConfig } from '../../types/models';
// import appconfig from './appconfig';
// import { AppConfig, AppProfile } from '../../types/models';



export {RootState,RouterState};

interface RootState {
//   profile:AppProfile;
//   appconfig:AppConfig;

}


// export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
//   profile:profile,
//   appconfig:appconfig,

// });

export default (history) => combineReducers({
    router: connectRouter(history),
    // /   profile:profile,
    //   appconfig:appconfig,
      });
