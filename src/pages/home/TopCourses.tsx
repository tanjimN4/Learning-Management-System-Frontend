import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const TopCourses = () => {
    const topCourses = [
        {
            "course_name": "Web Development Bootcamp",
            "course_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
            "course_owner": "Angela Yu",
            "price": "99.9",
            "rating": 4.8,
            "ratings_by": 1500,
            "lectures": 30,
            "level": "Beginner"
        },
        {
            "course_name": "Data Science with Python",
            "course_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059231/download_2_pss0yr.jpg",
            "course_owner": "Jose Portilla",
            "price": "149.9",
            "rating": 4.7,
            "ratings_by": 1800,
            "lectures": 40,
            "level": "Intermediate"
        },
        {
            "course_name": "Digital Marketing Mastery",
            "course_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059266/download_cjfqzs.jpg",
            "course_owner": "Neil Patel",
            "price": "79.9",
            "rating": 4.6,
            "ratings_by": 1200,
            "lectures": 25,
            "level": "Beginner"
        },
        {
            "course_name": "Graphic Design Essentials",
            "course_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059260/download_1_cll7d8.jpg",
            "course_owner": "Chris Do",
            "price": "149.9",
            "rating": 4.9,
            "ratings_by": 2000,
            "lectures": 35,
            "level": "Beginner"
        }
    ];

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

        return (
            <>
                {Array(fullStars).fill(<FaStar className="text-yellow-400" />)}
                {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
                {Array(emptyStars).fill(<FaRegStar className="text-yellow-400" />)}
            </>
        );
    };

    return (
        <div className="flex justify-center">
            <div>
                <div className="flex justify-between text-center items-center my-10">
                    <h1 className="text-4xl font-bold">Top Courses</h1>
                    <p className="text-center items-center text-[#3B82F6] cursor-pointer">See All</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {topCourses.map((course, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={course.course_image}
                                    alt={course.course_name}
                                    className="rounded-xl w-64 h-52"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.course_name}</h2>
                                <p>By {course.course_owner}</p>
                                <div className="flex items-center gap-2 my-2">
                                    <span className="flex">{renderStars(course.rating)}</span>
                                    <span className="text-sm text-gray-500">({course.ratings_by} ratings)</span>
                                </div>
                                <p className='text-sm text-slate-600'>{course.lectures} Lectures. {course.level}</p>
                                <p className="text-lg font-bold">${parseFloat(course.price).toFixed(1)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCourses;
