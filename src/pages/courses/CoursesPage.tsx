
import { useEffect, useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import PopularMentors from './PopularMentors';
import FeaturedCourses from './FeaturedCourses';
import { Link } from 'react-router';
import useAxiosPublic from '../../hook/useAxiosPublic';


const CoursesPage = () => {
  const axiosPublic = useAxiosPublic()
  const [courses, setCourses] = useState([])
  const [allCourses, setAllCourses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPage] = useState(1)
  const [sections, setSections] = useState([])
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [filter, setFilter] = useState([])

  useEffect(() => {
    setFilter(courses);
  }, [courses]);
  
  console.log(filter);
  const [showDiv, setShowDiv] = useState(false)

  const toggleBox = () => {
    setShowDiv(!showDiv)
  }
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
  useEffect(() => {
    axiosPublic.get('/api/allcourses')
      .then(res => {
        setAllCourses(res.data)
      })

  }, [axiosPublic])
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }



  const handleOpen = (option: string, title: string) => {
    console.log(title,option);

    setSelectedOptions({
      ...selectedOptions,
      [title]: option, // Set the selected option for the title (category, rating, etc.)
    });
    if (title === "Category") {
      const filtered = allCourses.filter((course) => course.category === option);
      setFilter(filtered)
    }
    if (title === "Rating") {
      const filtered = allCourses.filter((course) => {
        const stars = parseInt(option.split(" ")[0]); // Extract the number from "1 Star", "2 Stars", etc.
        return Math.floor(course.rating) === stars; // Compare with the floored course rating
      });
      setFilter(filtered);
    }
    if (title === "Price") {
      const filtered = allCourses.filter((course) => {
        if (option === "Free") {
          return course.price === 0; // Assuming 0 means free in the database
        } else if (option === "$0 - $50") {
          return course.price > 0 && course.price <= 50;
        } else if (option === "$50 - $100") {
          return course.price > 50 && course.price <= 100;
        } else if (option === "$100 - $200") {
          return course.price > 100 && course.price <= 200;
        } else if (option === "$200+") {
          return course.price > 200;
        }
        return false;
      });
      setFilter(filtered);
    }
    if (title === "Lectures") {
      const filtered = allCourses.filter((course) => {
        if (option === "10-20") {
          return course.lectures > 10 && course.lectures <= 20
        } else if (option === "20-50") {
          return course.lectures > 20 && course.lectures <= 50;
        } else if (option === "50--100") {
          return course.lectures > 50 && course.lectures <= 100;
        } else if (option === "100+") {
          return course.lectures > 100;
        }
        return false;
      });
      setFilter(filtered);
    }
    if (title === "Language") {
      const filtered = allCourses.filter((course) => course.language === option);
      setFilter(filtered)
    }
    if (title === "Level") {
      const filtered = allCourses.filter((course) => course.level === option);
      setFilter(filtered)
    }

  };


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
                            <input onChange={() => setOpenIndex(openIndex === idx ? null : idx)} type="checkbox" checked={openIndex === idx} className="peer" />
                            <div className="collapse-title text-xl font-medium flex justify-between items-center border-b pb-2">
                              {title}
                            </div>
                            <div className="collapse-content">
                              {Array.isArray(options) &&
                                options.map((option, idx) => (
                                  <label key={idx} className="block">
                                    <input onClick={() => { handleOpen(option, title)}} type="checkbox" readOnly checked={selectedOptions[title] === option} className="checkbox " />
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
          {filter.map((course, index) => (
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
                  <Link className='btn btn-success text-white' to={`/details/${course._id}`}>View Details</Link>
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