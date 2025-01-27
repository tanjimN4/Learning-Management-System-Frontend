import { useEffect, useState } from "react";
import useAxiosPublic from "../hook/useAxiosPublic";
import { IoSearchOutline } from "react-icons/io5";
import UpdateDelete from "./UpdateDelete";

const Dcourses = () => {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [selectCategory, setSelectCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const totalItemsPerPage = 6;
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/api/allcourses')
            .then(response => {
                setCourses(response.data);
                setFilteredCourses(response.data);  // Initialize with all courses
            });
    }, [axiosPublic]);

    // Filter courses based on search term and selected category
    const filterCourses = () => {
        const filtered = courses.filter(course => {
            const matchCategory = selectCategory ? course.category === selectCategory : true;
            const matchSearch = course.course_name.toLowerCase().includes(search.toLowerCase());
            return matchCategory && matchSearch;
        });
        setFilteredCourses(filtered);
    };

    // Pagination Logic
    const indexOfLastItem = currentPage * totalItemsPerPage;
    const indexOfFirstItem = indexOfLastItem - totalItemsPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredCourses.length / totalItemsPerPage);

    // Handle search
    const handleSearch = () => {
        filterCourses();
        setCurrentPage(1); // Reset page to 1 when performing search
    };

    return (
        <div>
            <div className="flex justify-around">
                <h1 className="text-3xl font-bold">Courses</h1>
                <div className="search-bar flex items-center">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        className="p-2 border rounded-md"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button onClick={handleSearch}>
                        <div className="bg-purple-600 rounded-full relative right-8">
                            <IoSearchOutline className="text-xl m-1 text-white" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Display filtered courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 lg:grid-cols-3">
                {currentCourses.map(course => (
                    <div key={course.id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={course.course_image}
                                className="h-56 w-full"
                                alt={course.course_name}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.course_name}</h2>
                            <p>If a dog chews shoes, whose shoes does he choose?</p>
                            <UpdateDelete course={course} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            {
                currentCourses.length > 5 &&
                <div className="flex justify-center mt-4">
                    <button
                        className="p-2 bg-gray-300 rounded-md mr-2"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`p-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded-md mx-1`}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="p-2 bg-gray-300 rounded-md ml-2"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            }
        </div>
    );
};

export default Dcourses;
