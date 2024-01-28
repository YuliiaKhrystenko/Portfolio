import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0">

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
      <section className="snap-start">
        <Projects />
      </section>

      {/* CONTACT ME */}
      <section className="snap-start">
        <ContactMe />
      </section>

    </main>
  );
}
