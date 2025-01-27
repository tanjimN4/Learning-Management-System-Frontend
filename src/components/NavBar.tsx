import { Link } from 'react-router';
import useAuth from '../hook/useAuth';

const NavBar = () => {
  const { user } = useAuth()
  console.log(user);

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
          {user ?
            <div className="dropdown  dropdown-end">
              <div tabIndex={0} role="button" className="">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><Link to={'/chart'}>My Chart</Link></li>
                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>

            :
            <Link to={'/login'}>
              <button className="bg-[#8B5CF6] text-white px-6 py-2 rounded-md hover:bg-[#60A5FA] transition-colors duration-300">
                Login
              </button>
            </Link>

          }


        </div>
      </div>
    </div>
  );
};

export default NavBar;
