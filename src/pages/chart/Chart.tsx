

const Chart = () => {
    const chart = {
        course_name: "Web Development Bootcamp",
        course_image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
        course_owner: "Angela Yu",
        instructor: {
            name: "Angela Yu",
            bio: "Angela Yu is an experienced full-stack developer and educator, known for her engaging teaching style and ability to break down complex topics into easy-to-understand lessons.",
            profile_image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
            reviews: '40445 Reviews',
            students: '500 Students',
            courses: '15 Courses',
            profession: 'Web Development',
        },
        price: "99.9",
        rating: 4.8,
        ratings_by: 1500,
        lectures: 30,
        level: "Beginner",
        duration: "15 hours",
        description: "Learn to build and deploy modern web applications using HTML, CSS, and JavaScript. This bootcamp will take you from absolute beginner to a confident web developer ready to create dynamic websites.",
        course_description: "This Web Development Bootcamp is designed for aspiring developers who want to kickstart their career in web development. With a focus on practical skills, this course covers everything from the basics of HTML and CSS to more advanced JavaScript concepts. Through hands-on projects and exercises, you'll gain real-world experience that will help you build a strong portfolio and land your first web development job.",
        topics: ["HTML Basics", "CSS Fundamentals", "JavaScript Essentials", "Responsive Design"],
        syllabus: [
            {
                title: "Introduction to HTML",
                lessons: 4,
                time: "3 hours",
                content: [
                    "What is HTML?",
                    "HTML Elements and Attributes",
                    "Creating Your First Web Page",
                    "Best Practices in HTML",
                ],
            },
            {
                title: "CSS Fundamentals",
                lessons: 4,
                time: "3.5 hours",
                content: [
                    "Introduction to CSS",
                    "Selectors and Properties",
                    "Box Model and Layouts",
                    "Styling Text and Images",
                ],
            },
            {
                title: "JavaScript Essentials",
                lessons: 4,
                time: "4 hours",
                content: [
                    "Understanding Variables and Data Types",
                    "Functions and Event Handling",
                    "Working with the DOM",
                    "Building Interactive Features",
                ],
            },
            {
                title: "Responsive Web Design",
                lessons: 4,
                time: "3 hours",
                content: [
                    "Introduction to Media Queries",
                    "Mobile-First Design",
                    "Responsive Navigation Menus",
                    "Testing for Different Devices",
                ],
            },
        ],
        enrolled: 12000,
        url: "https://example.com/web-development-bootcamp",
        certificate: "At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certificate that not only validates your expertise but also opens doors to new opportunities in your chosen field.",
        last_updated: "2025-01-01",
        language: "English",
        prerequisites: ["Basic computer knowledge"],
        original_price: "199.9",
        discounted_price: "100",
        category: "Web Development",
        reviews: [
            {
                reviewer_name: "John Doe",
                rating: 5,
                review_text: "This course was amazing! It gave me a solid foundation in web development, and I now feel confident building my own websites.",
                image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
                review_date: "2025-01-15",
            },
            {
                reviewer_name: "Jane Smith",
                rating: 4,
                review_text: "Great course overall, but I think the JavaScript section could be a bit more detailed. Still, a very valuable learning experience.",
                image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
                review_date: "2025-01-10",
            },
            {
                reviewer_name: "Mark Johnson",
                rating: 5,
                review_text: "The instructor, Angela, did an excellent job explaining the concepts. The hands-on projects were especially helpful in reinforcing what I learned.",
                image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
                review_date: "2025-01-05",
            },
        ]
    };
    return (
        <div className="w-screen my-10">
            <h1 className="text-3xl font-bold ml-10">Shopping Cart</h1>
            <p className="ml-10 pt-2">1 Course in cart</p>
            <div className="border-t-2 h-1 mx-10 mt-1"></div>
            <div className="flex justify-between mx-10">
                <div className="flex my-5 gap-5 shadow-xl rounded-xl p-2">
                    <div><img src={chart.course_image} alt="" className="w-52 h-52 p-1 border-2 rounded-md" /></div>
                    <div>
                        <h1 className="text-xl font-semibold">{chart.course_name}</h1>
                        <p className="py-2 text-slate-500">By {chart.course_owner}</p>
                        <p><span className="text-yellow-500">{chart.rating} </span><span className="text-slate-600">{`(${chart.ratings_by} rating)`} </span> <span className="text-slate-600">| {chart.duration} .{chart.lectures} Lectures.Level {chart.level}</span></p>
                        <button className="text-red-600 pt-2 text-lg font-medium">Remove</button>
                    </div>
                </div>
                <div className="w-80">
                    <h1 className="mb-2 text-xl font-semibold">Order Details</h1>
                    <div className="border-2 bg-[#E2E8F0] rounded-lg p-4">
                        <p className="pb-2">Price</p>
                        <p  className="pb-2">Price</p>
                        <p  className="pb-2">Price</p>
                        <p className="pb-2 pt-3 font-semibold">Total</p>
                       <div className="border-2 bg-slate-300 h-1 my-2"></div>
                        <button className="btn w-full">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;