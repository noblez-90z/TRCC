import About from "./About";
import Action from "./Action";
import Community from "./Community";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Objective from "./Objective";
import Partners from "./Partners";
import Project from "./Projects";
import Purpose from "./Purpose";

const Homepage = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Objective />
      <Project />
      <Purpose />
      <Partners />
      <Action />
      <Community />
      <Footer />
    </div>
  );
};

export default Homepage;
