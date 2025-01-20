import { useState } from "react";
import MyProfile from "./MyProfile";
import MyCourses from "./MyCourses";
import Teachers from "./Teachers";
import Message from "./Message";
import MyReviews from "./MyReviews";


const Profile = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="">
            <div className="flex gap-10 m-10">
                <div className="w-96 rounded-xl border-2 p-2 bg-[#F8FAFC]">
                    <div>
                        <div className="flex justify-center text-center">
                            <div>
                                <img src="https://res.cloudinary.com/dxdopsw8a/image/upload/v1737354869/Ellipse_53_ovroho.png" alt="" className="rounded-full w-40 pt-7" />
                                <h1 className="text-xl font-semibold py-2">John Doe</h1>
                            </div>
                        </div>
                        <div>
                            <button
                                className={`w-full  btn bg-[#8B5CF6] hover:bg-[#60A5FA] text-white ${index === 0 ? "bg-[#60A5FA] " : ""}`}
                                onClick={() => setIndex(0)}
                            >
                                Profile
                            </button>
                            <button
                                className={`w-full   btn bg-[#8B5CF6] hover:bg-[#60A5FA] text-white ${index === 1 ? "bg-[#60A5FA] " : ""}`}
                                onClick={() => setIndex(1)}
                            >
                                My Courses
                            </button>
                            <button
                                className={`w-full   btn bg-[#8B5CF6] hover:bg-[#60A5FA] text-white ${index === 2 ? "bg-[#60A5FA] " : ""}`}
                                onClick={() => setIndex(2)}
                            >
                                Teachers
                            </button>
                            <button
                                className={`w-full   btn bg-[#8B5CF6] hover:bg-[#60A5FA] text-white ${index === 3 ? "bg-[#60A5FA] " : ""}`}
                                onClick={() => setIndex(3)}
                            >
                                Message
                            </button>
                            <button
                                className={`w-full   btn bg-[#8B5CF6] hover:bg-[#60A5FA] text-white ${index === 4 ? "bg-[#60A5FA] " : ""}`}
                                onClick={() => setIndex(4)}
                            >
                                My Reviews
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        index === 0 && <div><MyProfile></MyProfile></div>
                    }
                    {
                        index === 1 && <div><MyCourses></MyCourses></div>
                    }
                    {
                        index === 2 && <div><Teachers></Teachers></div>
                    }
                    {
                        index === 3 && <div><Message></Message></div>
                    }
                    {
                        index === 4 && <div><MyReviews></MyReviews></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;