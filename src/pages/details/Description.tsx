interface DescriptionProps {
    certificate: string;
    course_description: string;
  }

  const Description: React.FC<DescriptionProps> = ({ certificate, course_description }) => {
    
    return (
        <div className="w-2/3 mx-14">
            <h1 className="font-bold text-3xl my-5">Course Description</h1>
            <p className="text-slate-600">{course_description}</p>
            <h1 className="font-bold text-3xl my-5">Certification</h1>
            <p className="pb-5">{certificate}</p>
        </div>
    );
};

export default Description;