
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router";

const Dashboard = () => {

    const links = (
        <>
            <li>
                <Link className="focus:bg-purple-500 focus:text-white" to="/dashboard">Dashboard</Link>
                <Link className="focus:bg-purple-500 focus:text-white" to="/dashboard/courses">Courses</Link>
                <Link className="focus:bg-purple-500 focus:text-white" to="/dashboard/addcourse">Add Courses</Link>
            </li>
        </>
    );

    return (
        <div className="dashboard lg:flex justify-center max-w-screen">
            {/* Sidebar */}
            <div className="w-full lg:w-80 lg:min-h-screen bg-gray-800 text-white">
                {/* Dropdown for small devices */}
                <div className="lg:hidden p-4 flex justify-between">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost w-full flex justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                            <span className="ml-2 text-3xl text-[#8B5CF6]">Learnify </span>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-gray-700 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <h1 className=""><Link to={'/'}><IoArrowBackCircleSharp className="text-3xl mt-2" /></Link></h1>
                </div>

                {/* Full menu for larger devices */}
                <div className="hidden lg:block p-4">
                    <h1 className="text-3xl font-bold mb-4 flex justify-between text-[#8B5CF6] text-center"><span>Learnify </span><span><Link to={'/'}><IoArrowBackCircleSharp /></Link></span></h1>
                    <ul className="menu">{links}</ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-2/3 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
