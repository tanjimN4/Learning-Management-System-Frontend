
import { useEffect, useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import PopularMentors from './PopularMentors';
import FeaturedCourses from './FeaturedCourses';
import { Link } from 'react-router';
import useAxiosPublic from '../../hook/useAxiosPublic';
type Section = {
  [key: string]: string[]; // Sections like Category, Level, etc., each containing an array of options
};

const CoursesPage = () => {
  const axiosPublic = useAxiosPublic()
  const [courses, setCourses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPage] = useState(1)
  console.log(courses);


  const [showDiv, setShowDiv] = useState(false)

  const toggleBox = () => {
    setShowDiv(!showDiv)
  }
  const sections: Section[] = [
    {
      Category: [
        "Web Development",
        "Data Science",
        "Artificial Intelligence",
        "Mobile App Development",
        "Game Development",
        "Graphic Design",
        "UI/UX Design",
        "Animation",
        "Interior Design",
        "Fashion Design",
        "Photography",
        "Video Editing",
        "3D Modeling",
        "Digital Marketing",
        "Entrepreneurship",
        "Financial Management",
      ]
    },
    {
      Level: [
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert"
      ]
    },
    {
      Lectures: [
        "10-20",
        "20-50",
        "50-100",
        "100+"
      ]
    },
    {
      Language: [
        "English",
        "Spanish",
        "French",
        "German",
        "Chinese",
        "Japanese",
        "Arabic",
        "Russian",
        "Hindi"
      ]
    },
    {
      Rating: [
        "1 Star",
        "2 Stars",
        "3 Stars",
        "4 Stars",
        "5 Stars"
      ]
    },
    {
      Price: [
        "Free",
        "$0 - $50",
        "$50 - $100",
        "$100 - $200",
        "$200+"
      ]
    }
  ];
  useEffect(() => {
    axiosPublic.get(`/api/courses?page=${currentPage}&limit=6`)
      .then(res => {
        setCourses(res.data.courses);
        setTotalPage(res.data.totalPages)
      })
      .catch(err => {
        console.error(err);
      });
  }, [axiosPublic, currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <div className="container flex mx-auto p-6">
        <div className='w-72'>
          <h1 className="text-3xl font-bold pl-3">All Courses</h1>
          <div>
            <button onClick={toggleBox} className='btn border-2 ml-3 border-black'><IoFilter></IoFilter>Filter</button>
            {
              showDiv &&
              <div>
                {sections.map((section, index) => {
                  // Extract the title (key) and options (value) from each section object
                  const [title, options] = Object.entries(section)[0];

                  return (
                    <div className="w-full mt-2" key={index}>
                      <div className="collapse collapse-arrow">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium flex justify-between items-center border-b pb-2">
                          {title}
                        </div>
                        <div className="collapse-content">
                          {options.map((option, idx) => (
                            <label key={idx} className="block">
                              <input type="checkbox" className="checkbox mt-1" />
                              <span className="ml-2">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            }
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[1000px]">
          {courses.map((course, index) => (
            <div key={index} className="card bg-base-100 shadow-xl h-[500px]">
              <figure>
                <img
                  src={course.course_image}
                  alt={course.course_name}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-bold">{course.course_name}</h2>
                <p className="text-sm text-gray-600">by {course.course_owner}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">
                    {"⭐".repeat(Math.floor(course.rating))}
                    {course.rating % 1 !== 0 && "☆"}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">
                    ({course.ratings_by} ratings)
                  </span>
                </div>
                <p className="mt-2 text-lg text-green-600 font-bold">
                  ${course.price}{" "}
                  {course.original_price && (
                    <span className="line-through text-gray-500 text-sm">
                      ${course.original_price}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-600">
                  {course.level} | {course.lectures} Lectures
                </p>
                <div className="card-actions mt-4">
                  <Link className='btn btn-success text-white' to={'/details'}>View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center my-4">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)} className="btn bg-[#8B5CF6] hover:bg-[#60A5FA]  mr-2">
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)} className="btn bg-[#8B5CF6] hover:bg-[#60A5FA] ">
            Next
          </button>
        )}
      </div>
      <div>
        <PopularMentors></PopularMentors>
        <FeaturedCourses></FeaturedCourses>
      </div>
    </div>
  );
};




export default CoursesPage;