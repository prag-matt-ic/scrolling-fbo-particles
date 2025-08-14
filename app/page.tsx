import Canvas from "@/components/FBOParticles";

export default function ScrollingFboParticles() {
  return (
    <main>
      <Canvas />
      {/* HTML sections for scroll triggers */}
      <section id="model" className="h-[120lvh] w-full" />
      <section id="sphere" className="h-[120lvh] w-full" />
      <section id="ring" className="h-[120lvh] w-full" />
    </main>
  );
}
