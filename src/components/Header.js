import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
    const [open, setOpen] = useState();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const Links = [
        { name: "Home", link: '/home' },
        { name: "Blog", link: '/' },
        { name: "FAQ", link: '/' }
    ]
    return (
        <div className='shadow-md w-full  top-0 left-0 '>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <i className="ri-medal-line"></i>

                    </span>
                    Tech Academy
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <i className={open ? "ri-close-line" : "ri-menu-line"}></i>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <div>
                   
                    {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <button className='mr-4 ml-3' onClick={handleLogOut}>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                    }
                   
                    </div>
                    <Link to="/profile">
                        {user?.photoURL ?
                        <img className='w-10 rounded-full'   src={user?.photoURL} alt="" />
                           
                            
                            :<p>user</p>
                            // : <FaUser></FaUser>
                        }
                    </Link>
                </ul>
               
            </div>
            
        </div>
    );
};

export default Header;