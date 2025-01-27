const Hero = () => {
   return (
       <div className="p-5">
           <div className="flex flex-col lg:flex-row justify-between items-center">
               <div className="w-full lg:w-1/2 ml-0 lg:ml-12">
                   <h1 className="text-2xl lg:text-3xl font-bold">Unlock Your Potential with Learnify</h1>
                   <p className="mt-3 text-sm lg:text-base">
                       Welcome to Learnify, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success.
                   </p>
                   <button className="mt-5 bg-[#8B5CF6] text-white px-6 py-2 rounded-md hover:bg-[#60A5FA] transition-colors duration-300">
                       Get Started
                   </button>
               </div>
               <div className="mt-5 lg:mt-0 p-2 w-full lg:w-1/2">
                   <img 
                       src="https://res.cloudinary.com/dxdopsw8a/image/upload/v1737054141/Screenshot_2025-01-17_005414_tqnqdg.png" 
                       alt="Learnify Hero Image" 
                       className="w-full h-auto rounded-md"
                   />
               </div>
           </div>
       </div>
   );
};

export default Hero;
