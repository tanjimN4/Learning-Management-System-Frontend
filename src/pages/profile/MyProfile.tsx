import { CiImageOn } from "react-icons/ci";

const MyProfile = () => {
    return (
        <div>
            <div className="border-2 rounded-lg p-4 w-[800px]">
                <div className="flex flex-col md:flex-row md:gap-4">
                    <div className="flex-1 mb-4 md:mb-0">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="headline" className="block text-sm font-medium text-gray-700 mb-2">
                        Headline
                    </label>
                    <input
                        type="text"
                        id="headline"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your headline"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" name="" id=""></textarea>
                </div>
            </div>
            <div className="border-2 mt-8 rounded-lg p-4 w-[800px]">
               <div className="flex justify-between mx-10">
               <div>
                    <h1>Add/Change Image</h1>
                    <div className=" mt-4">
                        <input
                            type="file"
                            id="upload-photo"
                            className="hidden"
                        />
                        <label
                            htmlFor="upload-photo"
                            className="w-full bg-blue-500 text-white text-center py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
                        >
                            Upload Photo
                        </label>
                    </div>
                </div>
                <div>
                    <h1>Image Preview</h1>
                    <CiImageOn className="w-60 h-60" />
                </div>
               </div>


            </div>
        </div>

    );
};

export default MyProfile;