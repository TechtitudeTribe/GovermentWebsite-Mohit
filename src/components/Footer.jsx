import logo from "/logo.png";
import facebookIcon from "/facebook.svg";
import twitterIcon from "/twitter.svg";
import { NavLink } from "react-router-dom";

export default function Footer({active}) {
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
    <div className="">
      <section className="grid grid-cols-4 gap-20 p-6 min-[800px]:px-20">
        <div className="col-span-2">
          <img src={logo} alt="logo" className="my-4 h-14"/>
          <p className="font-medium my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex gap-4 h-12 my-6">
            <img src={facebookIcon} alt="facebook-icon" />
            <img src={twitterIcon} alt="twitter-icon" />
          </div>
        </div>
        <div>
            <h2 className="gradient-border text-4xl w-fit">Navigation</h2>
            
            {routes.map((route) => (
            <NavLink
            key={route.title}
              to={route.path}
              className={` flex items-center `}
            >
              <div className="flex items-center  h-fit w-fit my-2 gap-2 hover:text-primary"><p className={`border-b-[3px]  rounded-full ${route.path == active ? 'w-6 border-primary ' : ' border-black w-2'}`}></p> <p className={`${route.path == active && "text-primary"}  font-medium`}>{route.title}</p></div>
            </NavLink>
          ))}
        </div>
        <div>
        <h2 className="gradient-border text-4xl w-fit">Quick Links</h2>
        <NavLink><div className="flex items-center gap-1"><p className=" w-2 border-b-[3px] border-black  rounded-full"></p><p className="font-medium my-2">FAQ</p></div></NavLink>  
        <NavLink><div className="flex items-center gap-1"><p className=" w-2 border-b-[3px] border-black  rounded-full"></p><p className="font-medium my-2">Privacy Policy</p></div></NavLink>  
        <NavLink><div className="flex items-center gap-1"><p className=" w-2 border-b-[3px] border-black  rounded-full"></p><p className="font-medium my-2">Terms & Conditions</p></div></NavLink>  
        </div>
      </section>
      <section className="flex justify-between  bg-black text-white p-6 min-[800px]:px-20">
          <div className="font-light text-sm">
            <p className="my-2">WE HELP THOSE.........WHO CAN'T HELP THEMSELVES</p>
            <p className="my-2">Copyright © 2022 Animal Husbandry Department Government of Uttar Pradesh, India. All rights reserved</p>
            <p className="my-2">Lucknow, U.P. Contact No: 0522-2740482, E-mail: dir-ah.up@nic.in</p>
          </div>
          <div>
            <p className="text-xl">Visitor : 67989</p>
          </div>
      </section>
    </div>
  );
}
