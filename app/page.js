"use client";

import Image from "next/image";
import { Orbitron } from "next/font/google";
import LetterGlitch from "@/components/LetterGlitch";
import FuzzyText from "@/components/FuzzyText";
import GradientText from "@/components/GradientText";
import CursorAura from "@/components/CursorAura";
import Divider from "@/components/Divider";
import ComingSoonCard from "@/components/ComingSoonCard";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function Home() {
  return (
    <main className={`${orbitron.className}`}>
    <div
      id="home"
      className="relative h-screen flex justify-center items-center flex-col overflow-hidden"
    >
      {/* Glitchy background */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
        <LetterGlitch
          glitchSpeed={400}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* <CursorAura /> */}
      {/* Cursor/touch aura */}

      {/* Main hero text (simple) */}
      <div className="flex items-center flex-col z-10">
        <div
          className="cursor-pointer transition-all duration-200
                     hover:scale-110 hover:-translate-y-1
                     hover:drop-shadow-[0_0_35px_rgba(255,232,120,0.9)]"
        >
          <Image src="/devfest2.svg" width={700} height={100} alt="devfest" />
        </div>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className={`text-[8rem] m-0 select-none`}
        >
          5.0
        </GradientText>
      </div>
    </div>

    <Divider />

    {/* Timeline section */}
    <section id="timeline" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Glitchy background */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
        <div className="h-screen w-screen bg-gray-950 overflow-hidden">

            <div className="relative h-full w-full overflow-hidden bg-gray-900/40 px-8 py-12 backdrop-blur-xl sm:px-12 flex items-center justify-center">

              {/* Subtle interior glow blobs */}
              <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

            </div>
          </div>
      </div>

      {/* Cursor/touch aura */}
      {/* <CursorAura /> */}

      {/* Timeline text styled like home page */}
      <div className="flex items-center flex-col gap-10 z-10">
        <div>

        <FuzzyText
          baseIntensity={0.1}
          hoverIntensity={0.2}
          className={`text-[9rem] font-bold`}
        >
          14 Jan
        </FuzzyText>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className={`text-[8rem] m-0 select-none`}
        >
          2026
        </GradientText>
          </div>
        <div className="text-white text-2xl font-bold">
          MORE DETAILS COMING SOON...
        </div>
      </div>


    </section>
    <Divider />
    <section id="prizes">
      <ComingSoonCard />
    </section>
    <Divider />
    <section id="hackathons">
      <ComingSoonCard />
    </section>
    <Divider />
    <section id="sponsors">
      <ComingSoonCard />
    </section>
    <Divider />
    {/* About section */}
    <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden px-8">
      {/* Glitchy background */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
      
        <div className="h-screen w-screen bg-gray-950 overflow-hidden">

      <div className="relative h-full w-full overflow-hidden bg-gray-900/40 px-8 py-12 backdrop-blur-xl sm:px-12 flex items-center justify-center">
        
        {/* Subtle interior glow blobs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

      </div>
    </div>
      </div>

      {/* Cursor/touch aura */}

      {/* About text in container */}
      <div className="max-w-4xl mx-auto z-10 px-4">
        <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
            DevFest is the flagship technical event of Developers' Society featuring a diverse array of events — hackathon, gamejam, workshop, codegolf and guest speaker. This unites over 3000 students from all around the country, converging both in-person at the BITS Pilani - Goa campus and through nationwide virtual participation. Come, be a part of this unique blend of learning and celebration!
          </p>
        </div>
      </div>
    </section>
    <Divider />
    <section id="team">
      <ComingSoonCard />
    </section>
    <Divider />
    <section id="faqs">
      <ComingSoonCard />
    </section>
    </main>
  );
}


