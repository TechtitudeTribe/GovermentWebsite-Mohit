import { NavLink } from "react-router-dom";
import logo from "/logo.png";

export default function Navbar({ active }) {
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
      <div className="flex justify-between items-center  bg-white p-4 lg:px-16">
        <img src={logo} alt="logo" className="h-10" />
        <div className="flex justify-center gap-6 text-center font-medium">
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
      <div className="flex justify-between bg-secondary p-0 lg:px-16">
        <div className="flex text-white">
          {routes.map((route) => (
            <NavLink
            key={route.title}
              to={route.path}
              className={` flex items-center p-6 ${route.path == active && 'border-b-4 border-primary bg-white bg-opacity-30'}`}
            >
              <h4>{route.title}</h4>
            </NavLink>
          ))}
        </div>
        <NavLink to={'/login'}>

        <button className="p-4 bg-primary h-full">LOGIN TO DASHBOARD</button>
        </NavLink>
      </div>
    </section>
  );
}
