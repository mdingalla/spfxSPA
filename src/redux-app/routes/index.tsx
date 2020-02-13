
import * as React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../containers/Dashboard';
// import FullLayout from '../containers/FullLayout';

// import {pagePath } from '../constants/config';
import { withRouter } from 'react-router';
import HoC from '../containers/HoC';
// import Playground  from '../containers/Playground';


const AppRoutes = ({pagePath})=>  (
                    <Switch>
                        <Route exact path={pagePath} component={withRouter(HoC(Dashboard))} />  
                        {/* <Route exact path={adminPathEntities} component={withRouter(travelWrapper(Dashboard))} />
                        <Route exact path={adminPathEntitiesSignatory} component={withRouter(travelWrapper(Dashboard))} />
                        
                        <Route exact path={adminPathDeadline} component={withRouter(travelWrapper(Dashboard))} />          
                        <Route exact path={adminPathDeadlineNew} component={withRouter(travelWrapper(FullLayout))} />
                         
                        <Route exact path={submitPath} component={withRouter(travelWrapper(FullLayout))} /> 
                        <Route exact path={submitPathType} component={withRouter(travelWrapper(FullLayout))} />           
                        <Route exact path={submitHomePath} component={withRouter(travelWrapper(FullLayout))} />           
                        <Route exact path={submitPlantPath} component={withRouter(travelWrapper(FullLayout))} />
                        <Route exact path={submitPathYrMonth} component={withRouter(travelWrapper(FullLayout))} />
                        
                        <Route exact path={adminReportPath} component={withRouter(travelWrapper(FullLayout))} />
                        <Route exact path={adminReportPathYrMo} component={withRouter(travelWrapper(FullLayout))} />

                        <Route exact path={scoreCardPath} component={withRouter(travelWrapper(FullLayout))} />          
                        <Route exact path={scoreCardPathYrMonth} component={withRouter(travelWrapper(FullLayout))} /> 
                        <Route exact path={`${pagePath}/test`} component={withRouter(travelWrapper(Playground))} />           */}
                    </Switch>);

export default AppRoutes;