import { Switch, Route, useHistory } from "react-router"
import Dashboard from "../pages/Dashboard";
import Group from "../pages/Group";
import GroupList from "../pages/GroupList";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {

    const history = useHistory();

    return (
        <Switch>
            <Route exact path='/'>
                <Dashboard/>
            </Route>
            <Route exact path='/register'>
                <Register/>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/dashboard'>
                <Dashboard/>
            </Route>
            <Route exact path='/groups'>
                <GroupList/>
            </Route>
            <Route exact path='/groups/:id'>
                <Group/>
            </Route>
            {/* <Route >
                {history.push('/')}
            </Route> */}
        </Switch>
    )

}

export default Routes;