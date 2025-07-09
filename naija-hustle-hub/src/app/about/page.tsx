"use client";

import { useState, useEffect } from "react";
import { hustles } from "@/lib/hustles";
import { Mail, Phone, MapPin, ArrowLeft, Menu, X } from "lucide-react";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [navOpen, setNavOpen] = useState(false);

  const filteredHustles = hustles.filter((hustle) => {
    const matchesSearch =
      hustle.title.toLowerCase().includes(search.toLowerCase()) ||
      hustle.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || hustle.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const lastViewedId = sessionStorage.getItem("lastViewedHustle");
    if (lastViewedId) {
      const id = parseInt(lastViewedId, 10);
      const requiredCount = Math.ceil(id / 4) * 4;
      setVisibleCount(requiredCount);

      setTimeout(() => {
        const element = document.getElementById(`hustle-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        sessionStorage.removeItem("lastViewedHustle");
      }, 500);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-['Times_New_Roman']">
      <header className="bg-[#006b3c] fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center relative">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden text-white absolute right-4"
            aria-label="Toggle Menu"
          >
            {navOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden md:flex gap-10 justify-center items-center text-white font-extrabold text-lg md:text-2xl">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact </a>
             <a href="/privacy-policy" className="hover:underline">Privacy Policy </a>
               <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
            
          </nav>
        </div>

        {navOpen && (
          <div className="md:hidden bg-[#006b3c] px-4 pb-6 pt-4 flex flex-col items-center space-y-6 text-white font-extrabold text-2xl">
            <a href="/" onClick={() => setNavOpen(false)} className="hover:underline">Home</a>
            <a href="/about" onClick={() => setNavOpen(false)} className="hover:underline">About</a>
            <a href="/contact" onClick={() => setNavOpen(false)} className="hover:underline">Contact </a>
            <a href="/privacy-policy" onClick={() => setNavOpen(false)} className="hover:underline">Privacy Policy  </a>
            <a href="/terms-of-use" onClick={() => setNavOpen(false)} className="hover:underline">Terms of Use</a>
          </div>
        )}
      </header>

  <section className="max-w-3xl mx-auto mt-24 px-4 text-gray-800">
  <h1 className="text-4xl font-bold text-center text-[#008753] mb-8">
    About Us
  </h1>

  <p className="text-center text-gray-600 mb-12 leading-relaxed text-[16px] md:text-[18px]">
    Naija Hustle Plug is Nigeria’s 
    trusted platform for discovering real, practical,
     and profitable ways to make money  online and offline. We are committed to 
     helping everyday Nigerians build income, gain clarity, and unlock their financial potential.
  </p>

  <div className="space-y-8 text-[16px] md:text-[17px] leading-relaxed text-gray-700">
    <div>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">What We Do</h2>
      <p>
        We research and simplify legitimate side hustles
          from mobile apps and digital products to freelance work, 
          affiliate programs, and reselling. Our content includes
           step-by-step guides, practical tools, and honest
            advice tailored for Nigerians who want to earn more with what they already have.
      </p>
      <p className="mt-4">
        Our focus is on clarity and action. Every hustle listed is something you can start today 
         with or without capital and we explain exactly how to do it.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-semibold text-[#008753] mb-2">Meet the Founder</h2>
      <p>
        I'm <strong>Samson Iyida</strong>, a digital hustler and the creator of Naija Hustle Plug.
         I started this platform from experience  trying out legit hustles,
          learning what works, and sharing those lessons with others like me who are
           tired of guesswork and fake promises.
      </p>
      <p className="mt-4">
        I understand the hustle from being broke to finding ways to earn a
         steady income online. This platform is my way of giving back,
          helping you skip the trial-and-error and go straight to results.
           You don’t need to be a tech genius or have a big budget just the right mindset and the right guide.
      </p>
      <p className="mt-4 font-semibold text-[#008753]">
        Let’s move from broke to boss together.
      </p>
    </div>
  </div>
</section>





{/* FOOTER */}
<footer className="bg-[#008753] text-white py-12 px-6 mt-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
    {/* About */}
<div className="w-full sm:w-auto">
  <h2 className="text-1xl font-extrabold text-white mb-4 uppercase text-left">Naija Hustle Plug</h2>
  <p className="text-lg font-medium text-gray-100 leading-relaxed flex items-start gap-2 text-left font-['Times_New_Roman']">
    
    Discover daily legit online and offline hustles in Nigeria.
     Updated regularly with real ideas to help you earn more.
     
  </p>
</div>

{/* Quick Links */}
<div className="w-full sm:w-auto">
  <h3 className="text-xl font-bold text-white mb-4 uppercase text-left">Quick Links</h3>
  <ul className="space-y-3 text-base font-semibold font-['Times_New_Roman']">
    <li>
      <a href="/" className="hover:text-green-100 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="#E9C2AF" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
        </svg>
        Home
      </a>
    </li>

    <li>
      <a href="" className="hover:text-green-100 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="#A78BFA" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path d="M14 13c0-2.21-4.418-3-6-3s-6 .79-6 3v1h12v-1z"/>
  <path d="M11.5 6.5a.5.5 0 0 1 .5.5v4.793l.354.353a.5.5 0 0 1-.708.708L11 11.207V7a.5.5 0 0 1 .5-.5z"/>
  <circle cx="11.5" cy="5" r=".5"/>
</svg>

        About 
      </a>
    </li>

    

   <li>
  <a href="/contact" className="hover:text-green-100 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F59E0B" viewBox="0 0 16 16">
      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
    </svg>
    Contact 
  </a>
</li>

<li>
      <a href="/privacy-policy" className="hover:text-green-100 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="#38BDF8" viewBox="0 0 24 24">
  <path d="M12 1.5l8.5 4v5.56c0 5.25-3.52 10.23-8.5 11.44-4.98-1.21-8.5-6.19-8.5-11.44V5.5L12 1.5z" />
  <path d="M10.29 13.29l-2.3-2.3-1.41 1.41 3.71 3.71 7.71-7.71-1.41-1.41-6.3 6.3z" fill="#fff"/>
</svg>

       Privacy Policy
      </a>
    </li>

<li>
  <a href="/terms-of-use" className="hover:text-violet-600 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="#F43F5E" viewBox="0 0 24 24">
      <path d="M4 6H20V8H4zM4 10H20V12H4zM4 14H14V16H4z" />
    </svg>
    Terms of Use
  </a>
</li>



  </ul>
</div>

{/* Socials */}
<div className="w-full sm:w-auto">
  <h3 className="text-xl font-bold text-white mb-4 uppercase text-left">Follow Us</h3>
  <ul className="space-y-3 text-base font-semibold font-['Times_New_Roman']">
   <li>
  <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-green-100 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="#25D366" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.548 7.548 0 0 0 8.015 0C3.594 0 .064 3.523.063 7.938c0 1.396.366 2.753 1.06 3.95L.001 16l4.199-1.102a7.936 7.936 0 0 0 3.807.976h.003c4.42 0 7.949-3.523 7.949-7.938a7.85 7.85 0 0 0-2.358-5.61zM8.01 14.506a6.572 6.572 0 0 1-3.345-.917l-.24-.143-2.491.653.664-2.43-.155-.25a6.46 6.46 0 0 1-.995-3.472c0-3.583 2.926-6.5 6.525-6.5a6.47 6.47 0 0 1 4.615 1.915 6.487 6.487 0 0 1 1.91 4.607c0 3.584-2.926 6.501-6.523 6.501zm3.58-4.89c-.197-.099-1.17-.578-1.352-.643-.181-.066-.314-.099-.446.1-.132.198-.51.644-.625.776-.115.132-.231.149-.428.05a5.34 5.34 0 0 1-1.576-.974 5.79 5.79 0 0 1-1.072-1.333c-.113-.198-.012-.305.085-.403.087-.086.198-.223.297-.334.099-.111.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.446-1.074-.611-1.469-.16-.384-.323-.331-.446-.337l-.38-.007a.72.72 0 0 0-.527.248c-.182.198-.692.678-.692 1.652 0 .974.709 1.912.808 2.045.099.132 1.395 2.129 3.384 2.985.474.204.844.325 1.133.416.476.151.91.13 1.252.079.382-.056 1.17-.478 1.336-.94.165-.462.165-.858.116-.94-.05-.082-.182-.132-.38-.231z"/>
    </svg>
    WhatsApp
  </a>
</li>

    <li><a href="#" className="hover:text-green-100 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1877F2"  viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg> Facebook
    </a></li>
    <li><a href="#" className="hover:text-green-100 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg> Twitter
    </a></li>
    <li><a href="#" className="hover:text-green-100 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E1306C"  viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg> Instagram
    </a></li>
  </ul>
</div>

    </div>

  <div className="mt-12 border-t border-green-200 pt-6 text-center text-sm text-green-100">
    © {new Date().getFullYear()} Naija Hustle Plug. All rights reserved.
  </div>
</footer>




    </main>
  );
}
