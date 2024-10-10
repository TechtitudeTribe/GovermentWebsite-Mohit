import leafsDesign from "/leafs-design.svg";
import image1 from "/gallery-1.jfif";
import image2 from "/gallery-2.jfif";
import image3 from "/gallery-3.jfif";
import image4 from "/gallery-4.jfif";
import image5 from "/gallery-5.jfif";
import image6 from "/gallery-6.jfif";
import image7 from "/gallery-7.jfif";
import image8 from "/gallery-8.jfif";
import image9 from "/gallery-9.jfif";
import image10 from "/gallery-10.jfif";
import image11 from "/gallery-11.jfif";
import image12 from "/gallery-12.jfif";
import image13 from "/gallery-13.jfif";
import locationIcon from "/location.svg";
import "../utils/Media.css";
import AnimatedButton from "../components/AnimatedButton";
export default function Media() {
  const data = [
    image1,
    {
      text1:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae",
      text2:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit autfugit, sed quia consequuntur magni dolores eos qui rationevoluptatem sequi nesciunt.",
    },
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  return (
    <div className=" p-2 lg:p-8  xl:p-20 bg-mid_gray">
      <div className="flex items-center gap-4 w-fit m-auto">
        <img src={leafsDesign} alt="leaf-design" className="h-10" />
        <h2 className=" text-4xl font-light bg-transparent">
          G<span className="gradient-border">allery</span>
        </h2>
        <img src={leafsDesign} alt="leaf-design" className="h-10" />
      </div>
      <div className="min-[850px]:hidden text-center mt-8">
      <p className="font-medium ">{data[1].text1}</p>
      <p className="font-light ">{data[1].text2}</p>
      </div>
      <div className="grid grid-cols-2  min-[850px]:grid-cols-4 gap-3 min-[850px]:gap-5  mt-8">
        {data.map((element, index) =>
          index === 1 ? (
            <div
              key={index}
              className=" max-[850px]:hidden  p-6 col-span-2 text-center  flex flex-col justify-center gap-4"
            >
              <p className="font-medium ">{element.text1}</p>
              <p className="font-light ">{element.text2}</p>
            </div>
          ) : (
            <div
              key={index}
              className={`gallery-card ${
                (index === 0 || index == 2) && "min-[850px]:row-span-2"
              } ${
                (index === 5 || index === 10 || index === 12) && "min-[850px]:col-span-2"
              }`}
            >
              <img src={element} alt="Image-1" />
              <div className="circle top-left-circle max-[850px]:hidden">
                <div className="small-underline">2023</div>
                <p>March 1</p>
              </div>
              <div className="circle bottom-right-circle max-[850px]:hidden">
                <img src={locationIcon} alt="location-icon" />
                <p>Dhampur</p>
              </div>
            </div>
          )
        )}
      </div>
      <AnimatedButton text="VIEW MORE" />
    </div>
  );
}
