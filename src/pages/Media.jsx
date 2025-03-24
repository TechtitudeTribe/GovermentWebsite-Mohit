import leafsDesign from "/leafs-design.svg";
import image1 from "/media/gallery-1.jfif";
import image2 from "/media/gallery-2.jfif";
import image3 from "/media/gallery-3.jfif";
import image4 from "/media/gallery-4.jfif";
import image5 from "/media/gallery-5.jfif";
import image6 from "/media/gallery-6.jfif";
import image7 from "/media/gallery-7.jfif";
import image8 from "/media/gallery-8.jfif";
import image9 from "/media/gallery-9.jfif";
import image10 from "/media/gallery-10.jfif";
import image11 from "/media/gallery-11.jfif";
import image12 from "/media/gallery-12.jfif";
import image13 from "/media/gallery-13.jfif";
import locationIcon from "/media/location.svg";
import "../utils/Media.css";
import AnimatedButton from "../components/AnimatedButton";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
export default function Media() {
  const data = [
    image1,
    {
      text1: {
        english: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
        hindi: `लोरेम इप्सम एक छद्म-लैटिन पाठ है जिसका उपयोग मुद्रण और टाइपसेटिंग उद्योगों में किया जाता है। 1500 के दशक के बाद से, जब एक अज्ञात प्रिंटर ने एक प्रकार की नमूना पुस्तक बनाने के लिए एक गैली टाइप किया, लोरेम इप्सम उद्योग का मानक डमी टेक्स्ट रहा है। यह न केवल पांच शताब्दियों तक जीवित रहा है, बल्कि इलेक्ट्रॉनिक टाइपसेटिंग में भी परिवर्तन हुआ है, जो अनिवार्य रूप से अपरिवर्तित है। इसने 1960 के दशक में लोरेम इप्सम पैसेज वाले लेट्रासेट शीट्स के रिलीज के साथ लोकप्रियता हासिल की, और हाल ही में एल्डस पेजमेकर जैसे डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ, जिसमें लोरेम इप्सम संस्करण शामिल हैं।`,
      },
      text2: {
        english:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        hindi:
          "यह एक सर्वविदित तथ्य है कि एक पाठक पृष्ठ की पठनीय सामग्री से उसके लेआउट को देखते समय विचलित हो जाएगा। लोरेम इप्सम का उपयोग करने का मुद्दा यह है कि इसमें 'यहां सामग्री, यहां सामग्री' का उपयोग करने के विपरीत, कम या ज्यादा सामान्य पत्र वितरण है, जो इसे पठनीय अंग्रेजी की तरह दिखता है। कई डेस्कटॉप प्रकाशन पैकेज और वेब पेज संपादक अब लोरेम इप्सम को अपने डिफ़ॉल्ट मॉडल टेक्स्ट के रूप में उपयोग करते हैं, और 'लोरेम इप्सम' की खोज कई नई वेब साइटों को प्रकट करेगी। समय के साथ विभिन्न संस्करण सामने आए हैं, कभी संयोग से, कभी उद्देश्य पर (इंजेक्शन हास्य और इसी तरह)।",
      },
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
  const { language } = useContext(LanguageContext);
  return (
    <div className=" p-2 lg:p-8  xl:p-20 bg-mid_gray">
      <div className="flex items-center gap-4 w-fit m-auto">
        <img src={leafsDesign} alt="leaf-design" className="h-10" />
        <h2 className="gradient-border-center text-4xl font-light bg-transparent pt-2">
          {language==='hindi'?"गैलरी":"Gallery"}
        </h2>
        <img src={leafsDesign} alt="leaf-design" className="h-10" />
      </div>
      <div className="min-[850px]:hidden text-center mt-8">
        <p className="font-medium ">{data[1].text1[language]}</p>
        <p className="font-light ">{data[1].text2[language]}</p>
      </div>
      <div className="grid grid-cols-2  min-[850px]:grid-cols-4 gap-3 min-[850px]:gap-5  mt-8">
        {data.map((element, index) =>
          index === 1 ? (
            <div
              key={index}
              className=" max-[850px]:hidden  p-6 col-span-2 text-center  flex flex-col justify-center gap-4"
            >
              <p className="font-medium ">{element.text1[language]}</p>
              <p className="font-light ">{element.text2[language]}</p>
            </div>
          ) : (
            <div
              key={index}
              className={`gallery-card ${
                (index === 0 || index == 2) && "min-[850px]:row-span-2"
              } ${
                (index === 5 || index === 10 || index === 12) &&
                "min-[850px]:col-span-2"
              }`}
            >
              <img src={element} alt="Image-1" />
              <div className="circle top-left-circle max-[850px]:hidden">
                <div className="small-underline">2023</div>
                <p>March 1</p>
              </div>
              <div className="circle bottom-right-circle max-[850px]:hidden">
                <img src={locationIcon} alt="location-icon" />
                <p>{language==='hindi'?"धामपुर":"Dhampur"}</p>
              </div>
            </div>
          )
        )}
      </div>
      <AnimatedButton text="VIEW MORE" />
    </div>
  );
}
