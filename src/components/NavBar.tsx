import { Link } from 'react-router';

const NavBar = () => {
  const links = (
    <>
      <li className='text-slate-700 hover:text-black transition-colors duration-300'>
        <Link to={'/'}>Home</Link>
      </li>
      <li className='text-slate-700 hover:text-black transition-colors duration-300'>
        <Link to={'/about'}>About</Link>
      </li>
      <li className='text-slate-700 hover:text-black transition-colors duration-300'>
        <Link to={'/courses'}>Courses</Link>
      </li>
      <li className='text-slate-700 hover:text-black transition-colors duration-300'>
        <Link to={'/blog'}>Blog</Link>
      </li>
      <li className='text-slate-700 hover:text-black transition-colors duration-300'>
        <Link to={'/contact'}>Contact</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#F3F4F6]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-[#8B5CF6]">Learnify</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/login'}>
            <button className="bg-[#8B5CF6] text-white px-6 py-2 rounded-md hover:bg-[#60A5FA] transition-colors duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
