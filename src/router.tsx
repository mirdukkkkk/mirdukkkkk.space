import {Switch, Route} from "wouter-preact";
import routes from "./data/routes";

const Router = () => (
    <Switch>
        {routes.map(({ path, element }) =>
            <Route path={path}>
                {element}
            </Route>
        )}
    </Switch>
);

export default Router;