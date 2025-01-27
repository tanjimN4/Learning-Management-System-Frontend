const Addcourse = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const courseData = {
            course_name: formData.get("course_name"),
            course_description: formData.get("course_description"),
            price: formData.get("price"),
            duration: formData.get("duration"),
            level: formData.get("level"),
            instructor_name: formData.get("instructor_name"),
            lecture: formData.get("lecture"),
            language: formData.get("language"),
            syllabus: formData.get("syllabus"),
        };
        console.log(courseData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold mb-6">Add Course</h1>
            <form onSubmit={handleSubmit}>
                {/* Course Name */}
                <div className="mb-4">
                    <label htmlFor="course_name" className="block text-sm font-medium text-gray-700">Course Name</label>
                    <input
                        type="text"
                        id="course_name"
                        name="course_name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Course Description */}
                <div className="mb-4">
                    <label htmlFor="course_description" className="block text-sm font-medium text-gray-700">Course Description</label>
                    <textarea
                        id="course_description"
                        name="course_description"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Duration */}
                <div className="mb-4">
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Level */}
                <div className="mb-4">
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
                    <select
                        id="level"
                        name="level"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                {/* Instructor Info */}
                <div className="mb-4">
                    <h3 className="font-medium text-lg">Instructor Info</h3>
                    <div className="mt-2">
                        <label htmlFor="instructor_name" className="block text-sm font-medium text-gray-700">Instructor Name</label>
                        <input
                            type="text"
                            id="instructor_name"
                            name="instructor_name"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                {/* Lecture */}
                <div className="mb-4">
                    <label htmlFor="lecture" className="block text-sm font-medium text-gray-700">Lecture</label>
                    <input
                        type="number"
                        id="lecture"
                        name="lecture"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Language */}
                <div className="mb-4">
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
                    <select
                        id="language"
                        name="language"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        {/* Add other languages as needed */}
                    </select>
                </div>

                {/* Syllabus */}
                <div className="mb-4">
                    <label htmlFor="syllabus" className="block text-sm font-medium text-gray-700">Syllabus</label>
                    <textarea
                        id="syllabus"
                        name="syllabus"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Submit Button */}
                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                    >
                        Add Course
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Addcourse;
