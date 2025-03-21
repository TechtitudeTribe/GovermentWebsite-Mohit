import logo from "/up-gov-logo.svg";
import facebookIcon from "/facebook.svg";
import twitterIcon from "/twitter.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
/*eslint-disable react/prop-types*/
export default function Footer({ active }) {
  const { language } = useContext(LanguageContext);
  const routes = [
    {
      title: { english: "HOME", hindi: "मुख्य पृष्ठ" },
      path: "/",
    },
    {
      title: { english: "ABOUT US", hindi: "हमारे बारे में" },
      path: "/about-us",
    },
    {
      title: { english: "PRODUCT", hindi: "उत्पाद" },
      path: "/product",
    },
    {
      title: { english: "MEDIA", hindi: "संचार माध्यम पृष्ठ" },
      path: "/media",
    },
    {
      title: { english: "CONTACT US", hindi: "संपर्क करें" },
      path: "/contact-us",
    },
  ];
  const quickLLinks = [
    { english: "FAQ", hindi: "सामान्य प्रश्न" },
    { english: "Privacy Policy", hindi: "गोपनीयता नीति" },
    { english: "Terms & Conditions", hindi: "नियम व शर्तें" },
  ];
  return (
    <div className="">
      <section className="md:grid grid-cols-4 gap-8 xl:gap-20 p-6 min-[800px]:px-20">
        <div className="col-span-2">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" className="h-12 max-[520px]:m-auto" />
            <div className="text-blue-600 ">
              <h3 className="text-lg font-semibold">
                {language ==='hindi'?"पंचायती राज विभाग":"Panchayati Raj Department"}
              </h3>
              <p className="text-sm">{language==='hindi'?"उत्तर प्रदेश सरकार":"Government of Uttar Pradesh"}</p>
            </div>
          </div>
          <p className="font-medium my-4">
            {language === "hindi"
              ? `लोरेम इप्सम एक छद्म-लैटिन पाठ है जिसका उपयोग मुद्रण और टाइपसेटिंग उद्योगों में किया जाता है। 1500 के दशक के बाद से, जब एक अज्ञात प्रिंटर ने एक प्रकार की नमूना पुस्तक बनाने के लिए एक गैली टाइप किया, लोरेम इप्सम उद्योग का मानक डमी टेक्स्ट रहा है।`
              : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`}
          </p>
          <div className="flex gap-4 h-12 my-6">
            <img src={facebookIcon} alt="facebook-icon" />
            <img src={twitterIcon} alt="twitter-icon" />
          </div>
        </div>
        <div>
          <h2 className="gradient-border-left text-4xl w-fit pt-1">
            {language === "hindi" ? "मार्गदर्शन" : "Navigation"}
          </h2>

          {routes.map((route) => (
            <NavLink
              key={route.title.english}
              to={route.path}
              className={` flex items-center `}
            >
              <div className="flex items-center  h-fit w-fit my-2 gap-2 hover:text-primary">
                <p
                  className={`border-b-[3px]  rounded-full ${
                    route.path == active
                      ? "w-6 border-primary "
                      : " border-black w-2"
                  }`}
                ></p>{" "}
                <p
                  className={`${
                    route.path == active && "text-primary"
                  }  font-medium`}
                >
                  {route.title[language]}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
        <div>
          <h2 className="gradient-border-left text-4xl w-fit">
            {language === "hindi" ? "त्वरित सम्पक" : "Quick Links"}
          </h2>
          {quickLLinks.map((link) => (
            <NavLink key={link.english}>
              <div className="flex items-center gap-1">
                <p className=" w-2 border-b-[3px] border-black  rounded-full"></p>
                <p className="font-medium my-2">{link[language]}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      <section className="min-[480px]:flex justify-between  bg-black text-white p-6 min-[800px]:px-20">
        <div className="font-light text-sm">
          <p className="my-2">
            WE HELP THOSE.........WHO CAN&apos;T HELP THEMSELVES
          </p>
          <p className="my-2">
            Copyright © 2022 Panchayati Raj Department Government of Uttar
            Pradesh, India. All rights reserved
          </p>
          <p className="my-2">
            Lucknow, U.P. Contact No: 0522-2740482, E-mail: dir-ah.up@nic.in
          </p>
        </div>
        <div>
          <p className="text-xl">Visitor : 67989</p>
        </div>
      </section>
    </div>
  );
}
