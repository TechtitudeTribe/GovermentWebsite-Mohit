import { NavLink } from "react-router-dom";
import logo from "/up-gov-logo.svg";
import hamburgermenu from '/hamburger-menu.svg'
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
export default function Navbar({ active }) {
  const [isOpen, setIsOpen] = useState(false)
  const {user} = useContext(AuthContext)
  const routes = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "ABOUT US",
      path: "/about-us",
    },
    {
      title: "PRODUCT",
      path: "/product",
    },
    {
      title: "MEDIA",
      path: "/media",
    },
    {
      title: "CONTACT US",
      path: "/contact-us",
    },
  ];
  return (
    <section className="">
      <div className="min-[520px]:flex justify-between items-center   bg-white p-4 lg:px-16">
        <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="h-10 max-[520px]:m-auto" />
        <div className="text-blue-600 ">
          <h3 className="text-lg font-semibold">Panchayati Raj Department</h3>
          <p className="text-sm">Government of Uttar Pradesh</p>
        </div>
        </div>
        <div className="flex justify-center gap-6 text-center font-medium ">
          <div>
            <p>Gram Panchayat : Dhampura</p>
            <p></p>
          </div>
          <div>
            <p>Block : Bijnor</p>

          </div>
        </div>
      </div>
      <div className={`  flex  justify-between  bg-secondary p-0 lg:px-16 ${isOpen ?  "h-auto" : 'h-20 '} overflow-hidden`}>
        <div className={` ${isOpen ? ' min-[480px]:flex' : 'block min-[480px]:flex'} text-white  max-[800px]:text-xs`}>
          <img onClick={()=>setIsOpen(!isOpen)}  src={hamburgermenu} alt="hamburger-menu" className="h-20 p-4 min-[480px]:hidden"/>
          {routes.map((route) => (
            <NavLink
            key={route.title}
              to={route.path}
              className={`${isOpen && 'ml-2'}  flex items-center justify-center   p-2  min-[800px]:p-6 ${route.path == active && 'border-b-4 border-primary bg-white bg-opacity-30'}`}
            >
              <h4>{route.title}</h4>
            </NavLink>
          ))}
        </div>
{((!user) || (user && active !== '/dashboard') ) &&     <NavLink to={'/dashboard'}>
        <button className={`${isOpen ? 'h-20 ' : 'h-full  min-[480px]:h-full'}  p-1  min-[800px]:p-4 bg-primary  max-[800px]:text-xs`}>{!user ? "LOGIN TO DASHBOARD" : "GO TO DASHBOARD"}</button>
        </NavLink>}
      </div>
    </section>
  );
}
