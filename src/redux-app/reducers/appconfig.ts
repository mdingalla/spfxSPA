import { handleActions } from "redux-actions";
import * as Actions from '../constants/actions';


const initialState: AppConfig = {
  IsProduction: true,
  PageTitle:'spxSPA'
};

export default handleActions<AppConfig, any>(
  {
    [Actions.APP_CHANGED]: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    },
    [Actions.DASHBOARD_READY]: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    },
    [Actions.SWITCH_DEV_MODE]: (state, action) => {
      let payload = action.payload as AppConfig;
      return {
        ...state,
        ...payload
      };
    }
  },
  initialState
);
