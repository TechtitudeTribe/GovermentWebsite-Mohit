import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import homeBanner1 from "../assets/Images/home/home-banner-1.png";
import whiteCorner from "../assets/Images/home/white-corner.svg";
import leafsDesign from "../assets/icons/leafs-design.svg";
import avatar from "../assets/Images/home/dummy-avatar.svg";
import homeIcon from "../assets/Images/home/home-icon.svg";
import startingQuotes from "../assets/icons/starting-quotes.svg";
import { Fragment, useContext, useEffect, useState } from "react";
import AwardsCard from "../components/AwardsCard";
import "../utils/Home.css";
import AnimatedButton from "../components/AnimatedButton";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  aboutTexts,
  aboutCards,
  awardtexts,
  awardCard1,
  awardCard2,
  awardCard3,
  awardCard4,
  awardCard5,
  awardCard6,
  awardCard7,
  awardCard8,
  awardCard9,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
} from "../assets/data/home_data";
export default function Home() {
  const slides = [homeBanner1, homeBanner1, homeBanner1];
  const slideProperties = {
    duration: 1500,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: () => <div className="slide-indicator "></div>,
  };
  const testimonials = [
    {
      image: avatar,
      heading: {
        english: "Testimonial Heading 1",
        hindi: "प्रशंसापत्र शीर्षक 1",
      },
      description: {
        english:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        hindi:
          "लोरेम इप्सम केवल यादृच्छिक पाठ नहीं है, लोकप्रिय धारणा के विपरीत है। शास्त्रीय लैटिन साहित्य में इसकी उत्पत्ति का पता 45 ईसा पूर्व में लगाया जा सकता है, जिससे यह 2000 वर्ष से अधिक पुराना हो गया है। वर्जीनिया में हैम्पडेन-सिडनी कॉलेज के एक लैटिन प्रोफेसर",
      },
      name: { english: "Person Name 1", hindi: "व्यक्ति का नाम 1" },
      designation: { english: "Designation", hindi: "पद का नाम" },
      department: { english: "Department", hindi: "विभाग" },
      city: { english: "City name", hindi: "शहर का नाम" },
    },
    {
      image: avatar,
      heading: {
        english: "Testimonial Heading 2",
        hindi: "प्रशंसापत्र शीर्षक 2",
      },
      description: {
        english:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        hindi:
          "लोरेम इप्सम केवल यादृच्छिक पाठ नहीं है, लोकप्रिय धारणा के विपरीत है। शास्त्रीय लैटिन साहित्य में इसकी उत्पत्ति का पता 45 ईसा पूर्व में लगाया जा सकता है, जिससे यह 2000 वर्ष से अधिक पुराना हो गया है। वर्जीनिया में हैम्पडेन-सिडनी कॉलेज के एक लैटिन प्रोफेसर",
      },
      name: { english: "Person Name 2", hindi: "व्यक्ति का नाम 2" },
      designation: { english: "Designation", hindi: "पद का नाम" },
      department: { english: "Department", hindi: "विभाग" },
      city: { english: "City name", hindi: "शहर का नाम" },
    },
  ];
  const { language } = useContext(LanguageContext);
  const [awardCards, setAwardCards] = useState([
    awardCard1,
    awardCard2,
    awardCard3,
    awardCard4,
    awardCard5,
    awardCard6,
    awardCard7,
    awardCard8,
    awardCard9,
  ]);
  useEffect(() => {
    const updateAwardCards = () => {
      const isSmallScree = window.innerWidth < 1024;
      const updatedSlides = isSmallScree
        ? [
            awardCard1,
            awardCard2,
            awardCard3,
            awardCard4,
            awardCard5,
            awardCard6,
            awardCard7,
            awardCard8,
            awardCard9,
          ]
        : [
            [awardCard1, awardCard2, awardCard3],
            [awardCard4, awardCard5, awardCard6],
            [awardCard7, awardCard8, awardCard9],
          ];
      setAwardCards(updatedSlides);
    };
    updateAwardCards();
    window.addEventListener("resize", updateAwardCards);
    return () => window.removeEventListener("resize", updateAwardCards);
  }, []);

  // const [isLeftToRight, setIsLeftToRight] = useState(false);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setIsLeftToRight((prev) => !prev);
  //     }, 30000);

  //     return () => clearInterval(interval);
  //   }, []);

  const [
    { benefit1Expanded, benefit2Expanded, benefit3Expanded, benefit4Expanded },
    setBenefitsExpansion,
  ] = useState({
    benefit1Expanded: false,
    benefit2Expanded: false,
    benefit3Expanded: false,
    benefit4Expanded: false,
  });
  return (
    <div>
      <section className="relative">
        <div id="home-slideshow-1" className="relative">
          <Slide {...slideProperties}>
            {slides.map((slide, index) => (
              <div key={index} className="each-slide">
                <img src={slide} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slide>
        </div>
        <div className="flex bg-secondary items-center text-sm min-[480px]:text-base">
          <div className="flex relative items-center bg-primary  font-medium  h-14">
            <p className="ml-4  min-[480px]:ml-24 mr-5 w-fit whitespace-nowrap">
              {language === "hindi" ? "ताजा खबर" : "LATEST NEWS"}
            </p>
            <img
              src={whiteCorner}
              alt="white-corner"
              className=" absolute -right-4 z-10 h-full"
            />
          </div>
          <NavLink to="/download-pariwar-nakal">
            <button className="ml-6 bg-primary text-white p-2 rounded-xl">
              {language === "hindi"
                ? "परिवार नकल डाउनलोड करें"
                : "Download Pariwar Nakal"}
            </button>
          </NavLink>

          {/* <div className="overflow-hidden relative w-full ">
            <div
              className={`flex whitespace-nowrap ${
                isLeftToRight ? "animate-slide-reverse" : "animate-slide"
              }`}
            >
              <p className="text-white ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo, Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit
              </p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="min-[800px]:grid grid-cols-2 gap-8  p-6 min-[800px]:px-20 bg-mid_gray">
        <div className="my-14">
          <div className="flex items-end gap-6 h-16">
            <img src={leafsDesign} alt="leafs-design" className="h-full" />
            <h2 className="text-5xl font-light gradient-border-left bg-transparent pt-2">
              {language === "hindi" ? "हमारे बारे में" : "About Us"}
            </h2>
          </div>
          <div className={`font-light ${language !== "hindi" && "text-lg"}`}>
            <p className="py-3">{aboutTexts[0][language]}</p>
            <p className="py-4 font-bold">{aboutTexts[1][language]}</p>
            <p className="py-3">{aboutTexts[2][language]}</p>
            <p className="py-2">{aboutTexts[3][language]}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 max-[1280px]:grid-cols-1">
          {aboutCards.map((card, index) => (
            <div key={index}>
              <div key={index} className=" corner-border ">
                <div className="top-left"></div>
                <div className="bottom-right"></div>
                <div
                  className={`" aboutus-card text-center font-light ${
                    language !== "hindi" && "text-lg"
                  }     p-8 py-8 bg-white rounded-tr-[75px] rounded-bl-[75px] "`}
                >
                  <div className="hover:scale-110 transition ease-in duration-[250ms]">
                    <img
                      src={card.image}
                      alt={card.name[language]}
                      className="m-auto "
                    />
                    <h4 className="font-medium text-xl">
                      {card.name[language]}
                    </h4>
                    <h4 className="mb-3">{card.designation[language]}</h4>
                    <h4>{card.description[language]}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatedButton
          text={language === "hindi" ? "और पढ़ें" : "READ MORE"}
        />
      </section>

      <section className="p-6 min-[800px]:px-20">
        <div className="flex items-center gap-4 m-auto w-fit p-4">
          <img
            src={leafsDesign}
            alt="leafs-design"
            className="h-6 min-[480px]:h-14"
          />
          <h2 className="gradient-border-center pb-4 text-lg  min-[480px]:text-5xl font-light z-10 bg-white">
            {language === "hindi"
              ? "पुरस्कार और मान्यता"
              : "Awards & Recognization"}
          </h2>
          <img
            src={leafsDesign}
            alt="leafs-design"
            className="h-6 min-[480px]:h-14"
          />
        </div>
        <div className="text-center my-2">
          <p className="min-[800px]:w-3/4 m-auto font-medium my-2">
            {awardtexts[0][language]}
          </p>
          <p className="min-[800px]:w-11/12 m-auto  text-sm font-light tracking-wider leading-6">
            {awardtexts[1][language]}
          </p>
        </div>
        <div id="home-slideshow-2" className="relative">
          <Slide {...slideProperties}>
            {awardCards.map((slide, index) =>
              Array.isArray(slide) ? (
                <div key={index} className="flex justify-evenly gap-10">
                  {slide.map((card, cardIndex) => (
                    <AwardsCard details={card} key={cardIndex} />
                  ))}
                </div>
              ) : (
                <AwardsCard details={slide} key={index} />
              )
            )}
          </Slide>
        </div>
      </section>

      <section
        className={`grid grid-cols-1 min-[600px]:grid-cols-2 xl:grid-cols-4  p-4 px-0 lg:px-10  xl:px-20   bg-background_image_1  bg-no-repeat bg-center bg-cover`}
      >
        <div className="flex items-center gap-4 m-auto my-4">
          <img src={leafsDesign} alt="leaf-design" className="h-10" />
          <div className="relative text-white">
            <h2 className="border-b-2 border-white text-4xl font-light">
              {language === "hindi" ? "उपलब्धियों" : "Achievements"}
            </h2>
          </div>
        </div>
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index + 1}
            className={`flex items-center gap-8 w-fit  p-4 py-5  rounded-tr-3xl rounded-bl-3xl m-auto my-4  ${
              index === 0
                ? "bg-primary"
                : index === 1
                ? "bg-white"
                : "bg-secondary"
            }`}
          >
            <img src={homeIcon} alt="home-icon" className="h-full" />
            <div>
              <h4 className="text-2xl font-medium">
                {index === 0 ? "450K+" : index === 1 ? "3000+" : "76.9K+"}
              </h4>
              <p>
                {language === "hindi" ? "डेटा जानकारी" : "Data Information"}{" "}
                {index + 1}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="p-6 my-4  min-[800px]:px-20">
        <div className="flex items-center gap-4 w-fit m-auto my-4">
          <img
            src={leafsDesign}
            alt="leaf-design"
            className="h-6 min-[480px]:h-10"
          />
          <div className="relative">
            <h2 className="gradient-border-center  border-b-2 border-white text-4xl font-light">
              {language === "hindi" ? "प्रशंसापत्र" : "Testimonials"}
            </h2>
          </div>
          <img
            src={leafsDesign}
            alt="leaf-design"
            className="h-6 min-[480px]:h-10"
          />
        </div>
        <div id="home-slideshow-3" className=" m-auto">
          <Slide {...slideProperties}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-fit m-auto text-center p-4">
                <img
                  src={startingQuotes}
                  alt="quotes"
                  className="m-auto my-4"
                />
                <h4 className="my-4 font-medium text-xl">
                  {testimonial.heading[language]}
                </h4>
                <p className="min-[800px]:w-8/12 m-auto my-4 font-light">
                  {testimonial.description[language]}
                </p>
                <img src={avatar} alt="human-avatar" className="m-auto my-4" />
                <h5 className="my-2 font-medium text-xl">
                  {testimonial.name[language]}
                </h5>
                <p className="font-light">
                  {testimonial.designation[language]},{" "}
                  {testimonial.department[language]} -{" "}
                  {testimonial.city[language]}
                </p>
              </div>
            ))}
          </Slide>
        </div>
      </section>

      <section className="p-6 my-4  min-[800px]:px-20">
        <div className="flex items-center gap-4 m-auto w-fit p-4">
          <img src={leafsDesign} alt="leafs-design" className="h-10  md:h-14" />
          <h2 className="gradient-border-center text-2xl  lg:text-5xl font-light bg-white pt-2 pb-4">
            {language === "hindi"
              ? "ग्राम पंचायत के लाभ"
              : "Benefits of Gram Panchayat"}
          </h2>
          <img src={leafsDesign} alt="leafs-design" className="h-10  md:h-14" />
        </div>

        <Fragment>
          <div
            className={`${
              benefit1Expanded ? "h-auto" : "h-[30px]"
            } overflow-hidden`}
          >
            <p className="text-2xl font-semibold">{benefit1.title[language]}</p>
            {benefit1.texts.map((text, index) => (
              <p key={index}>
                <span className="font-medium">{text.point[language]}</span>
                <span>{text.details[language]}</span>
              </p>
            ))}
          </div>
          <button
            onClick={() =>
              setBenefitsExpansion((prev) => ({
                ...prev,
                benefit1Expanded: !prev.benefit1Expanded,
              }))
            }
            className="text-blue-500"
          >
            {benefit1Expanded
              ? language === "hindi"
                ? "कम पढ़ें"
                : "Read less"
              : language === "hindi"
              ? "और पढ़ें"
              : "Ream more..."}
          </button>
        </Fragment>

        <Fragment>
          <div
            className={`${
              benefit2Expanded ? "h-auto" : "h-[30px]"
            } overflow-hidden`}
          >
            <p className="text-2xl font-semibold">{benefit2.title[language]}</p>
            <p>{benefit2.details[language]}</p>
            {benefit2.texts.map((text, index) => (
              <p key={index}>
                <span className="font-medium">{text.point[language]}</span>
                <span>{text.details[language]}</span>
              </p>
            ))}
            <p>{benefit2.footer[language]}</p>
          </div>

          <button
            onClick={() =>
              setBenefitsExpansion((prev) => ({
                ...prev,
                benefit2Expanded: !prev.benefit2Expanded,
              }))
            }
            className="text-blue-500"
          >
            {benefit2Expanded
              ? language === "hindi"
                ? "कम पढ़ें"
                : "Read less"
              : language === "hindi"
              ? "और पढ़ें"
              : "Ream more..."}
          </button>
        </Fragment>

        <Fragment>
          <div
            className={`${
              benefit3Expanded ? "h-auto" : "h-[30px]"
            } overflow-hidden`}
          >
            <p className="text-2xl font-semibold">{benefit3.title[language]}</p>
            <p>{benefit3.details[language]}</p>
            {benefit3.texts.map((text, index) => (
              <p key={index}>
                <span className="font-medium">{text.point[language]}</span>
                <span>{text.details[language]}</span>
              </p>
            ))}
            <p>{benefit3.footer[language]}</p>
          </div>
          <button
            onClick={() =>
              setBenefitsExpansion((prev) => ({
                ...prev,
                benefit3Expanded: !prev.benefit3Expanded,
              }))
            }
            className="text-blue-500"
          >
            {benefit3Expanded
              ? language === "hindi"
                ? "कम पढ़ें"
                : "Read less"
              : language === "hindi"
              ? "और पढ़ें"
              : "Ream more..."}
          </button>
        </Fragment>

        <Fragment>
          <div
            className={`${
              benefit4Expanded ? "h-auto" : "h-[30px]"
            } overflow-hidden`}
          >
            <p className="text-2xl font-semibold">{benefit4.title[language]}</p>
            <p>{benefit4.details[language]}</p>
            {benefit4.texts.map((text, index) => (
              <p key={index}>{text[language]}</p>
            ))}
          </div>
          <button
            onClick={() =>
              setBenefitsExpansion((prev) => ({
                ...prev,
                benefit4Expanded: !prev.benefit4Expanded,
              }))
            }
            className="text-blue-500"
          >
            {benefit4Expanded
              ? language === "hindi"
                ? "कम पढ़ें"
                : "Read less"
              : language === "hindi"
              ? "और पढ़ें"
              : "Ream more..."}
          </button>
        </Fragment>
      </section>
      <NavLink to="/download-pariwar-nakal">
        <button className="fixed -mt-4  bottom-8 right-5 z-10  p-3 px-5 bg-black text-white rounded-2xl">
          {language === "hindi"
            ? "परिवार नकल डाउनलोड करें"
            : "Download Pariwar Nakal"}
        </button>
      </NavLink>
    </div>
  );
}
