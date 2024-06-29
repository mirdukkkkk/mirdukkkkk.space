import Home from "../pages/Home";
import Niko from "../pages/Niko";
import Clicker from "../pages/Clicker";
import NotFound from "../pages/NotFound";

export default [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/niko',
        element: <Niko />
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