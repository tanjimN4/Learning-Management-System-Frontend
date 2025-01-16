import { Outlet } from "react-router";
import NavBar from "../components/NavBar";


const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex justify-center">
            <main className="max-w-8xl">
                <Outlet></Outlet>
            </main>
            </div>
        </div>
    );
};

export default Layout;