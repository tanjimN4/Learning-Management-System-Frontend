import { useLocation } from "react-router";


const Footer = () => {
    const location = useLocation();

    // Check if the pathname is `/login` or `/signup`
    if (location.pathname === "/login" || location.pathname === "/signup") {
        return null; // Do not render the footer
    }
    
    return (
        <div>
            <footer className="footer bg-[#F3F4F6] text-base-content p-10">
                <aside>
                <a className=" text-2xl text-[#8B5CF6] hover:text-[#60A5FA]">Learnify</a>
                <p className="w-80 text-slate-700">Empowering learners through accessible and engaging online education.
                Learnify is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Get Help</h6>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Latest Articles</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Programs</h6>
                    <a className="link link-hover">Art & Design</a>
                    <a className="link link-hover">Business</a>
                    <a className="link link-hover">IT & Software</a>
                    <a className="link link-hover">Languages</a>
                    <a className="link link-hover">Programming</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover">Address: 123 Main Street,Anytown,CA 12345</a>
                    <a className="link link-hover">Tel: +(123) 456-7890</a>
                    <a className="link link-hover">Mail: tanjimahemed7@gmail.com</a>
                    <div className="flex">
                        <button>f</button>
                        <button>g</button>
                        <button>g</button>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;