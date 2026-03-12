import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import CoreValues from "@/components/home/CoreValues";
import Divisions from "@/components/home/Divisions";
import DivisionsStrip from "@/components/home/DivisionsStrip";
import Hero from "@/components/home/Hero";
import Leadership from "@/components/home/Leadership";
import Partnership from "@/components/home/Partnership";
import Purpose from "@/components/home/Purpose";

export default function Home() {
  return (
    <div className="w-full bg-background space-y-20">
      <Hero />
      <DivisionsStrip/>
      <About/>
      <CoreValues/>
      <Divisions/>
      <Leadership/>
      <Partnership/>
      <Purpose/>
      <Contact/>
    </div>
  );
}
