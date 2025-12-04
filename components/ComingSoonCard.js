"use client";
import BlurText from "./BlurText";

const ComingSoonCard = () => {
  return (
    // Outer container: Sets the base dark background and dimensions
    <div className="h-screen w-screen bg-gray-950 overflow-hidden">

      {/* Full Screen Frosted Layer 
        - Removed: max-w-lg, rounded-2xl, border, shadow
        - Added: h-full, w-full, flex items-center justify-center (to center text)
      */}
      <div className="relative h-full w-full overflow-hidden bg-gray-900/40 px-8 py-12 backdrop-blur-xl sm:px-12 flex items-center justify-center">

        {/* Subtle interior glow blobs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

        {/* Content Container (Centered by parent flex) */}
        <div className="relative text-center z-10 max-w-2xl mx-auto flex justify-center flex-col items-center">
            <BlurText
              text="COMING SOON..."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center"
            />

          <p className="mt-6 text-lg text-gray-300">
            We are currently polishing the pixels. Check back soon for the big reveal.
          </p>

        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;