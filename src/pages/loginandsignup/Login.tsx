import { FaArrowRight } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router";


const Login = () => {
    return (
        <div className=" flex justify-center">
            <div className="flex items-center">
                <div className="mx-10">
                    <div >
                        <h1 className="text-3xl font-bold mb-5">Sign in to your account</h1>

                        <form className="">
                            <div className="flex flex-col">
                                <label className="text-lg font-medium my-2" htmlFor="">Eamil</label>
                                <input className="border-2 p-1 rounded-md" type="email" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg font-medium my-2" htmlFor="">Password</label>
                                <input className="border-2 p-1 rounded-md" type="password" />
                            </div>
                            <button className="bg-[#8B5CF6] text-white btn mt-5 rounded-md hover:bg-[#60A5FA] transition-colors duration-300">Sign In<FaArrowRight /></button>
                        </form>
                    </div>
                    <div>
                        <SocialLogin></SocialLogin>
                        <h1 className="text-slate-700 mt-5 text-center text-lg">
                            Do not have an account?
                            <Link className="text-blue-500 hover:underline ml-1" to="/signup">
                                Sign Up
                            </Link>
                        </h1>

                    </div>
                </div>
                <div><img src="https://res.cloudinary.com/dxdopsw8a/image/upload/v1737137607/Frame_427319048_1_awx3wv.png" alt="" className="h-[620px] w-[528px]" /></div>
            </div>
        </div>
    );
};

export default Login;