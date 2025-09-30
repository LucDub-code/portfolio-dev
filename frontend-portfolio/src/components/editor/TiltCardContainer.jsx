import { InteractiveTiltCard } from "./tilt-card";

export default function TiltCardContainer() {

  const url = "https://res.cloudinary.com/dwblp4axc/image/upload/v1758930364/ld_rxrg5h.png";
  const urlOptimizer = (url) =>
    url
      .replace('/upload/', '/upload/f_webp/q_80/')
      .replace(/\.[a-z0-9]+$/i, '');

  return (
    <div className="w-1/2 flex justify-center items-center max-[800px]:hidden">
      <div className="w-[350px] h-[350px]">
        <InteractiveTiltCard
          image={{
            src: urlOptimizer(url),
            alt: "Photo de Lucas Dubeau",
          }}
          tiltFactor={20}
          hoverScale={1.07}
          shadowIntensity={0.6}
          glareEffect={true}
          glareIntensity={0.4}
        />
      </div>
    </div>
  )
}