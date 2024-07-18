import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyAbout} from "./pages/about";
import {LazyShop} from "./pages/shop";
import {Suspense} from "react";

const root = document.getElementById('root')

if (!root) throw new Error('Root element not found')

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={<div>Loading...</div>}>
                    <LazyAbout/>
                </Suspense>
            },
            {
                path: "/shop",
                element: <Suspense fallback={<div>Loading...</div>}>
                    <LazyShop/>
                </Suspense>
            }
        ]
    },
    {
        path: "/*",
        element: <div>Not found</div>,

    },

]);

createRoot(root).render(
    <RouterProvider router={router}/>
);

