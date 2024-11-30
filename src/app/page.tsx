import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const Page = async () => {
  return (
    <main className="flex flex-col h-full">
      <Navbar />
      <article className="p-4">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </article>
      <Footer />
    </main>
  )
}

export default Page