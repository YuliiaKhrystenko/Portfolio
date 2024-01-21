import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">

      {/* HERO */}
      <section className="snap-start">
        <Hero />
      </section>

      {/* ABOUT */}
      <section className="snap-center">
        <About />
      </section>

      {/* SKILLS */}
      <section className="snap-start">
        <Skills />
      </section>

      {/* PROJECTS */}

      {/* CONTACT ME */}

    </main>
  );
}
