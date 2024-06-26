import {Redirect} from "wouter-preact";
import Home from "../pages/Home";
import Niko from "../pages/Niko";
import Clicker from "../pages/Clicker";
import NotFound from "../pages/NotFound";

export const renderExceptions = ['/niko'];

export default [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/clicker',
        element: <Clicker />
    },
    {
        path: '/niko',
        element: <Niko />
    },
    {
        path: '/oneshot',
        element: <Redirect to='/niko' />
    },
    {
        path: undefined,
        element: <NotFound />
    }
];