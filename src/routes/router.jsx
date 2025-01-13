import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <h3>home page</h3>
            },
            {
                path: 'community',
                element: <h3>community</h3>
            },
            {
                path: 'blogs',
                element: <h3>blogs</h3>
            },
            {
                path: 'about us',
                element: <h3>about us</h3>
            },
            {
                path: 'contact us',
                element: <h3>contact us</h3>
            },
            {
                path: '/login',
                element: <h3>login</h3>
            },
            {
                path: 'register',
                element: <h3>register</h3>
            }
        ]
    },
    
]);

export default router;