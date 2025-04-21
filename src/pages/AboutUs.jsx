import HeroImage from "/about-image-1.jpeg";
import preciousWordsImage from "/about-us/precious-words-image.jpeg";
import leafsDesign from "/leafs-design.svg";
import startingQuotes from "/starting-quotes.svg";
import endingQuotes from "/ending-quotes.svg";

import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Facility from "../components/Facility";
import { Slide } from "react-slideshow-image";
import PersonSlide from "../components/PersonSlide";
import gramPanchayatImage from "/about-us/gram-panchayat.jpeg";
import {
  heroTextsData,
  preciousWordsData,
  facilitiesData,
  personCard1,
  personCard2,
  personCard3,
  personCard4,
  personCard5,
  personCard6,
  personCard7,
  personCard8,
  personCard9,
} from "../assets/data/about_data";
export default function AboutUs() {
  const { language } = useContext(LanguageContext);

  const slideProperties = {
    duration: 2500,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: () => <div className="slide-indicator "></div>,
  };
  const benefits = [
    {
      title: {
        english: "Local Governance and Empowerment",
        hindi: "स्थानीय शासन और सशक्तिकरण",
      },
      text: {
        english:
          "Gram Panchayats bring governance closer to the people, allowing villagers to have a say in decisions that affect their lives. This promotes local leadership and strengthens democratic participation.",
        hindi:
          "ग्राम पंचायतें शासन को लोगों के पास लाती हैं, जिससे ग्रामीणों को उनके जीवन को प्रभावित करने वाले निर्णयों में भाग लेने का अवसर मिलता है। यह स्थानीय नेतृत्व को बढ़ावा देता है और लोकतांत्रिक भागीदारी को मजबूत करता है।",
      },
    },
    {
      title: {
        english: "Improved Infrastructure and Development",
        hindi: "सुधरी हुई बुनियादी ढांचा और विकास",
      },
      text: {
        english:
          "Gram Panchayats help in the development of basic infrastructure such as roads, water supply, sanitation, and healthcare, improving the overall quality of life in rural areas.",
        hindi:
          "ग्राम पंचायतें सड़कों, जल आपूर्ति, स्वच्छता और स्वास्थ्य देखभाल जैसी बुनियादी सुविधाओं के विकास में मदद करती हैं, जिससे ग्रामीण क्षेत्रों में जीवन की गुणवत्ता में सुधार होता है।",
      },
    },
    {
      title: {
        english: "Efficient Resource Management",
        hindi: "संसाधन प्रबंधन में दक्षता",
      },
      text: {
        english:
          "Gram Panchayats manage local resources like water and land effectively, ensuring sustainable use and reducing conflicts over resource distribution.",
        hindi:
          "ग्राम पंचायतें जल और भूमि जैसे स्थानीय संसाधनों का प्रभावी तरीके से प्रबंधन करती हैं, जिससे इनका सतत उपयोग सुनिश्चित होता है और संसाधन वितरण को लेकर संघर्ष कम होते हैं।",
      },
    },
    {
      title: {
        english: "Welfare Programs Implementation",
        hindi: "कल्याणकारी योजनाओं का कार्यान्वयन",
      },
      text: {
        english:
          "Gram Panchayats are responsible for implementing government welfare schemes such as health programs, education, and social security, directly benefiting the villagers.",
        hindi:
          "ग्राम पंचायतें सरकार की स्वास्थ्य, शिक्षा और सामाजिक सुरक्षा जैसी कल्याणकारी योजनाओं को लागू करने की जिम्मेदारी निभाती हैं, जिसका सीधा लाभ ग्रामीणों को होता है।",
      },
    },
    {
      title: { english: "Conflict Resolution", hindi: "विवाद समाधान" },
      text: {
        english:
          "Gram Panchayats serve as local dispute resolution bodies, helping resolve conflicts within the community and maintaining peace and harmony.",
        hindi:
          "ग्राम पंचायतें स्थानीय विवाद निपटान की भूमिका निभाती हैं, जिससे समुदाय के भीतर संघर्षों का समाधान होता है और शांति तथा सौहार्द बना रहता है।",
      },
    },
  ];
  const [importantPersons, setImportantPerson] = useState([
    personCard1,
    personCard2,
    personCard3,
    personCard4,
    personCard5,
    personCard6,
    personCard7,
    personCard8,
    personCard9,
  ]);
  useEffect(() => {
    const updateAwardCards = () => {
      const isSmallScree = window.innerWidth < 1024;
      const updatedSlides = isSmallScree
        ? [
            personCard1,
            personCard2,
            personCard3,
            personCard4,
            personCard5,
            personCard6,
            personCard7,
            personCard8,
            personCard9,
          ]
        : [
            [personCard1, personCard2, personCard3],
            [personCard4, personCard5, personCard6],
            [  personCard7,
              personCard8,
              personCard9]
          ];
      setImportantPerson(updatedSlides);
    };
    updateAwardCards();
    window.addEventListener("resize", updateAwardCards);
    return () => window.removeEventListener("resize", updateAwardCards);
  }, []);

  return (
    <div>
      <section className="p-6 min-[800px]:px-16  bg-mid_gray text-sm ">
        <div className="font-bold w-fit p-4 m-auto">
          <p>गावो भगो गाव इन्द्रो मे अच्छान्गावः सोमस्य प्रथमस्य भक्षः ।</p>
          <p>इमा या गावः स जनास इन्द्र इच्छामीद्धृदा मनसा चिदिन्द्रम् ॥५॥</p>
          <p className="text-xs min-[800px]:ml-60 mt-4">
            ऋग्वेदः - मण्डल ६ , सूक्तं ६.२८ , बार्हस्पत्यो भरद्वाज
          </p>
        </div>
        <div className="flex flex-col-reverse  min-[950px]:grid grid-cols-2   gap-12 items-center my-10">
          <div className="tracking-widest text-gray-600 mb-8 min-[950px]:mb-0">
            <p>{heroTextsData[0][language]}</p>
            <br />
            <p>{heroTextsData[1][language]}</p>
          </div>

          <div className=" corner-border">
            <div className="top-left"></div>
            <div className="bottom-right"></div>
            <div className="max-h-[350px] p-1 mb-1  text-center font-light text-lg  rounded-tr-[85px] rounded-bl-[85px] overflow-hidden">
              <img
                src={HeroImage}
                alt={"about-image-1"}
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="precious-words" className="p-6 min-[800px]:px-16">
        <div className="flex items-center gap-4 m-auto w-fit p-4">
          <img src={leafsDesign} alt="leafs-design" className="h-8  md:h-14" />
          <h2 className="gradient-border-center text-2xl  lg:text-5xl font-light bg-white">
            {language === "hindi" ? "अनमोल वचन" : "Precious Words"}
          </h2>
          <img src={leafsDesign} alt="leafs-design" className="h-8  md:h-14" />
        </div>
        <div className="lg:grid grid-cols-2 items-center  gap-4 min-[800px]:gap-10 my-6">
          <div className=" corner-border max-w-[650px] max-h-[350px]">
            <div className="top-left -top-[15px] -left-[15px]"></div>
            <div className="bottom-right z-10 bg-secondary text-white pl-8 pt-1  md:pt-4  flex flex-col justify-center h-auto   w-[70%]  md:w-[40%] ">
              <p className="">
                {language === "hindi" ? "व्यक्ति का नाम" : "Person Name"}
              </p>
              <p className=" mt-2 text-sm">
                {language === "hindi"
                  ? "यह एक सर्वविदित तथ्य है कि एक पाठक पृष्ठ की पठनीय"
                  : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"}
              </p>
            </div>
            <img
              src={preciousWordsImage}
              alt={"precious-words-image"}
              className=" w-full h-full object-cover max-w-[650px] max-h-[350px]  rounded-tr-[75px] rounded-bl-[75px]"
            />
          </div>
          <div className="font-light text-sm ">
            <p className="my-4">
              <img
                src={startingQuotes}
                alt="starting-quotes"
                className=" h-5 inline-block -mt-5 mr-1"
              />

              <span> {preciousWordsData[0][language]}</span>
            </p>
            <p className="my-4 font-medium">{preciousWordsData[1][language]}</p>
            <p className="my-4">
              {preciousWordsData[2][language]}
              <img
                src={endingQuotes}
                alt="ending-quotes"
                className=" inline-block h-5 ml-3 mt-2"
              />
            </p>
          </div>
        </div>
      </section>
      <section id="facilities" className="p-6 min-[800px]:px-16">
        <div className="flex items-center gap-4 m-auto w-fit p-4">
          <img src={leafsDesign} alt="leafs-design" className="h-10  md:h-14" />
          <h2 className="gradient-border-center text-2xl  lg:text-5xl font-light bg-white pt-2 pb-4">
            {language === "hindi" ? "असुविधाएँ" : "Facilities"}
          </h2>
          <img src={leafsDesign} alt="leafs-design" className="h-10  md:h-14" />
        </div>

        {facilitiesData.map((facility, index) => (
          <Facility facility={facility} key={index} />
        ))}
      </section>
      <section id="benefits" className="p-6 min-[800px]:px-16">
        <div className="flex items-center gap-4 m-auto w-fit p-4">
          <img src={leafsDesign} alt="leafs-design" className="h-10  md:h-14" />
          <h2 className="gradient-border-center text-2xl  lg:text-5xl font-light bg-white pt-2 pb-4">
            {language === "hindi"
              ? "ग्राम पंचायत के लाभ"
              : "Benefits of Gram Panchayat"}
          </h2>
          <img src={leafsDesign} alt="leafs-design" className="h-10  md:h-14" />
        </div>
        <div className="flex flex-col-reverse mt-8 lg:mt-0  lg:grid grid-cols-2 gap-4 min-[800px]:gap-10">
          <ul className="flex flex-col gap-2 p-2 list-disc">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-lg font-medium">
                <b>{benefit.title[language]}: </b>{" "}
                <span>{benefit.text[language]}</span>
              </li>
            ))}
          </ul>
          <img
            src={gramPanchayatImage}
            alt="Gram Panchayat Image"
            className="h-full object-cover"
          />
        </div>
      </section>
      <section id="important-personalities">
        <div className="flex items-center gap-4 m-auto w-fit p-4">
          <img src={leafsDesign} alt="leafs-design" className="h-10  md:h-14" />
          <h2 className="gradient-border-center text-2xl  lg:text-5xl font-light bg-white pt-2 pb-4">
            {language === "hindi"
              ? "महत्वपूर्ण व्यक्तित्व"
              : "Important Personalities"}
          </h2>
          <img src={leafsDesign} alt="leafs-design" className="h-10  md:h-14" />
        </div>

        <div id="personality-slideshow" className="relative">
          <Slide {...slideProperties}>
            {importantPersons.map((slide, index) =>
              Array.isArray(slide) ? (
                <div key={index} className="flex justify-evenly gap-10">
                  {slide.map((card, cardIndex) => (
                    <PersonSlide details={card} key={cardIndex} />
                  ))}
                </div>
              ) : (
                <PersonSlide details={slide} key={index} />
              )
            )}
          </Slide>
        </div>
      </section>
    </div>
  );
}
