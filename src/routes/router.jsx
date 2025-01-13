import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
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
                path: 'aboutUs',
                element: <h3>about us</h3>
            },
            {
                path: 'contactUs',
                element: <h3>contact us</h3>
            },
            {
                path: 'login',
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