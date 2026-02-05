const MarqueeStrip = () => {
  return (
    <section className="relative overflow-hidden bg-transparent">
      {/* SLANTED STRIP */}
      <div
        className="
          relative
          w-[120%]
          -ml-[10%]
          bg-gradient-to-r
          from-cyan-300
          via-sky-400
          to-cyan-300
          shadow-[0_20px_60px_rgba(0,247,255,0.45)]
        "
      >
        {/* MARQUEE TRACK */}
        <div
          className="
            flex
            w-max
            animate-marquee
            py-[18px]
          "
        >
          {[
            "BUILD SMARTER DIGITAL SOLUTIONS",
            "WEBZENYX DRIVES INNOVATION",
            "FUTURE-READY WEB & AI SOLUTIONS",
            "BUILD SMARTER DIGITAL SOLUTIONS",
            "WEBZENYX DRIVES INNOVATION",
            "FUTURE-READY WEB & AI SOLUTIONS",
          ].map((text, i) => (
            <span
              key={i}
              className="
                inline-flex
                items-center
                gap-[10px]
                mr-[40px]
                font-extrabold
                text-[clamp(16px,2vw,22px)]
                tracking-wide
                text-[#021018]
                whitespace-nowrap
              "
            >
              ★ {text}
            </span>
          ))}
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes marqueeMove {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marqueeMove 18s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-marquee span {
              margin-right: 24px;
              font-size: 14px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default MarqueeStrip;
