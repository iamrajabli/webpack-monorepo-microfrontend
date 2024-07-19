import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyAbout} from "@/pages/about";
import {Suspense} from "react";
import {router} from "@/router/Router";

const root = document.getElementById('root')

if (!root) throw new Error('Root element not found')


createRoot(root).render(
    <RouterProvider router={router}/>
);

