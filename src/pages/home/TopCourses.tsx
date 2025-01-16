
const TopCourses = () => {
    const topCourses = [
        {
            "course_name": "Web Development Bootcamp",
            "course_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
            "description": "Learn web development from scratch with HTML, CSS, JavaScript, and more!",
            "price": "$99",
            "rating": 4.8,
            "lectures": 30,
            "level": "Beginner"
        },
        {
            "course_name": "Data Science with Python",
            "course_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059231/download_2_pss0yr.jpg",
            "description": "Master Python and use it for data analysis, machine learning, and AI applications.",
            "price": "$120",
            "rating": 4.7,
            "lectures": 40,
            "level": "Intermediate"
        },
        {
            "course_name": "Digital Marketing Mastery",
            "course_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059266/download_cjfqzs.jpg",
            "description": "Learn digital marketing strategies, SEO, social media marketing, and more.",
            "price": "$79",
            "rating": 4.6,
            "lectures": 25,
            "level": "Beginner"
        },
        {
            "course_name": "Graphic Design Essentials",
            "course_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059260/download_1_cll7d8.jpg",
            "description": "Create stunning visuals with graphic design tools like Photoshop, Illustrator, and more.",
            "price": "$150",
            "rating": 4.9,
            "lectures": 35,
            "level": "Beginner"
        }
    ]

    return (
       <div className="flex justify-center mx-5">
         <div>
            <h1 className="text-4xl font-bold my-10 text-center">Top Courses</h1>
            <div className="grid grid-cols-4 gap-5">
                {topCourses.map((course, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl ">
                        <figure className="px-10 pt-10">
                            <img
                                src={ course.course_image}
                                alt="Shoes"
                                className="rounded-xl w-64 h-52" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{ course.course_name}</h2>
                            <p> {course.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </div>
    );
};

export default TopCourses;