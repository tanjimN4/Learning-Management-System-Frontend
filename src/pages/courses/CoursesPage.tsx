
import { useEffect, useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import PopularMentors from './PopularMentors';
import FeaturedCourses from './FeaturedCourses';
import { Link } from 'react-router';
import useAxiosPublic from '../../hook/useAxiosPublic';


const CoursesPage = () => {
  const axiosPublic = useAxiosPublic()
  const [courses, setCourses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPage] = useState(1)
  // console.log(courses);
  const [sections, setSections] = useState([])

  

  const [showDiv, setShowDiv] = useState(false)

  const toggleBox = () => {
    setShowDiv(!showDiv)
  }
  console.log(sections);
 
  useEffect(() => {
    axiosPublic.get('api/filterdata')
      .then(res => {
        const filteredSections = res.data.data.map(({ _id, __v, ...section }) => section);
        setSections(filteredSections);
      })
      .catch(err => {
        console.error(err);
      });
  }, [axiosPublic])

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
            {showDiv && (
              <div>
                {Array.isArray(sections) &&
                  sections.map((section, index) => {
                    // Iterate over each key-value pair in the section
                    return Object.entries(section).map(([title, options], idx) => {
                      return (
                        <div key={idx} className="w-full mt-2">
                          <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl font-medium flex justify-between items-center border-b pb-2">
                              {title}
                            </div>
                            <div className="collapse-content">
                              {Array.isArray(options) &&
                                options.map((option, idx) => (
                                  <label key={idx} className="block">
                                    <input type="checkbox" className="checkbox mt-1" />
                                    <span className="ml-2">{option}</span>
                                  </label>
                                ))}
                            </div>
                          </div>
                        </div>
                      );
                    });
                  })}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[1100px]">
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