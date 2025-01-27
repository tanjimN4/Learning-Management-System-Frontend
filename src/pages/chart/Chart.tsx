import { useEffect, useState } from "react";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Chart = () => {
    const [chart, setChart] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('api/chart')
            .then(response => {
                setChart(response.data)
            })

    }, [])
    const totalPrice = chart.reduce((sum, item) => sum + parseFloat(item.price), 0)
    let discount=0
    if(chart.length===2){
        discount=5
    }else if(discount >= 5){
        discount=10
    }
    const discountPrice =totalPrice-(totalPrice*(discount / 100))
    const discountgive =totalPrice-discountPrice
    const tax = totalPrice >= 100 ? totalPrice * 0.1 : 0;
    const total =totalPrice-(tax+discountgive)
    const handleRemove=(id)=>{
        axiosPublic.delete(`api/delete/chart/${id}`)
        .then(() => {
            console.log('delete');
            setChart(prevChart => prevChart.filter(item => item._id !== id));
        })
        
    }
    return (
        <div>
        {
            chart.length === 0 ?
                <div className="text-center">
                    <DotLottieReact
                        src="https://lottie.host/29062678-9b49-4650-8424-960c0a5fd848/yiSRG0AtpQ.lottie"
                        loop
                        autoplay
                        className="h-96 mx-auto"
                    />
                    <p className="text-2xl font-semibold py-5 text-slate-500">Chart is empty</p>
                </div>
                :
                <div className="w-full my-10 px-4">
                    <h1 className="text-3xl font-bold ml-10">Shopping Cart</h1>
                    <p className="ml-10 pt-2 text-slate-500">{chart.length} Course in cart</p>
                    <div className="border-t-2 h-1 mx-10 mt-1"></div>
    
                    <div className="flex flex-col lg:flex-row justify-between mx-0 lg:mx-10 mt-5">
                        <div className="pr-0 lg:pr-10 w-full lg:w-2/3 p-1 flex-col gap-5">
                            {chart.map((course, index) => (
                                <div key={index} className="flex gap-5 shadow-xl rounded-xl p-2">
                                    <div className="flex-1">
                                        <div className="flex">
                                            <div className="p-1">
                                                <img className="w-64 rounded-lg h-44" src={course.course_image} alt="" />
                                            </div>
                                            <div className="pl-2">
                                                <h1 className="text-xl font-semibold">{course.course_name}</h1>
                                                <p className="py-2 text-slate-500">By {course.course_owner}</p>
                                                <p className="text-slate-600">{course.duration} | {course.lectures} Lectures | Level {course.level}</p>
                                                <p className="pt-2">
                                                    <span className="text-yellow-500">{course.rating} </span>
                                                    <span className="text-slate-600">({course.ratings_by} ratings)</span>
                                                </p>
                                                <button onClick={()=>handleRemove(course._id)} className="text-red-500 font-medium p-2 text-xl">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
    
                        <div className="w-full lg:w-80 mt-5 lg:mt-0">
                            <h1 className="mb-2 text-xl font-semibold">Order Details</h1>
                            <div className="border-2 bg-[#E2E8F0] rounded-lg p-4">
                                <div className="flex justify-between">
                                    <p className="pb-2">Price</p>
                                    <p className="pb-2">${totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="pb-2">Discount</p>
                                    <p className="pb-2">${discountgive.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="pb-2">Tax</p>
                                    <p className="pb-2">${tax.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="pb-2 pt-3 font-semibold">Total</p>
                                    <p className="pb-2">${total.toFixed(2)}</p>
                                </div>
    
                                <div className="border-b-2 bg-slate-400 h-1 my-2"></div>
                                <button className="btn w-full">Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
        }
    </div>
    
    );
};

export default Chart;