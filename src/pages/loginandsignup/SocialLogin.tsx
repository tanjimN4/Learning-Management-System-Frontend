import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation } from "react-router";


const SocialLogin = () => {
    const location =useLocation()
    console.log(location);
    
    return (
        <div>
            <div className="flex justify-center items-center mt-10 gap-2">
                <hr className="flex-grow" />
                <p className="w-28 text-slate-400 text-center px-2">Sign {location.pathname === '/login' ? 'in' : 'up'} with</p>
                <hr className="flex-grow" />
            </div>
            <div className="flex justify-center gap-3 mt-8">
                <button className="btn border-2"><FaFacebook className="text-blue-600 text-2xl mx-10"/></button>
                <button className="btn border-2"><FcGoogle className="text-2xl mx-10"/></button>
            </div>
        </div>

    );
};

export default SocialLogin;