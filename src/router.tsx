import {Switch, Route} from "wouter-preact";
import Home from "./pages/Home";
import Clicker from "./pages/Clicker";
import NotFound from "./pages/NotFound";

const RawRouter = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/clicker',
        element: <Clicker />
    },
    {
        path: undefined,
        element: <NotFound />
    }
];

const Router = () => (
    <Switch>
        {RawRouter.map(({ path, element }) =>
            <Route path={path}>
                {element}
            </Route>
        )}
    </Switch>
)

export default Router;