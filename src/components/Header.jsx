import facebookIcon from "/facebook.svg";
import twitterIcon from "/twitter.svg";
export default function Header() {
  return (
    <section className="text-[.70rem]  min-[520px]:text-lg  p-2 lg:px-16  flex justify-between items-center  bg-primary">
      <p>उत्तर प्रदेश सरकार | GOVERNMENT OF UTTAR PRADESH</p>
      <div className="flex gap-2 min-[800px]:gap-5">
        <img src={facebookIcon} alt="facebook" />
        <img src={twitterIcon} alt="twitter" />
      </div>
    </section>
  );
}
