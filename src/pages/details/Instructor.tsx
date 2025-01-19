import { CiPlay1 } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { TbAdjustmentsStar } from "react-icons/tb";

interface InstructorProps {
    instructor: {
        name: string;
        profession: string;
        profile_image: string;
        reviews: string;
        students: string;
        courses: string;
        bio: string;
    };
}

const Instructor: React.FC<InstructorProps> = ({ instructor }) => {

    return (
        <div className="w-2/4 mx-14 mb-10">
            <h1 className="font-bold text-3xl my-5">Instructor</h1>
            <div>
                <h1 className="text-primary text-2xl font-medium">{instructor.name}</h1>
                <p className="text-slate-600">{instructor.profession}</p>
                <div className="flex items-center gap-5 py-5">
                    <img src={instructor.profile_image} alt="" className="rounded-xl w-40" />
                    <div>
                        <p className="text-slate-600 flex items-center gap-2"><TbAdjustmentsStar />{instructor.reviews}</p>
                        <p className="text-slate-600 flex items-center gap-2"><FaGraduationCap />{instructor.students}</p>
                        <p className="text-slate-600 flex items-center gap-2"><CiPlay1 />{instructor.courses}</p>
                    </div>
                </div>
                <p className="text-slate-600">{instructor.bio}</p>
            </div>
        </div>
    );
};

export default Instructor;