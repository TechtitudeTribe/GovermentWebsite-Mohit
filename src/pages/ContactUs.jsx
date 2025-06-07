import leafsDesign from "../assets/icons/leafs-design.svg";
import humanIcon from "../assets/icons/human-icon.svg";
import telephoneIcon from "../assets/icons/telephone-icon.svg";
import mailIcon from "../assets/icons/mail-icon.svg";
import messageIcon from "../assets/icons/message-icon.svg";
import AnimatedButton from "../components/AnimatedButton";
export default function ContactUs() {
  return (
    <div className="min-[800px]:grid grid-cols-2 gap-20  p-6 min-[800px]:p-20 bg-mid_gray">
      <section id="contactus-left">
        <div className="corner-border my-4 ">
          <div className="top-left -top-4 -left-4"></div>
          <div className="bottom-right -bottom-4 -right-4"></div>
          <div className="wrapper bg-white p-8 rounded-tr-[75px] rounded-bl-[75px] ">
            <div className="flex items-center gap-4 p-4 mb-6">
              <img src={leafsDesign} alt="leaf-design" className="h-10" />
              <h4 className="gradient-border-left text-5xl font-light">
                Get In Touch
              </h4>
            </div>
            <div className="flex gap-4 my-2">
              <p className="w-20">Telephone</p>
              <p className="font-medium">:</p>
              <p className="font-medium"> 052227 41191</p>
            </div>
            <div className="flex gap-4 my-2">
              <p className="w-20">Toll Free</p>
              <p className="font-medium">:</p>
              <p className="font-medium"> 1800 453 672</p>
            </div>
            <div className="flex gap-4 my-2">
              <p className="w-20">Mail</p>
              <p className="font-medium">:</p>
              <p className="font-medium"> officilamai.gov.in</p>
            </div>
            <div className="flex gap-4 my-2">
              <p className="w-20">Address</p>
              <p className="font-medium">:</p>
              <p className="font-medium">
                {" "}
                Building Address, City Name, Uttar Pradesh - 226016
              </p>
            </div>
          </div>
        </div>
        <div className="corner-border my-4 mt-20">
          <div className="top-left -top-4 -left-4"></div>
          <div className="bottom-right -bottom-4 -right-4"></div>
          <div className="wrapper bg-white p-8 rounded-tr-[75px] rounded-bl-[75px] ">
            <div className="flex items-center gap-4 p-4 mb-6">
              <img src={leafsDesign} alt="leaf-design" className="h-10" />
              <h4 className="gradient-border-left text-5xl font-light">
                Join Us On
              </h4>
            </div>
            <div className="flex gap-4 my-2">
              <p className="w-20">Telephone</p>
              <p className="font-medium">:</p>
              <p className="font-medium"> 052227 41191</p>
            </div>
            <div className="flex gap-4 my-2">
              <p className="w-20">Toll Free</p>
              <p className="font-medium">:</p>
              <p className="font-medium"> 1800 453 672</p>
            </div>
            <div className="flex gap-4 my-2">
              <p className="w-20">Mail</p>
              <p className="font-medium">:</p>
              <p className="font-medium"> officilamai.gov.in</p>
            </div>
            <div className="flex gap-4 my-2">
              <p className="w-20">Address</p>
              <p className="font-medium">:</p>
              <p className="font-medium">
                {" "}
                Building Address, City Name, Uttar Pradesh - 226016
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contactus-right">
        <h3 className="gradient-border-center pb-4 w-fit text-5xl font-light m-auto">
          Request Contact
        </h3>
        <form>
          <div>
            <p className="w-fit font-extralight my-2">NAME</p>
            <div className=" input-border relative">
              <div className="flex bg-mid_gray overflow-hidden">
                <img
                  src={humanIcon}
                  alt="human-icon"
                  className="bg-primary p-2 px-4"
                />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-transparent p-5  placeholder:text-black w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="w-fit font-extralight my-2">Contact Number</p>
            <div className=" input-border relative">
              <div className="flex bg-mid_gray overflow-hidden">
                <img
                  src={telephoneIcon}
                  alt="telephone-icon"
                  className="bg-primary p-2 px-4"
                />
                <input
                  type="text"
                  placeholder="Enter your contact number"
                  className="bg-transparent p-5  placeholder:text-black w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="w-fit font-extralight my-2">Mail</p>
            <div className=" input-border relative">
              <div className="flex bg-mid_gray overflow-hidden">
                <img
                  src={mailIcon}
                  alt="mail-icon"
                  className="bg-primary p-2 px-4"
                />
                <input
                  type="text"
                  placeholder="Enter your mail id"
                  className="bg-transparent p-5  placeholder:text-black w-full"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="w-fit font-extralight my-2">Message</p>
            <div className=" input-border relative">
              <div className="flex bg-mid_gray overflow-hidden ">
                <img
                  src={messageIcon}
                  alt="message-icon"
                  className="bg-primary p-2 px-4 pb-32"
                />
                <input
                  type="text"
                  placeholder="Enter your message here"
                  className="bg-transparent p-5   placeholder:text-black w-full"
                />
              </div>
            </div>
          </div>
          <AnimatedButton text="SUBMIT NOW" />
        </form>
      </section>
    </div>
  );
}
