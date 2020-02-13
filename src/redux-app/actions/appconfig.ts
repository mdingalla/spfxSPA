import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const AppChanges = createAction<Partial<AppConfig>>(
    Actions.APP_CHANGED
);