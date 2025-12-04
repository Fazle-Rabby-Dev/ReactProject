import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Nav(params) {
    const [showMenu, setShowMenu] = useState (false)
    const [isSticky , setIsSticky]= useState (false)
    useEffect (
        ()=>{
            const scrollhandle = ()=>{
                setIsSticky(window.scrollY>50)
            }
            window.addEventListener('scroll' ,scrollhandle)
            return () => window.addEventListener('scroll' ,scrollhandle)
        }
    )
    return (
        <>
          <nav className={`pt-5 fixed top-0 left-0 z-1 w-full duration-500 transition-all ${isSticky ? 'bg-cyan-300 py-5' : 'bg-transparent md:pt-[57px]'}`}>
            <div className="container px-4 lg:px-0">
                <div className="nav-main flex justify-between items-center">
                    <div className="md:w-1/5">
                       <a href=''>
                        <img src={logo}></img>
                       </a>
                    </div>
                     <div className="icon sm:block md:hidden text-white ">
                        <FaBars className='cursor-pointer fixed right-4 text-[30px]' onClick={()=> setShowMenu(true)}/>
                     </div>
                    <div className="mobile-menu sm:block md:hidden">
                        <ul className={`fixed top-0 right-0 flex flex-col gap-3  h-full bg-purple-400 justify-center items-center duration-500 transition-all ease-in-out ${showMenu ? 'w-[200px] opacity-100' : 'w-0 opacity-0'} `}>
                            <div className="text-white top-5 left-2 absolute">
                             <ImCross className='cursor-pointer' onClick={()=> setShowMenu(false)} />
                             </div>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>About</a></li>
                            <li><a href=''>Service</a></li>
                            <li><a href=''>Careers</a></li>
                            <li><a href=''>Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-3/5 hidden md:block">
                        <ul className='flex justify-center gap-[60px]'>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>About</a></li>
                            <li><a href=''>Service</a></li>
                            <li><a href=''>Careers</a></li>
                            <li><a href=''>Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-1/5 btn text-end hidden md:block">
                        <a href='' className='text-[20px] leading-[26px] font-semibold font-inter text-[#FFFFFF] bg-[#6A4DF4] rounded-[10px] px-[42px] py-[15px] '>Contact</a>
                    </div>
                </div>
            </div>
         </nav> 
        </>
    )
}
export default Nav