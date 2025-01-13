import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const RootLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <>
        { noHeaderFooter || <Navbar/>}
        <section className="min-h-screen">
        <Outlet/>
        </section>
        { noHeaderFooter || <Footer/>}
        </>
    );
};

export default RootLayout;