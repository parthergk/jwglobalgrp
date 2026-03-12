import About from "@/components/home/About";
import DivisionsStrip from "@/components/home/DivisionsStrip";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="w-full bg-background space-y-20">
      <Hero />
      <DivisionsStrip/>
      <About/>
    </div>
  );
}
