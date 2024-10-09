import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import homeBanner1 from "/home-banner-1.png";
import whiteCorner from "/white-corner.svg";
import leafsDesign from "/leafs-design.svg";
import avatar from "/dummy-avatar.svg";
import awardImage from '/award.webp'
import homeIcon from '/home-icon.svg'
import startingQuotes from '/starting-quotes.svg'
import { useEffect, useState } from "react";
import AwardsCard from "../components/AwardsCard";
import '../utils/Home.css'
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
  const [isLeftToRight, setIsLeftToRight] = useState(false);
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
  award_venue : 'Award name & venue',
  date : 'dd-mm-yy',
  description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
}
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLeftToRight((prev) => !prev);
    }, 30000);

    return () => clearInterval(interval);
  }, []);
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
        <div className="flex bg-secondary items-center ">
          <div className="flex relative items-center bg-primary  font-medium  h-14">
            <p className="ml-24 mr-5 w-fit whitespace-nowrap">LATEST NEWS</p>
            <img
              src={whiteCorner}
              alt="white-corner"
              className=" absolute -right-4 z-10 h-full"
            />
          </div>

          <div className="overflow-hidden relative w-full ">
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
          </div>
        </div>
      </section>

      <section className="flex gap-6  p-6 min-[800px]:px-20 bg-mid_gray">
        <div className=" h-screen w-2/4 mb-28">
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
            <div className="animate-button">
              <p className="font-medium">READ MORE</p>
              <div className="flex justify-center items-center gap-1">

              <p className="font-extrabold text-2xl mb-4">.</p>
              <svg className="right-arrow"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.707,12.707a1,1,0,0,0,0-1.414l-6-6a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-4.293,4.293a1,1,0,0,0,1.414,1.414Z"/></svg>
              </div>
            </div>

        </div>



        <div className="grid grid-cols-2 gap-8 ">
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
      </section>

      <section className="p-6 min-[800px]:px-20">
        <div className="flex items-center gap-4 m-auto w-fit p-4">
          <img src={leafsDesign} alt="leafs-design"  className="h-14"/>
          <h2 className=" text-5xl font-light z-10 bg-white">Award<span className="gradient-border after:bottom-1 ">s & Recognization</span></h2>
          <img src={leafsDesign} alt="leafs-design"  className="h-14"/>
        </div>
        <div className="text-center my-2">
          <p className="min-[800px]:w-3/4 m-auto font-medium my-2">“It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages”</p>
          <p className="min-[800px]:w-11/12 m-auto  text-sm font-light tracking-wider leading-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div id="home-slideshow-2"  className="relative">
        <Slide {...slideProperties}>
            {Array.from({length:3},(_,index1)=>(
              <div key={index1+1} className="award-slide flex justify-evenly gap-10">
                {Array.from({length:3},(_,index2)=>(
                 <AwardsCard key={index2+1} details={awardCard}/>
                ))}
              </div>
            ))}
          </Slide>
        </div>
      </section>


      <section className={`flex p-6 min-[800px]:px-20  justify-between bg-background_image_1  bg-no-repeat bg-center bg-cover`}>
        <div className="flex items-center gap-4">
          <img src={leafsDesign} alt="leaf-design"  className="h-10"/>
            <div className="relative text-white">
            <h2 className="border-b-2 border-white text-4xl font-light">Achievements</h2>
            </div>
        </div>
            {Array.from({length:3},(_,index)=>(
              <div key={index+1} className={`flex items-center gap-8  p-4 py-5  rounded-tr-3xl rounded-bl-3xl  ${index === 0 ? "bg-primary" : index===1 ? "bg-white" : "bg-secondary"}`}>
                <img src={homeIcon} alt="home-icon" />
                <div>
                  <h4 className="text-2xl font-medium">{index === 0 ? "450K+" : index===1 ? "3000+" : "76.9K+"}</h4>
                  <p>Data Information {index+1}</p>
                </div>
              </div>
            ))}
 
      </section>

      <section className="p-6 my-4  min-[800px]:px-20">
      <div className="flex items-center gap-4 w-fit m-auto my-4">
          <img src={leafsDesign} alt="leaf-design"  className="h-10"/>
            <div className="relative">
            <h2 className="  border-b-2 border-white text-4xl font-light">Te<span className="gradient-border after:w-full">stimoni</span>als</h2>
            </div>
          <img src={leafsDesign} alt="leaf-design"  className="h-10"/>
        </div>
        <div id="home-slideshow-3" className=" m-auto">
          <Slide {...slideProperties}>
            {Array.from({length:2},(_,index)=>(
              <div key={index} className="w-fit m-auto text-center p-4">
                <img src={startingQuotes} alt="quotes" className="m-auto my-4"/>
                <h4 className="my-4 font-medium text-xl">Testimonial Heading {index+1}</h4>
                <p className="min-[800px]:w-8/12 m-auto my-4 font-light">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <img src={avatar} alt="human-avatar" className="m-auto my-4"/>
                <h5 className="my-2 font-medium text-xl">Person Name {index+1}</h5>
                <p className="font-light">Dasignation, Department - City name</p>
              </div>
            ))}
          </Slide>
        </div>
      </section>
    </div>
  );
}
