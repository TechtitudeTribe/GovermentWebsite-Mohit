import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import homeBanner1 from "/home-banner-1.png";
import whiteCorner from "/white-corner.svg";
import leafsDesign from "/leafs-design.svg";
import avatar from "/dummy-avatar.svg";
import awardImage from "/award.webp";
import homeIcon from "/home-icon.svg";
import startingQuotes from "/starting-quotes.svg";
import { useEffect, useState } from "react";
import AwardsCard from "../components/AwardsCard";
import "../utils/Home.css";
import AnimatedButton from "../components/AnimatedButton";

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

  const aboutCards = [
    {
      image: avatar,
      name: "Person Name 1",
      designation: "Designation",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    },
    {
      image: avatar,
      name: "Person Name 2",
      designation: "Designation",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    },
    {
      image: avatar,
      name: "Person Name 3",
      designation: "Designation",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    },
    {
      image: avatar,
      name: "Person Name 4",
      designation: "Designation",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    },
  ];
  const awardCard = {
    image: awardImage,
    award_venue: "Award name & venue",
    date: "dd-mm-yy",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  };
  const [awardCards, setAwardCards] = useState([
    awardCard,
    awardCard,
    awardCard,
    awardCard,
    awardCard,
    awardCard,
    awardCard,
    awardCard,
    awardCard,
  ]);
  useEffect(() => {
    const updateAwardCards = () => {
      const isSmallScree = window.innerWidth < 1024;
      const updatedSlides = isSmallScree
        ? awardCards
        : [
            awardCards.slice(0, 3),
            awardCards.slice(3, 6),
            awardCards.slice(6, 9),
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
              LATEST NEWS
            </p>
            <img
              src={whiteCorner}
              alt="white-corner"
              className=" absolute -right-4 z-10 h-full"
            />
          </div>
          <button className="ml-6 bg-primary text-white p-2 rounded-xl">
            Download Pariwar Nakal
          </button>
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
            <h2 className="text-5xl font-light gradient-border bg-transparent">
              About Us
            </h2>
          </div>
          <div className="font-light text-lg">
            <p className="py-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <p className="py-4 font-medium">
              “It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.”
            </p>
            <p className="py-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt
            </p>
            <p className="py-2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 max-[1280px]:grid-cols-1">
          {aboutCards.map((card, index) => (
            <div key={index}>
              <div key={index} className=" corner-border ">
                <div className="top-left"></div>
                <div className="bottom-right"></div>
                <div className=" aboutus-card text-center font-light text-lg     p-8 py-8 bg-white rounded-tr-[75px] rounded-bl-[75px] ">
                  <div className="hover:scale-110 transition ease-in duration-[250ms]">
                    <img src={card.image} alt={card.name} className="m-auto " />
                    <h4 className="font-medium text-xl">{card.name}</h4>
                    <h4 className="mb-3">{card.designation}</h4>
                    <h4>{card.description}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatedButton text={"READ MORE"} />
      </section>

      <section className="p-6 min-[800px]:px-20">
        <div className="flex items-center gap-4 m-auto w-fit p-4">
          <img
            src={leafsDesign}
            alt="leafs-design"
            className="h-6 min-[480px]:h-14"
          />
          <h2 className="text-lg  min-[480px]:text-5xl font-light z-10 bg-white">
            Award
            <span className="gradient-border after:bottom-1 ">
              s & Recognization
            </span>
          </h2>
          <img
            src={leafsDesign}
            alt="leafs-design"
            className="h-6 min-[480px]:h-14"
          />
        </div>
        <div className="text-center my-2">
          <p className="min-[800px]:w-3/4 m-auto font-medium my-2">
            “It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages”
          </p>
          <p className="min-[800px]:w-11/12 m-auto  text-sm font-light tracking-wider leading-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
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
              Achievements
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
              <p>Data Information {index + 1}</p>
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
            <h2 className="  border-b-2 border-white text-4xl font-light">
              Te<span className="gradient-border after:w-full">stimoni</span>als
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
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index} className="w-fit m-auto text-center p-4">
                <img
                  src={startingQuotes}
                  alt="quotes"
                  className="m-auto my-4"
                />
                <h4 className="my-4 font-medium text-xl">
                  Testimonial Heading {index + 1}
                </h4>
                <p className="min-[800px]:w-8/12 m-auto my-4 font-light">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <img src={avatar} alt="human-avatar" className="m-auto my-4" />
                <h5 className="my-2 font-medium text-xl">
                  Person Name {index + 1}
                </h5>
                <p className="font-light">
                  Dasignation, Department - City name
                </p>
              </div>
            ))}
          </Slide>
        </div>
      </section>
      <button className="fixed -mt-4  bottom-8 right-5 z-10  p-3 px-5 bg-black text-white rounded-2xl">
        Download Pariwar Nakal
      </button>
    </div>
  );
}
