

const TopCategories = () => {
   const category= [
        {
          "category_name": "Web Development",
          "category_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737058064/Icon_3_p6tfuh.png",
          "total_courses": 25
        },
        {
          "category_name": "Data Science",
          "category_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737058064/Icon_1_qxr9gg.png",
          "total_courses": 15
        },
        {
          "category_name": "Graphic Design",
          "category_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737058065/Icon_qkno78.png",
          "total_courses": 10
        },
        {
          "category_name": "Business Management",
          "category_image": "https://res.cloudinary.com/dxdopsw8a/image/upload/v1737058064/Icon_2_nemoyg.png",
          "total_courses": 18
        }
      ]
      
    return (
        <div className="mb-10">
        <div className="flex justify-between text-center items-center mx-7 my-10"><h1 className="text-4xl font-bold">Top Categories</h1><p className="text-center items-center text-[#3B82F6]">See All</p></div>
        <div className="mt-10 mx-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.map((cat, index) => (
                <div key={index} className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
                    <div className="flex justify-center">
                    <img src={cat.category_image} alt={cat.category_name} className=" object-cover" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-center">{cat.category_name}</h2>
                        <p className="text-center text-gray-600">{cat.total_courses} Courses</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    );
};

export default TopCategories;