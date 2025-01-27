
const UpdateDelete = ({ course }) => {
    const handleUpdate=()=>{
        console.log(course);
    }
    const handleDelete=()=>{
        console.log(course._id);
        }
    return (

        <div className="card-actions justify-between">
            <button onClick={()=>handleUpdate()} className="btn btn-success text-white">Update</button>
            <button onClick={()=>handleDelete()} className="btn btn-error text-white">Delete</button>
        </div>
    );
};

export default UpdateDelete;