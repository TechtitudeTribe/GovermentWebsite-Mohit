import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import leafsDesign from "../assets/icons/leafs-design.svg";
/*eslint-disable react/prop-types */
export default function Product({ product }) {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {" "}
      <div className="flex items-center gap-4 m-fit">
        <img src={leafsDesign} alt="leaf-design" className="h-10" />
        <h2 className="gradient-border-left text-4xl font-light bg-transparent pt-2">
          {product.title[language]}
        </h2>
      </div>
      <div className="flex flex-col-reverse mt-8 lg:mt-0  lg:grid grid-cols-2 gap-4 min-[800px]:gap-10">
        <div>
          <p className="my-4">{product.texts[0][language]}</p>
          <p className="my-4 font-medium">{product.texts[1][language]}</p>
          <p className="my-4">{product.texts[2][language]}</p>
          <p className="my-4">{product.texts[3][language]}</p>
        </div>

        <div className=" corner-border h-fit">
          <div className="top-left -top-3 -left-3"></div>
          <div className="bottom-right -bottom-2 -right-3"></div>
          <div className="  p-1 mb-1  text-center font-light text-lg  rounded-tr-[85px] rounded-bl-[85px] overflow-hidden">
            <img
              src={product.image}
              alt={"about-image-1"}
              className=" w-full h-full object-cover max-h-[400px]"
            />
          </div>
        </div>
      </div>
      <p className="col-span-2 mt-2">{product.texts[4][language]}</p>
    </div>
  );
}
