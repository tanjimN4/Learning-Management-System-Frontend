import Courses from "./Courses";
import Hero from "./Hero";
import TopCategories from "./TopCategories";
import TopCourses from "./TopCourses";
import TopInstructors from "./TopInstructors";



const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Courses></Courses>
            <TopCategories></TopCategories>
            <TopCourses></TopCourses>
            <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;