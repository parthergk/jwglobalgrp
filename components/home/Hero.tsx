import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-150 flex items-end px-10">  
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.png"
          alt="Business meeting"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#0B1238]/35 -z-10"></div>

        <div className="max-w-2xl text-white mb-20 lg:mb-16">
          
          <h1 className="text-5xl lg:text-6xl font-medium lg:font-normal leading-tight">
            Building Businesses. <br />
            Creating Opportunities.
          </h1>

          <p className="max-w-xl mt-6 text-base text-gray-200 leading-relaxed">
            A diversified business group building sustainable ventures and
            creating global opportunities across multiple industries.
          </p>

          <div className="flex items-center gap-6 mt-8">
            
            <button className="bg-white text-[#0B1238] px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition">
              Explore Our Businesses
            </button>

            <button className="text-white font-medium flex items-center gap-2 hover:opacity-80 transition">
              Contact Us
             <MoveUpRight className=" h-4 w-4 text-white"/>
            </button>

          </div>

        </div>
    </section>
  );
}