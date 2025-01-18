import { FaStar } from "react-icons/fa";


const PopularMentors = () => {
    const Instructors = [
        {
            instructor_name: "Angela Yu",
            students: 150000,
            rating: 4.8,
            profession: "Full-Stack Developer",
            image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg",
        },
        {
            instructor_name: "Jose Portilla",
            students: 200000,
            rating: 4.7,
            profession: "Data Scientist",
            image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737120225/download_4_i0hvdu.jpg",
        },
        {
            instructor_name: "Neil Patel",
            students: 120000,
            rating: 4.6,
            profession: "Digital Marketing Expert",
            image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737120236/download_6_ot2fyb.jpg",
        },
        {
            instructor_name: "Chris Do",
            students: 100000,
            rating: 4.9,
            profession: "Graphic Designer",
            image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737120236/download_6_ot2fyb.jpg",
        },
    ];
    return (
        <div className="my-10">
            <h1 className="text-3xl font-bold pb-10">Popular Mentors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                {Instructors.map((instructor, index) => (
                                    <div key={index} className="card bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img
                                                src={instructor.image}
                                                alt={instructor.instructor_name}
                                                className="rounded-xl w-64 h-52 object-cover"
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="text-2xl font-bold text-center">{instructor.instructor_name}</h2>
                                            <p className="text-sm text-gray-500 text-center">{instructor.profession}</p>
                                            <div className="flex justify-center text-center">
                                                <p className="flex items-center"><FaStar className="text-yellow-500" /><span>{instructor.rating}</span></p>
                                                <p className="text-right">{instructor.students} Students</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
        </div>
    );
};

export default PopularMentors;