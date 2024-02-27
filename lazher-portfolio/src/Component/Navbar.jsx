import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";




const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  }

const navItem = [
  {link:"About" ,path:"About"},
  {link:"Experience" ,path:"Experience"},
  {link:"Projects" ,path:"Projects"},
  {link:"Contact" ,path:"Contact"}
]


  return (
    <>
        <nav className="container">
      <div className="flex justify-between items-center mt-4 ">
        <div><h1 className=" font-bold text-3xl cursor-pointer">Portfolio</h1></div>
        <div>
          <ul className="md:flex hidden text-2xl items-center space-x-6">
            {navItem.map(({link}) => <a key={link}>{link}</a> )}
          </ul>
        </div>
        <div className="md:hidden">
      <button onClick={toggleMenu} className=" text-white focus:outline-none  ">
        {
          isMenuOpen ? (<FaXmark className="w-6 h-6 text-white"/>) : (<FaBars className="w-6 h-6 text-white "/>)
        }
      </button>
    </div>
      </div>
    </nav>
    <div className={` cursor-pointer  w-32 space-y-4 px-4 pt-8 text-center pb-5 bg-[#18376d] rounded-lg text-xl ${isMenuOpen ? "block bg-[#18376d] fixed top-20 right-20  " : "hidden"}`}>
    {navItem.map(({link, }) => <a   key={link}  className="block hover:text-gray-300" onClick={toggleMenu}>{link}</a>)}
    </div>
    </>
  )
}

export default Navbar