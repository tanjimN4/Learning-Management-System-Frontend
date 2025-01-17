import { Link } from "react-router";
import SocialLogin from "./SocialLogin";
import { FaArrowRight } from "react-icons/fa";

const SignUp = () => {
    return (
        <div className="flex justify-center">
            <div className="flex items-center flex-row-reverse">
                <div className="mx-10">
                    <div>
                        <h1 className="text-3xl font-bold mb-5">Create Your Account</h1>

                        <form className="">
                            <div className="flex flex-col">
                                <label className="text-lg font-medium my-2" htmlFor="">Full Name</label>
                                <div className="flex gap-2">
                                    <input className="border-2 p-1 rounded-md" type="text" placeholder='First Name' />
                                    <input className="border-2 p-1 rounded-md" type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg font-medium my-2" htmlFor="">User Name</label>
                                <input className="border-2 p-1 rounded-md" placeholder="User Name" type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg font-medium my-2" htmlFor="">Email</label>
                                <input className="border-2 p-1 rounded-md" placeholder="Your Email" type="email" />
                            </div>
                            <div className="flex gap-2">
                                <div className="flex flex-col">
                                    <label className="text-lg font-medium my-2" htmlFor="">Password</label>
                                    <input className="border-2 p-1 rounded-md" type="password" placeholder='Enter Password' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-lg font-medium my-2" htmlFor="">Confirm Password</label>
                                    <input className="border-2 p-1 rounded-md" type="password" placeholder='Confirm Password' />
                                </div>
                            </div>
                            <button className="bg-[#8B5CF6] text-white btn mt-5 rounded-md hover:bg-[#60A5FA] transition-colors duration-300">Sign Up<FaArrowRight /></button>
                        </form>
                    </div>
                    <div>
                        <SocialLogin></SocialLogin>
                        <h1 className="text-slate-700 mt-5 text-center text-lg">
                            All ready have an account?
                            <Link className="text-blue-500 hover:underline ml-1" to="/login">
                                Sign In
                            </Link>
                        </h1>
                    </div>
                </div>
                <div><img src="https://res.cloudinary.com/dxdopsw8a/image/upload/v1737137605/Frame_427319048_oeankw.png" alt="" className="h-[620px] w-[528px]" /></div>
            </div>
        </div>
    );
};

export default SignUp;