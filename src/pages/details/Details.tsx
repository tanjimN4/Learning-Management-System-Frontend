import CustomerSay from "../home/CustomerSay";
import FeaturedCourses from "../courses/FeaturedCourses";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Description from "./Description";
import Instructor from "./Instructor";
import Syllabus from "./Syllabus";
import LearnerReviews from "./LearnerReviews";
import { TbWorld } from "react-icons/tb";
import { useState } from "react";

const Details = () => {
    const details = {
        course_name: "Web Development Bootcamp",
        course_image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
        course_owner: "Angela Yu",
        instructor: {
            name: "Angela Yu",
            bio: "Angela Yu is an experienced full-stack developer and educator, known for her engaging teaching style and ability to break down complex topics into easy-to-understand lessons.",
            profile_image: "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737059202/images_crp4eb.jpg",
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
                week: 1,
                title: "Introduction to HTML",
                content: [
                    "What is HTML?",
                    "HTML Elements and Attributes",
                    "Creating Your First Web Page",
                    "Best Practices in HTML"
                ]
            },
            {
                week: 2,
                title: "CSS Fundamentals",
                content: [
                    "Introduction to CSS",
                    "Selectors and Properties",
                    "Box Model and Layouts",
                    "Styling Text and Images"
                ]
            },
            {
                week: 3,
                title: "JavaScript Essentials",
                content: [
                    "Understanding Variables and Data Types",
                    "Functions and Event Handling",
                    "Working with the DOM",
                    "Building Interactive Features"
                ]
            },
            {
                week: 4,
                title: "Responsive Web Design",
                content: [
                    "Introduction to Media Queries",
                    "Mobile-First Design",
                    "Responsive Navigation Menus",
                    "Testing for Different Devices"
                ]
            }
        ],
        enrolled: 12000,
        url: "https://example.com/web-development-bootcamp",
        certificate: "At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certificate that not only validates your expertise but also opens doors to new opportunities in your chosen field.",
        last_updated: "2025-01-01",
        language: "English",
        prerequisites: ["Basic computer knowledge"],
        original_price: "199.9",
        discounted_price: "99.9",
        category: "Web Development",
    };
    const [active,setActive]=useState(0)
    const handelClick=(index :number)=>{
        setActive(index)
    }
    return (
        <div className="container mx-auto ">
            <div>
                <div className="flex bg-[#F8FAFC] gap-40 p-5 ">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold my-5">{details.course_name}</h1>
                        <p className="py-2 text-slate-700">{details.description}</p>
                        <p><span className="text-yellow-500">{details.rating} </span><span className="text-slate-600">{`(${details.ratings_by} rating)`} </span> <span className="text-slate-600">| {details.duration} .{details.lectures} Lectures.Level {details.level}</span></p>
                        <div className="mt-5 flex items-center gap-4">
                            {/* Instructor Profile Section */}
                            <img
                                src={details.instructor.profile_image}
                                alt={details.instructor.name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-slate-600">Created by <span className="text-[#2563EB]">{details.instructor.name}</span></h3>
                            </div>
                        </div>
                        <div className="flex py-5 gap-2 items-center">
                            <TbWorld />
                            <p className="text-slate-600">{details.language}</p>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Tabs>
                        <TabList className="flex justify-center gap-5 my-5">
                            <Tab className='border-none'><button  onClick={()=>handelClick(0)}   className={`btn border-2 bg-none ${active === 0 ? 'bg-[#EFF6FF]' : ''}`}>Description</button></Tab>
                            <Tab  className='border-none'><button onClick={()=>handelClick(1)}   className={`btn border-2 bg-none ${active === 1 ? 'bg-[#EFF6FF]' : ''}`}>Instructor</button></Tab>
                            <Tab  className='border-none'><button onClick={()=>handelClick(2)}   className={`btn border-2 bg-none ${active === 2 ? 'bg-[#EFF6FF]' : ''}`}>Syllabus</button></Tab>
                            <Tab  className='border-none'><button onClick={()=>handelClick(3)}   className={`btn border-2 bg-none ${active === 3 ? 'bg-[#EFF6FF]' : ''}`}>Reviews</button></Tab>
                        </TabList>
                        <TabPanel>
                            <Description course_description={details.course_description} certificate={details.certificate}></Description>
                        </TabPanel>
                        <TabPanel>
                            <Instructor></Instructor>
                        </TabPanel>
                        <TabPanel>
                            <Syllabus></Syllabus>
                        </TabPanel>
                        <TabPanel>
                            <LearnerReviews></LearnerReviews>
                        </TabPanel>
                    </Tabs>
                </div>
                <CustomerSay></CustomerSay>
                <div className="mx-6">
                    <FeaturedCourses></FeaturedCourses>
                </div>
            </div>
        </div>
    );
};

export default Details;