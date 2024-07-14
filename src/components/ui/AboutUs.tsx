import "../../assets/css/AboutPage.css";
import ContactInfo from "./ContactInfo";
import Mission from "./Mission";
import OurTeam from "./OurTeam";

export const AboutUs = () => {
  return (
    <>
      <div className="head">
        <h1 className="text-black text-4xl font-bold">About us</h1>
        <p className="subtitle">
          We are specialsts in web development. Creativity and fun are our
          ingredients for awesome work.
        </p>
      </div>
      <Mission/>
      <ContactInfo />
      <OurTeam/>
    </>
  );
};
