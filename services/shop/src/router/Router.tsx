import {App} from "@/components/App";
import {Suspense} from "react";
import {LazyShop} from "@/pages/shop";
import {createBrowserRouter} from "react-router-dom";

export const routes = [
    {
        path: "/shop",
        element: <App/>,
        children: [
            {
                path: "/shop/main",
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
]

export const router = createBrowserRouter(routes);

export default routes