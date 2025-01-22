import CustomerSay from "../home/CustomerSay";
import FeaturedCourses from "../courses/FeaturedCourses";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Description from "./Description";
import Instructor from "./Instructor";
import Syllabus from "./Syllabus";
import LearnerReviews from "./LearnerReviews";
import { TbWorld } from "react-icons/tb";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useAxiosPublic from "../../hook/useAxiosPublic";

const Details = () => {
    const {id}=useParams()
    const axiosPublic = useAxiosPublic()
    const [details, setDetails] = useState(null);
    console.log(details);
    

    const [active, setActive] = useState(0)
    const handelClick = (index: number) => {
        setActive(index)
    }
   
    useEffect(() => {
        axiosPublic.get('/api/allcourses')
            .then(res => {
                const course = res.data.find(course => course._id === id);
                setDetails(course);
            });
    }, [axiosPublic, id]);

    if (!details) {
        // Render a loading state or placeholder while `details` is undefined
        return <div>Loading...</div>;
    }


    const original = parseFloat(details.original_price);
    const discounted = parseFloat(details.discounted_price);
    const discountPercentage = Math.round(((original - discounted) / original) * 100);

    
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
                                src={details.instructor?.profile_image}
                                alt={details.instructor?.name}
                                className="w-24 h-24 rounded-full object-cover"
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
                                    src={details.course_image}
                                    alt="Shoes"
                                    className="rounded-xl border-2 w-80" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <div className="flex items-center gap-2">
                                    {/* Current Price */}
                                    <span className="text-2xl font-bold text-gray-900">$49.5</span>

                                    {/* Original Price */}
                                    <span className="text-xl text-gray-400 line-through">{details.original_price}</span>

                                    {/* Discount Percentage */}
                                    <span className="text-xl font-medium text-green-600">{discountPercentage}% off</span>
                                </div>
                                <div className="grid grid-cols-1 w-full gap-2">
                                    <Link className="bg-[#8B5CF6] text-white px-6 py-2 rounded-md hover:bg-[#60A5FA] transition-colors duration-300 btn"  to="/chart">Add To Chart</Link>
                                    <Link className="border-2 border-black btn" to={'checkout'}>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Tabs>
                        <TabList className="flex justify-center gap-5 my-5">
                            <Tab className='border-none'><button onClick={() => handelClick(0)} className={`btn border-2 bg-none ${active === 0 ? 'bg-[#EFF6FF]' : ''}`}>Description</button></Tab>
                            <Tab className='border-none'><button onClick={() => handelClick(1)} className={`btn border-2 bg-none ${active === 1 ? 'bg-[#EFF6FF]' : ''}`}>Instructor</button></Tab>
                            <Tab className='border-none'><button onClick={() => handelClick(2)} className={`btn border-2 bg-none ${active === 2 ? 'bg-[#EFF6FF]' : ''}`}>Syllabus</button></Tab>
                            <Tab className='border-none'><button onClick={() => handelClick(3)} className={`btn border-2 bg-none ${active === 3 ? 'bg-[#EFF6FF]' : ''}`}>Reviews</button></Tab>
                        </TabList>
                        <hr />
                        <TabPanel>
                            <Description course_description={details.course_description} certificate={details.certificate}></Description>
                        </TabPanel>
                        <TabPanel>
                            <Instructor instructor={details.instructor}></Instructor>
                        </TabPanel>
                        <TabPanel>
                            <Syllabus syllabus={details.syllabus}></Syllabus>
                        </TabPanel>
                        <TabPanel>
                            <LearnerReviews reviews={details.reviews}></LearnerReviews>
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