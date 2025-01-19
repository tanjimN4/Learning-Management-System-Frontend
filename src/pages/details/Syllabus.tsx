import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Define the type for the syllabus prop
interface SyllabusItem {
    title: string;
    content: string[];
    lessons: number;
    time:string;
}

interface SyllabusProps {
    syllabus: SyllabusItem[];
}

const Syllabus = ({ syllabus }: SyllabusProps) => {
    const [expanded, setExpanded] = useState<number | null>(null); // Keep track of the currently expanded item

    const toggleExpanded = (index: number) => {
        setExpanded(expanded === index ? null : index); // Toggle the expanded state for each syllabus item
    };

    return (
        <div className="w-2/3 mx-14 mb-10">
            <h1 className="font-bold text-3xl my-5">Syllabus</h1>
            <div className="border-2 rounded-lg w-[600px]">
                {syllabus.map((item, index) => (
                   <div key={index} className="flex justify-start">
                     <div className="">
                        <button
                            onClick={() => toggleExpanded(index)}
                            className="flex items-center justify-between border-2 p-2 w-[600px]"
                        >
                           {expanded===index ? <IoIosArrowUp /> : <IoIosArrowDown />} Introduction to {item.title} <p>{item.lessons} lessons {item.time}</p>
                        </button>
                        {expanded === index && (
                            <div className="mt-2 pl-10">
                                <ul className="list-disc">
                                    {item.content.map((topic, i) => (
                                        <li key={i}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                   </div>
                ))}
            </div>
        </div>
    );
};

export default Syllabus;
