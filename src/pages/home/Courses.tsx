import Marquee from "react-fast-marquee";

const Courses = () => {
    const courseMember = [
        {
            "value": "250+",
            "description": "High-quality courses taught by industry-leading mentors"
        },
        {
            "value": "1000+",
            "description": "Trusted brands offering exclusive learning content"
        },
        {
            "value": "15+",
            "description": "Countries with students benefiting from our courses"
        },
        {
            "value": "2400+",
            "description": "Partnered institutions offering our courses globally"
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