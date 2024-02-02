import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ff0f80]/80">

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

      {/* <Link href="#home">
        <FaHome className="sticky flex items-center justify-center bottom-5 w-full cursor-pointer transition text-gray-400 hover:text-[#a252c8]/80 text-xl"/>
      </Link> */}

      <Footer />

    </main>
  );
}
