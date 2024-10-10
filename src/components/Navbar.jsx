import { NavLink } from "react-router-dom";
import logo from "/logo.png";
import hamburgermenu from '/hamburger-menu.svg'
import { useState } from "react";
export default function Navbar({ active }) {
  const [isOpen, setIsOpen] = useState(false)
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
        <img src={logo} alt="logo" className="h-10 max-[520px]:m-auto" />
        <div className="flex justify-center gap-6 text-center font-medium ">
          <div>
            <p>Tele - Phone</p>
            <p>052227 41191</p>
          </div>
          <div>
            <p>Tollfree</p>
            <p>1800 453 672</p>
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
        <NavLink to={'/login'}>

        <button className={`${isOpen ? 'h-20 ' : 'h-full  min-[480px]:h-full'}  p-1  min-[800px]:p-4 bg-primary  max-[800px]:text-xs`}>LOGIN TO DASHBOARD</button>
        </NavLink>
      </div>
    </section>
  );
}
