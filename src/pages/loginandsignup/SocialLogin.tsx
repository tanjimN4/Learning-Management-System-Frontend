import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
    const location = useLocation();
    const { signGoogle, signFacebook } = useContext(AuthContext);

    const handleFacebookLogin = () => {
        signFacebook()
            .then((res) => {
                // Handle successful login with Facebook
                console.log("Facebook login success", res);
            })
            .catch((error) => {
                console.error("Error during Facebook sign-in", error);
            });
    };

    const handleGoogleLogin = () => {
        signGoogle()
            .then((res) => {
                // Handle successful login with Google
                console.log("Google login success", res);
            })
            .catch((error) => {
                console.error("Error during Google sign-in", error);
            });
    };

    return (
        <div>
            <div className="flex justify-center items-center mt-10 gap-2">
                <hr className="flex-grow" />
                <p className="w-28 text-slate-400 text-center px-2">Sign {location.pathname === '/login' ? 'in' : 'up'} with</p>
                <hr className="flex-grow" />
            </div>
            <div className="flex justify-center gap-3 mt-8">
                <button onClick={handleFacebookLogin} className="btn border-2">
                    <FaFacebook className="text-blue-600 text-2xl mx-10" />
                </button>
                <button onClick={handleGoogleLogin} className="btn border-2">
                    <FcGoogle className="text-2xl mx-10" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
