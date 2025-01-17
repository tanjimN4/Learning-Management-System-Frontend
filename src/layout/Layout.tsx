import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex justify-center">
            <main className="max-w-8xl">
                <Outlet></Outlet>
            </main>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;