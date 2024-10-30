import { Redirect } from "wouter-preact";
import Home from "../pages/Home";
import Niko from "../pages/Niko";
import NotFound from "../pages/NotFound";
import Skills from "../pages/Skills";

export const renderExceptions = ["/niko", "/oneshot"];

export default [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/skills",
        element: <Skills />
    },
    {
        path: "/niko",
        element: <Niko />
    },
    {
        path: "/oneshot",
        element: <Redirect to="/niko" />
    },
    {
        path: undefined,
        element: <NotFound />
    }
];
