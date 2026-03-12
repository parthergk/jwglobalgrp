import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative z-10 w-full min-h-screen flex items-end px-4 sm:px-8 lg:px-10 pt-28 lg:pt-0">

      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/hero.png"
          alt="Business meeting"
          fill
          priority
          className="object-cover object-[65%_center] lg:object-center"
        />
      </div>

      <div className="absolute inset-0 bg-primary/35 -z-10"></div>

      <div className="max-w-xl lg:max-w-2xl text-white mb-32 lg:mb-16">

        <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-medium lg:font-normal leading-tight">
          Building  Businesses. <br />
          Creating Opportunities.
        </h1>

        <p className=" mt-4 sm:mt-6 text-sm sm:text-base text-gray-200 leading-relaxed">
          A diversified business group building sustainable ventures and
          creating global opportunities across multiple industries.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-5 sm:mt-8">

          <Link
            href="/divisions"
            className="bg-white text-primary px-4 py-1.5 sm:py-2 rounded-md font-medium hover:bg-gray-200 transition w-fit"
          >
            Explore Our Businesses
          </Link>

          <Link
            href="/contact"
            className=" hidden text-white font-medium sm:flex items-center gap-2 hover:opacity-80 transition w-fit"
          >
            Contact Us
            <MoveUpRight className="h-4 w-4 text-white" />
          </Link>

        </div>

      </div>

    </section>
  );
}