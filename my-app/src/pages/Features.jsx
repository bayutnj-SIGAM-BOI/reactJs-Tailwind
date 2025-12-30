import { useRef, useState } from "react";
import Houston from "../assets/Houston.png";
import WinningAlianceCompetition from "../assets/WinningAlianceCompetition.jpg";

export const BentoTilt = ({ children, className }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <img
        src={src}
        alt=""
        className="absolute left-0 top-0 size-full object-cover object-center brightness-50"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="text-1xl md:text-2xl uppercase font-bold">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="Achievement" className="bg-black-10 pb-52">
      <div className="mx-auto px-3 md: px-10">
        <div className="px-5 py-32">
          <p className="text-lg text-white">Highlights of Our Journey</p>
          <p className="text-blue-50 text-lg opacity-50 max-w-md">
            The moments that made us go ‘woah’ — the breakthroughs, the
            surprises, and all the little victories that kept our robot (and our
            team) moving forward.
          </p>
        </div>

        <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-[1.5rem] border border-white/20 md:h-[65vh]">
          <BentoCard title={<>Go2steam To Houston</>} src={Houston} />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="border border-white/20 row-span-1 md:col-span-1 overflow-hidden rounded-[1rem] md: row-span-2">
            <BentoCard
              title={<>Winning Alliance Competition</>}
              src={WinningAlianceCompetition}
            />
          </BentoTilt>

          <BentoTilt className="border border-white/20 row-span-1 ms-32 overflow-hidden rounded-[1rem] md:col-span-1 md:ms-0">
            <BentoCard title={<>Agus</>} />
          </BentoTilt>

          <BentoTilt className="border border-white/20 row-span-1 ms-32 overflow-hidden rounded-[1rem] md:col-span-1 md:ms-0">
            <BentoCard title={<>APAYA</>} />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
