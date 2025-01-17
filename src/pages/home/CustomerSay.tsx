import Marquee from "react-fast-marquee";


const CustomerSay = () => {
    const customers = [
        {
            "name": "Alice Johnson",
            "location": "New York, USA",
            "testimonial": "The LMS platform has greatly improved my learning experience. The courses are interactive, and the content is easy to understand. Highly recommend!",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "John Smith",
            "location": "Los Angeles, USA",
            "testimonial": "The LMS system is intuitive and easy to navigate. The resources provided are extensive, and I feel confident in my learning progress.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Maria Gonzalez",
            "location": "Madrid, Spain",
            "testimonial": "I love the user-friendly interface and how organized everything is. It’s made my learning journey smooth and efficient.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Emma Brown",
            "location": "London, UK",
            "testimonial": "The LMS offers a wide variety of learning tools that make studying easier. It’s an excellent resource for anyone looking to expand their knowledge.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Liam Davis",
            "location": "Sydney, Australia",
            "testimonial": "The LMS system has been an invaluable tool in my studies. It’s structured and straightforward, helping me stay on track and motivated.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Sophia Lee",
            "location": "Seoul, South Korea",
            "testimonial": "With this LMS, I can study at my own pace and access all the materials I need for a thorough learning experience. I highly recommend it.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "James Wilson",
            "location": "Toronto, Canada",
            "testimonial": "The platform is designed well, and I love how it tracks my progress. It keeps me motivated and helps me stay on top of my learning goals.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Isabella Martinez",
            "location": "Barcelona, Spain",
            "testimonial": "The LMS system is extremely user-friendly. I appreciate the variety of multimedia content that makes learning engaging and fun.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Mason Clark",
            "location": "Vancouver, Canada",
            "testimonial": "I’ve had a great experience with this LMS platform. The learning materials are top-notch, and the interface makes it easy to stay on track.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Olivia Anderson",
            "location": "Paris, France",
            "testimonial": "I can easily access lessons, track my progress, and manage my learning goals all in one place. The LMS has made studying so much easier.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Ethan Walker",
            "location": "Berlin, Germany",
            "testimonial": "This LMS platform has streamlined my learning process. I appreciate the organized course structure and the ability to learn on my own schedule.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Ava Martinez",
            "location": "Mexico City, Mexico",
            "testimonial": "I’m really impressed with how the LMS keeps everything organized. The courses are easy to follow, and I can progress at my own pace.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Lucas White",
            "location": "Rome, Italy",
            "testimonial": "The platform is well-designed, and I can easily track my assignments and deadlines. It’s made my learning experience much more manageable.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Charlotte Harris",
            "location": "Amsterdam, Netherlands",
            "testimonial": "Using the LMS has been a game-changer. The interface is intuitive, and the learning resources are rich and helpful. Highly recommended!",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Mia Young",
            "location": "San Francisco, USA",
            "testimonial": "I enjoy learning through this platform. The interactive content keeps me engaged, and I can access everything I need in one place.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Amelia Brown",
            "location": "Chicago, USA",
            "testimonial": "The LMS has made a huge difference in my studies. I can easily access learning materials and track my progress. It’s a fantastic tool for learners.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Daniel Lopez",
            "location": "Buenos Aires, Argentina",
            "testimonial": "I’m really impressed by the platform’s efficiency. It helps me stay organized, and the quality of the learning materials is outstanding.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Grace Adams",
            "location": "Cape Town, South Africa",
            "testimonial": "This LMS platform has made learning so much easier. I love how it lets me learn at my own pace while keeping everything well-organized.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Jackson King",
            "location": "Miami, USA",
            "testimonial": "The platform has been an essential tool in my learning process. It’s easy to use and allows me to stay focused and organized throughout my courses.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        },
        {
            "name": "Harper Scott",
            "location": "Toronto, Canada",
            "testimonial": "I love how the LMS helps me keep track of my assignments, deadlines, and progress. It’s a fantastic platform for anyone serious about learning.",
            "image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737119960/download_3_zpnr6f.jpg"
        }
    ]

    return (
        <div className="bg-[#F8FAFC]">
            <h1 className="lg:text-3xl text-2xl ml-14 mb-10 font-bold">What Our Customer Say <br /> About Us</h1>
            <div className="  hidden sm:block">
                <Marquee gradient={false} speed={50} className="w-full">
                    <div className="flex mb-10 flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
                        {customers.map((item, index) => (
                            <div
                                key={index}
                                className=" px-4 sm:px-6 md:px-8 w-[150px] sm:w-[200px] shadow-xl rounded-lg md:w-[450px]"
                            >
                                <svg
                                    className="my-5"
                                    width="35.662109"
                                    height="27.354004"
                                    viewBox="0 0 35.6621 27.354"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs />
                                    <path
                                        id="Vector"
                                        d="M3.16 24.99C1.1 22.8 0 20.35 0 16.37C0 9.37 4.91 3.1 12.06 0L13.84 2.75C7.17 6.36 5.87 11.04 5.35 13.99C6.42 13.44 7.83 13.24 9.2 13.37C12.81 13.71 15.66 16.67 15.66 20.35C15.66 22.21 14.92 23.99 13.61 25.3C12.29 26.61 10.51 27.35 8.66 27.35C7.63 27.34 6.62 27.13 5.67 26.72C4.73 26.32 3.87 25.73 3.16 24.99ZM23.16 24.99C21.1 22.8 20 20.35 20 16.37C20 9.37 24.91 3.1 32.06 0L33.84 2.75C27.17 6.36 25.87 11.04 25.35 13.99C26.42 13.44 27.83 13.24 29.21 13.37C32.81 13.71 35.66 16.67 35.66 20.35C35.66 22.21 34.92 23.99 33.61 25.3C32.29 26.61 30.51 27.35 28.66 27.35C27.63 27.34 26.62 27.13 25.67 26.72C24.73 26.32 23.87 25.73 23.16 24.99Z"
                                        fill="#3B82F6"
                                        fillOpacity="1"
                                        fillRule="nonzero"
                                    />
                                </svg>

                                <p>''{item.testimonial}''</p>
                                <div className="flex mt-4 mb-8">
                                    <img className="w-10 rounded-full" src={item.image} alt="" />
                                    <div className="pl-2">
                                        <p className="text-lg font-semibold">{item.name}</p>
                                        <p className="text-sm">{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
            <div className="block sm:hidden">
                <div className="flex justify-center">
                <div className="mb-10 flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
                    {customers.map((item, index) => (
                        <div
                            key={index}
                            className=" border-2 shadow-xl m-2 rounded-xl p-1"
                        >
                            <svg
                                className="my-5"
                                width="35.662109"
                                height="27.354004"
                                viewBox="0 0 35.6621 27.354"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <desc>Created with Pixso.</desc>
                                <defs />
                                <path
                                    id="Vector"
                                    d="M3.16 24.99C1.1 22.8 0 20.35 0 16.37C0 9.37 4.91 3.1 12.06 0L13.84 2.75C7.17 6.36 5.87 11.04 5.35 13.99C6.42 13.44 7.83 13.24 9.2 13.37C12.81 13.71 15.66 16.67 15.66 20.35C15.66 22.21 14.92 23.99 13.61 25.3C12.29 26.61 10.51 27.35 8.66 27.35C7.63 27.34 6.62 27.13 5.67 26.72C4.73 26.32 3.87 25.73 3.16 24.99ZM23.16 24.99C21.1 22.8 20 20.35 20 16.37C20 9.37 24.91 3.1 32.06 0L33.84 2.75C27.17 6.36 25.87 11.04 25.35 13.99C26.42 13.44 27.83 13.24 29.21 13.37C32.81 13.71 35.66 16.67 35.66 20.35C35.66 22.21 34.92 23.99 33.61 25.3C32.29 26.61 30.51 27.35 28.66 27.35C27.63 27.34 26.62 27.13 25.67 26.72C24.73 26.32 23.87 25.73 23.16 24.99Z"
                                    fill="#3B82F6"
                                    fillOpacity="1"
                                    fillRule="nonzero"
                                />
                            </svg>

                            <p>''{item.testimonial}''</p>
                            <div className="flex mt-4 mb-8">
                                <img className="w-10 rounded-full" src={item.image} alt="" />
                                <div className="pl-2">
                                    <p className="text-lg font-semibold">{item.name}</p>
                                    <p className="text-sm">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerSay;
