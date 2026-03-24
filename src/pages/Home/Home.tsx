import AboutMe from "../../features/AboutMe/AboutMe";
import Classes from "../../features/Classes/Classes";
import Faq from "../../features/Faq/Faq";
import FirstIntro from "../../features/FirstIntro/FirstIntro";
import Hero from "../../features/Hero/Hero";
import MainBar from "../../shared/MainBar/MainBar";
import Wsp from "../../shared/Wsp/Wsp";
// import FirstGallery from "./pages/Main/sections/FirstGallery/FirstGallery";

import "./Home.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <FirstIntro />
      <AboutMe />
      <Classes />
      <Faq />

      <MainBar />
      <Wsp />
    </main>
  );
}
