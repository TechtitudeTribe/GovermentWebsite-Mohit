import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import homeBanner1 from "../assets/Images/home/home-banner-1.png";
import whiteCorner from "../assets/Images/home/white-corner.svg";
import leafsDesign from "../assets/icons/leafs-design.svg";
import avatar from "../assets/Images/home/dummy-avatar.svg";
import personality1Image from "../assets/Images/about-us/personality-1.jpg";
import personality2Image from "../assets/Images/about-us/personality-2.jpeg";
import personality3Image from "../assets/Images/about-us/personality-3.jpeg";
import personality4Image from "../assets/Images/about-us/personality-4.jpeg";
import personality5Image from "../assets/Images/about-us/personality-5.jpeg";
import personality6Image from "../assets/Images/about-us/personality-6.jpeg";
import personality7Image from "../assets/Images/about-us/personality-7.jpeg";
import personality8Image from "../assets/Images/about-us/personality-8.jpeg";
import personality9Image from "../assets/Images/about-us/personality-9.jpeg";
import homeIcon from "../assets/Images/home/home-icon.svg";
import startingQuotes from "../assets/icons/starting-quotes.svg";
import { useContext, useEffect, useState } from "react";
import AwardsCard from "../components/AwardsCard";
import "../utils/Home.css";
import AnimatedButton from "../components/AnimatedButton";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Home() {
  const aboutTexts = [
    {
      english: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.`,
      hindi: `पशुधन पालन आम बात है और राज्य कृषि का एक अभिन्न अंग है जो ग्रामीण आबादी के
             दो तिहाई से अधिक लोगों की आजीविका का समर्थन करता है। पशु पोषक तत्वों से भरपूर खाद्य
              उत्पाद, भार वहन करने की शक्ति, जैविक खाद और घरेलू ईंधन के रूप में गोबर, खाल और
              चमड़ा प्रदान करते हैं और ग्रामीण परिवारों के लिए नकद आय का एक नियमित स्रोत हैं`,
    },
    {
      english: `“It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.”`,
      hindi: `लोरेम इप्सम एक छद्म-लैटिन पाठ है जिसका उपयोग मुद्रण और टाइपसेटिंग उद्योगों में किया जाता है। 1500 के दशक के बाद से, जब एक अज्ञात प्रिंटर ने एक प्रकार की नमूना पुस्तक बनाने के लिए एक गैली टाइप किया, लोरेम इप्सम उद्योग का मानक डमी टेक्स्ट रहा है। यह न केवल पांच शताब्दियों तक जीवित रहा है, बल्कि इलेक्ट्रॉनिक टाइपसेटिंग में भी परिवर्तन हुआ है, जो अनिवार्य रूप से अपरिवर्तित है।`,
    },
    {
      english: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt`,
      hindi: `यह एक सर्वविदित तथ्य है कि एक पाठक पृष्ठ की पठनीय सामग्री से उसके लेआउट को देखते समय विचलित हो जाएगा। लोरेम इप्सम का उपयोग करने का मुद्दा यह है कि इसमें 'यहां सामग्री, यहां सामग्री' का उपयोग करने के विपरीत, कम या ज्यादा सामान्य पत्र वितरण है, जो इसे पठनीय अंग्रेजी की तरह दिखता है। कई डेस्कटॉप प्रकाशन पैकेज और वेब पेज संपादक अब लोरेम इप्सम को अपने`,
    },
    {
      english: `At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.`,
      hindi: `लोरेम इप्सम केवल यादृच्छिक पाठ नहीं है, लोकप्रिय धारणा के विपरीत है। शास्त्रीय लैटिन साहित्य में इसकी उत्पत्ति का पता 45 ईसा पूर्व में लगाया जा सकता है, जिससे यह 2000 वर्ष से अधिक पुराना हो गया है। वर्जीनिया में हैम्पडेन-सिडनी कॉलेज के एक लैटिन प्रोफेसर रिचर्ड मैक्लिंटॉक ने लोरेम इप्सम मार्ग से अधिक अस्पष्ट लैटिन शब्दों में से एक को देखा, और शास्त्रीय साहित्य `,
    },
  ];
  const aboutCards = [
    {
      image: avatar,
      name: { english: "Person Name 1", hindi: "व्यक्ति का नाम 1" },
      designation: { english: "Designation", hindi: "पद का नाम" },
      description: {
        english:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        hindi:
          "पशुधन पालन आम बात है और राज्य कृषि का एक अभिन्न अंग है जो ग्रामीण आबादी के",
      },
    },
    {
      image: avatar,
      name: { english: "Person Name 2", hindi: "व्यक्ति का नाम 2" },
      designation: { english: "Designation", hindi: "पद का नाम" },
      description: {
        english:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        hindi:
          "पशुधन पालन आम बात है और राज्य कृषि का एक अभिन्न अंग है जो ग्रामीण आबादी के",
      },
    },
    {
      image: avatar,
      name: { english: "Person Name 3", hindi: "व्यक्ति का नाम 3" },
      designation: { english: "Designation", hindi: "पद का नाम" },
      description: {
        english:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        hindi:
          "पशुधन पालन आम बात है और राज्य कृषि का एक अभिन्न अंग है जो ग्रामीण आबादी के",
      },
    },
    {
      image: avatar,
      name: { english: "Person Name 4", hindi: "व्यक्ति का नाम 4" },
      designation: { english: "Designation", hindi: "पद का नाम" },
      description: {
        english:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        hindi:
          "पशुधन पालन आम बात है और राज्य कृषि का एक अभिन्न अंग है जो ग्रामीण आबादी के",
      },
    },
  ];
  const awardtexts = [
    {
      english:
        "“It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages”",
      hindi:
        "“यह न केवल पांच शताब्दियों तक जीवित रहा है, बल्कि इलेक्ट्रॉनिक टाइपसेटिंग में भी छलांग लगाई है, तथा मूलतः अपरिवर्तित रहा है। 1960 के दशक में लोरेम इप्सुम अंशों वाले लेट्रासेट शीटों के जारी होने के साथ इसे लोकप्रिय बनाया गया”",
    },
    {
      english:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      hindi:
        "लोरेम इप्सम केवल यादृच्छिक पाठ नहीं है, लोकप्रिय धारणा के विपरीत है। शास्त्रीय लैटिन साहित्य में इसकी उत्पत्ति का पता 45 ईसा पूर्व में लगाया जा सकता है, जिससे यह 2000 वर्ष से अधिक पुराना हो गया है। वर्जीनिया में हैम्पडेन-सिडनी कॉलेज के एक लैटिन प्रोफेसर रिचर्ड मैक्लिंटॉक ने लोरेम इप्सम मार्ग से अधिक अस्पष्ट लैटिन शब्दों में से एक को देखा, और शास्त्रीय साहित्य में शब्द के उद्धरणों के माध्यम से निर्विवाद स्रोत की खोज की। लोरेम इप्सम सिसरो के 'डी फिनिबस बोनोरम एट मालोरम' (द एक्सट्रीम ऑफ गुड एंड एविल) से लिया गया है, जिसे 45 ईसा पूर्व में लिखा गया था। यह पुस्तक पुनर्जागरण के दौरान नैतिकता के सिद्धांत पर एक लोकप्रिय ग्रंथ है। की पहली पंक्ति, खंड की एक पंक्ति से आती है। रुचि रखने वालों के लिए",
    },
  ];

  const awardCard = {
    image: null,
    award_venue: {
      english: "Award name & venue",
      hindi: "पुरस्कार का नाम एवं स्थान",
    },
    date: { english: "dd-mm-yyyy", hindi: "dd-mm-yyyy" },
    description: {
      english:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      hindi:
        "लोरेम इप्सम केवल यादृच्छिक पाठ नहीं है, लोकप्रिय धारणा के विपरीत है। शास्त्रीय लैटिन साहित्य में इसकी उत्पत्ति का पता 45 ईसा पूर्व में लगाया जा सकता है, जिससे यह 2000 वर्ष से अधिक पुराना हो गया है। वर्जीनिया में हैम्पडेन-सिडनी कॉलेज के एक लैटिन प्रोफेसर",
    },
  };
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
    { ...awardCard, image: personality1Image },
    { ...awardCard, image: personality2Image },
    { ...awardCard, image: personality3Image },
    { ...awardCard, image: personality4Image },
    { ...awardCard, image: personality5Image },
    { ...awardCard, image: personality6Image },
    { ...awardCard, image: personality7Image },
    { ...awardCard, image: personality8Image },
    { ...awardCard, image: personality9Image },
  ]);
  useEffect(() => {
    const updateAwardCards = () => {
      const isSmallScree = window.innerWidth < 1024;
      const updatedSlides = isSmallScree
        ? [
            { ...awardCard, image: personality1Image },
            { ...awardCard, image: personality2Image },
            { ...awardCard, image: personality3Image },
            { ...awardCard, image: personality4Image },
            { ...awardCard, image: personality5Image },
            { ...awardCard, image: personality6Image },
            { ...awardCard, image: personality7Image },
            { ...awardCard, image: personality8Image },
            { ...awardCard, image: personality9Image },
          ]
        : [
            [
              { ...awardCard, image: personality1Image },
              { ...awardCard, image: personality2Image },
              { ...awardCard, image: personality3Image },
            ],
            [
              { ...awardCard, image: personality4Image },
              { ...awardCard, image: personality5Image },
              { ...awardCard, image: personality6Image },
            ],
            [
              { ...awardCard, image: personality7Image },
              { ...awardCard, image: personality8Image },
              { ...awardCard, image: personality9Image },
            ],
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
