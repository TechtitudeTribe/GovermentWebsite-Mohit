import { useContext } from "react";
import facebookIcon from "../assets/icons/facebook.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import { LanguageContext } from "../contexts/LanguageContext";
export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <section className="text-[.70rem]  min-[520px]:text-lg  p-2 lg:px-16  flex justify-between items-center  bg-primary">
      <p>उत्तर प्रदेश सरकार | GOVERNMENT OF UTTAR PRADESH</p>
      <div className="lg:flex gap-4 items-center">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mb-2 rounded-xl  p-1 pr-0 text-center bg-transparent border"
        >
          <option value="hindi">हिंदी</option>
          <option value="english">English</option>
        </select>
        <div className="flex gap-2 min-[800px]:gap-5">
          <img src={facebookIcon} alt="facebook" />
          <img src={twitterIcon} alt="twitter" />
          <div>
          <p>Tollfree</p>
          <p>1800 453 672</p>
          </div>
        </div>
      </div>
    </section>
  );
}
