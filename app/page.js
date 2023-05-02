import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import Portfolio from "./Components/Portfolio";
import Timeline from "./Components/Timeline";
import Other from "./Components/Other";

export default function Home() {
  return (
    <div className='min-h-screen bg-orange-100/95 font-inter text-stone-900 transition-colors duration-500 dark:bg-black dark:text-stone-300'>
      <Other />
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
    </div>
  );
}
