import { useEffect, useState } from "react";

export default function ComingSoon() {
  const targetDate = new Date("2026-06-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#B7C3CF] text-[#0B1238]">

      {/* Logo */}
      <div className="mb-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-2 border-[#0B1238] flex items-center justify-center text-2xl font-bold">
          JW
        </div>

        <p className="mt-4 text-sm tracking-wide">
          A.S Grewal (Aman)
        </p>

        <h1 className="text-xl font-semibold">
          JW Global Group
        </h1>

        <p className="text-sm opacity-80">
          Growth with Responsibility
        </p>
      </div>

      {/* Divider */}
      <div className="w-24 h-[1px] bg-[#0B1238] mb-10 opacity-60"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        Our Website is Coming Soon
      </h2>

      <p className="max-w-lg text-lg opacity-80 mb-10">
        We are building something great. Stay tuned for updates.
      </p>

      {/* Countdown */}
      <div className="flex gap-6 mb-12 text-center">

        <div>
          <p className="text-3xl font-semibold">{timeLeft.days}</p>
          <p className="text-sm opacity-70">Days</p>
        </div>

        <div>
          <p className="text-3xl font-semibold">{timeLeft.hours}</p>
          <p className="text-sm opacity-70">Hours</p>
        </div>

        <div>
          <p className="text-3xl font-semibold">{timeLeft.minutes}</p>
          <p className="text-sm opacity-70">Minutes</p>
        </div>

        <div>
          <p className="text-3xl font-semibold">{timeLeft.seconds}</p>
          <p className="text-sm opacity-70">Seconds</p>
        </div>

      </div>

      {/* Email Subscription */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-16">

        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md border border-[#0B1238]/30 bg-transparent placeholder-[#0B1238]/60 outline-none focus:ring-2 focus:ring-[#0B1238]"
        />

        <button className="px-6 py-3 bg-[#0B1238] text-[#B7C3CF] rounded-md hover:bg-[#070d2e] transition">
          Notify Me
        </button>

      </div>

      {/* Loading dots */}
      <div className="flex gap-2 mb-12">
        <span className="w-2 h-2 bg-[#0B1238] rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-[#0B1238] rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-[#0B1238] rounded-full animate-bounce delay-300"></span>
      </div>

      {/* Footer */}
      <footer className="text-sm opacity-70">

        <p>contact@jwglobalgroup.com</p>

        <p className="mt-2">
          © {new Date().getFullYear()} JW Global Group
        </p>

      </footer>

    </div>
  );
}