
import { useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import PopularMentors from './PopularMentors';
import FeaturedCourses from './FeaturedCourses';

const CoursesPage = () => {
  
  const [showDiv, setShowDiv] = useState(false)

  const toggleBox = () => {
    setShowDiv(!showDiv)
  }
  const sections = ["Category", "Level", "Lectures", "Language", "Rating", "Price"];

  return (
    <div>
      <div className="container flex mx-auto p-6">
        <div className='w-60'>
          <h1 className="text-3xl font-bold pl-3">All Courses</h1>
          <div>
            <button onClick={toggleBox} className='btn border-2 ml-3 border-black'><IoFilter></IoFilter>Filter</button>
            {
              showDiv &&
              <div>
                {sections.map((title, index) => (
                  <div className="w-full mt-2" key={index}>
                    <div className="collapse collapse-arrow">
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title text-xl font-medium flex justify-between items-center border-b pb-2">
                        {title}
                      </div>
                      <div className="collapse-content">
                        <label>
                          <input type="checkbox" className="checkbox mt-1" />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
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
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <PopularMentors></PopularMentors>
        <FeaturedCourses></FeaturedCourses>
      </div>
    </div>
  );
};

const courses = [
  {
    course_name: "Web Development Bootcamp",
    course_image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
    course_owner: "Angela Yu",
    price: "99.9",
    rating: 4.8,
    ratings_by: 1500,
    lectures: 30,
    level: "Beginner",
    duration: "15 hours",
    description: "Learn to build and deploy modern web applications using HTML, CSS, and JavaScript.",
    topics: ["HTML Basics", "CSS Fundamentals", "JavaScript Essentials", "Responsive Design"],
    enrolled: 12000,
    url: "https://example.com/web-development-bootcamp",
    certificate: true,
    last_updated: "2025-01-01",
    language: "English",
    prerequisites: ["Basic computer knowledge"],
    original_price: "199.9",
    discounted_price: "99.9",
    category: "Web Development",
  },
  {
    course_name: "Data Science with Python",
    course_image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059231/download_2_pss0yr.jpg",
    course_owner: "Jose Portilla",
    price: "149.9",
    rating: 4.7,
    ratings_by: 1800,
    lectures: 40,
    level: "Intermediate",
    duration: "20 hours",
    description: "Master data analysis, visualization, and machine learning with Python.",
    topics: ["Python Basics", "Data Visualization", "Pandas and NumPy", "Machine Learning"],
    enrolled: 10000,
    url: "https://example.com/data-science-with-python",
    certificate: true,
    last_updated: "2025-01-01",
    language: "English",
    prerequisites: ["Basic Python knowledge"],
    original_price: "249.9",
    discounted_price: "149.9",
    category: "Data Science",
  },
  {
    course_name: "Digital Marketing Mastery",
    course_image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059266/download_cjfqzs.jpg",
    course_owner: "Neil Patel",
    price: "79.9",
    rating: 4.6,
    ratings_by: 1200,
    lectures: 25,
    level: "Beginner",
    duration: "12 hours",
    description: "Learn the essentials of digital marketing, including SEO, PPC, and content strategy.",
    topics: ["SEO Basics", "Social Media Marketing", "Google Ads", "Content Marketing"],
    enrolled: 8000,
    url: "https://example.com/digital-marketing-mastery",
    certificate: true,
    last_updated: "2024-12-15",
    language: "English",
    prerequisites: ["Basic understanding of marketing principles"],
    original_price: "129.9",
    discounted_price: "79.9",
    category: "Digital Marketing",
  },
  {
    course_name: "Graphic Design Essentials",
    course_image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059260/download_1_cll7d8.jpg",
    course_owner: "Chris Do",
    price: "149.9",
    rating: 4.9,
    ratings_by: 2000,
    lectures: 35,
    level: "Beginner",
    duration: "18 hours",
    description: "Understand the principles of design and master tools like Photoshop and Illustrator.",
    topics: ["Design Principles", "Adobe Photoshop", "Adobe Illustrator", "Typography"],
    enrolled: 15000,
    url: "https://example.com/graphic-design-essentials",
    certificate: true,
    last_updated: "2025-01-10",
    language: "English",
    prerequisites: ["Basic computer skills"],
    original_price: "249.9",
    discounted_price: "149.9",
    category: "Design",
  },
  
];


export default CoursesPage;