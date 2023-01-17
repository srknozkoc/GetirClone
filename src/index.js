import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App";

import Main from "./pages/main";
import Landing from "./pages/landing";
import ErrorPage from "./pages/error-page";
import CategoryDetail from "./pages/category-detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Landing />,
            },
            {
                path: "kategoriler",
                element: <Main />,
                children: [
                    {
                        path: "",
                        element: <CategoryDetail />,
                    },
                ]
            },
            {
                path: "kategori",
                element: <Main />,
                children: [
                    {
                        path: ":categorySlug/:subCategorySlug?",
                        element: <CategoryDetail />,
                    },
                ]
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

