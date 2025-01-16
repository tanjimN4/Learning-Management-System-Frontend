import Marquee from "react-fast-marquee";

const Courses = () => {
    const courseMember = [
        {
            "value": "250+",
            "description": "Countries for our customers"
        },
        {
            "value": "1000+",
            "description": "Brands for the best service"
        },
        {
            "value": "15+",
            "description": "Countries for installation"
        },
        {
            "value": "2400+",
            "description": "Stores for our retail services"
        }
    ]
    return (
        <div className="bg-[#F8FAFC] py-8">
    <Marquee gradient={false} speed={50} className="w-full">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
            {courseMember.map((item, index) => (
                <div
                    key={index}
                    className="text-center px-4 sm:px-6 md:px-8 w-[150px] sm:w-[200px] md:w-[250px]"
                >
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        {item.value}
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    </Marquee>
</div>


    );
};

export default Courses;