import facebookIcon from "/facebook.svg";
import twitterIcon from "/twitter.svg";
export default function Header() {
  return (
    <section className="p-2 lg:px-16  flex justify-between bg-primary">
      <p>उत्तर प्रदेश सरकार | GOVERNMENT OF UTTAR PRADESH</p>
      <div className="flex gap-5">
        <img src={facebookIcon} alt="facebook" />
        <img src={twitterIcon} alt="twitter" />
      </div>
    </section>
  );
}
