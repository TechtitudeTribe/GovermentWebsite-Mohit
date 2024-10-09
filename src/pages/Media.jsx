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
    <div className=" p-6 min-[800px]:p-20 bg-mid_gray">
      <div className="flex items-center gap-4 w-fit m-auto">
        <img src={leafsDesign} alt="leaf-design" className="h-10" />
        <h2 className=" text-4xl font-light bg-transparent">
          G<span className="gradient-border">allery</span>
        </h2>
        <img src={leafsDesign} alt="leaf-design" className="h-10" />
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        {data.map((element, index) =>
          index === 1 ? (
            <div key={index} className=" p-6 col-span-2 text-center  flex flex-col justify-center gap-4">
              <p className="font-medium ">{element.text1}</p>
              <p className="font-light ">{element.text2}</p>
            </div>
          ) : (
            <div
              key={index}
              className={`gallery-card ${
                (index === 0 || index == 2) && "row-span-2"
              } ${
                (index === 5 || index === 10 || index === 12) && "col-span-2"
              }`}
            >
              <img src={element} alt="Image-1" />
              <div className="circle top-left-circle">
                <div className="small-underline">2023</div>
                <p>March 1</p>
              </div>
              <div className="circle bottom-right-circle">
                <img src={locationIcon} alt="location-icon" />
                <p>Dhampur</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="animate-button m-auto mt-10">
              <p className="font-medium">VIEW MORE</p>
              <div className="flex justify-center items-center gap-1">

              <p className="font-extrabold text-2xl mb-4">.</p>
              <svg className="right-arrow"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.707,12.707a1,1,0,0,0,0-1.414l-6-6a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-4.293,4.293a1,1,0,0,0,1.414,1.414Z"/></svg>
              </div>
            </div>
    </div>
  );
}
