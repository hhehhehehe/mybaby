import React, { useState, useRef } from 'react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  const message = `Loving you and feeling loved by you were the best feelings I've ever had. The best years of my life were by far with you. You always put a smile on my face nobody else ever could, and I'll always be grateful for that.

I hope you heal well and as fast as possible. Times without you have been very hard and you'll always be missed. No matter how close or distant we grow after all of this, I want you to know I'll always be supporting you no matter what.

You have a bright future ahead of you, my smart pretty girl.

I love you so much, Jizzy. <3`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-screen w-full overflow-hidden relative cursor-none"
      style={{
        backgroundColor: '#6b6b6b',
      }}
    >
      {/* Flashlight gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-100"
        style={{
          background: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, 
            transparent 0%, 
            transparent 40%,
            rgba(107, 107, 107, 0.85) 70%,
            #6b6b6b 100%
          )`,
        }}
      />

      {/* Pink glow effect */}
      <div
        className="pointer-events-none fixed z-20 rounded-full blur-3xl opacity-30"
        style={{
          left: mousePos.x - 125,
          top: mousePos.y - 125,
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(255, 105, 180, 0.6) 0%, rgba(255, 182, 193, 0.3) 50%, transparent 70%)',
        }}
      />

      {/* Custom cursor flashlight */}
      <div
        className="pointer-events-none fixed z-30 rounded-full"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          width: 24,
          height: 24,
          background: 'radial-gradient(circle, rgba(255, 182, 193, 0.9) 0%, rgba(255, 105, 180, 0.5) 50%, transparent 70%)',
          boxShadow: '0 0 20px 10px rgba(255, 105, 180, 0.3)',
        }}
      />

      {/* Text content */}
      <div className="relative z-0 flex items-center justify-center h-full p-4 md:p-8 lg:p-12">
        <div className="max-w-2xl mx-auto">
          <p
            className="text-base md:text-lg lg:text-xl text-center font-light whitespace-pre-line"
            style={{
              color: '#1a1a1a',
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              letterSpacing: '0.02em',
              lineHeight: '1.8',
            }}
          >
            {message}
          </p>
        </div>
      </div>

      {/* Bouquet image in bottom left */}
      <div className="fixed bottom-8 left-8 z-40">
        <p
          className="text-lg md:text-xl font-bold mb-2"
          style={{
            color: '#FFB6C1',
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
            textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 2px 2px 3px rgba(0,0,0,0.1)',
          }}
        >
          The prettiest bouquet &lt;3
        </p>  
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a40fab550045f9ca20819/af41d37cc_image.png"
          alt="Bouquet"
          className="w-48 md:w-64 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}