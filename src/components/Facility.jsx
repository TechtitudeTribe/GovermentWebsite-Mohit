import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import leafsDesign from "/leafs-design.svg";
/*eslint-disable react/prop-types*/
export default function Facility({ facility }) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="facilities">
      <div className="flex items-center gap-4 m-2">
        <img src={leafsDesign} alt="leaf-design" className="h-8" />
        <h2 className="gradient-border-left text-4xl font-light bg-transparent pt-1">
          {facility.title[language]}
        </h2>
      </div>
      <div className="flex flex-col-reverse mt-8 lg:mt-0  lg:grid grid-cols-2 gap-4 min-[800px]:gap-10">
        <div className="flex flex-col gap-2">
          {facility.texts.map((para, index) => (
            <p key={index}>{para[language]}</p>
          ))}
        </div>
        <div>
          <img src={facility.image} alt={facility.title[language]} className="h-full max-h-[50vh] w-full object-cover rounded-xl"/>
        </div>
      </div>
    </div>
  );
}
