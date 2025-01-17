import { FaArrowRight } from "react-icons/fa";


const CoursesInstuctorBanner = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="flex-none lg:flex justify-between  items-center">
                    <img src="https://res.cloudinary.com/dxdopsw8a/image/upload/v1737135177/Screenshot_2025-01-17_232935_sinaoa.png" alt="" className="w-96 lg:w-[500px] h-96 lg:h-[525px]" />
                    <div className="p-5 lg:p-0">
                        <h1 className="text-xl font-bold py-5">Become an Instructor</h1>
                        <p>Instructors from around the world teach millions of <br /> students on Byway. We provide the tools and skills to teach what you love.</p>
                        <button className="bg-[#8B5CF6] text-white btn mt-5 rounded-md hover:bg-[#60A5FA] transition-colors duration-300">Start Your Instructor Journey <FaArrowRight /></button>
                    </div>
                </div>
                <div className="flex-none lg:flex flex-row-reverse justify-between  items-center">
                <img src="https://res.cloudinary.com/dxdopsw8a/image/upload/v1737135192/Screenshot_2025-01-17_232947_a2xyka.png" alt="" className="w-96 lg:w-[500px] h-96 lg:h-[525px]" />
                    <div className="p-5 lg:p-0">
                        <h1 className="text-xl font-bold py-5">Transform your life through education</h1>
                        <p>Learners around the world are launching new careers, <br /> advancing in their fields, and enriching their lives.</p>
                        <button className="bg-[#8B5CF6] text-white btn mt-5 rounded-md hover:bg-[#60A5FA] transition-colors duration-300">Checkout Courses <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesInstuctorBanner;