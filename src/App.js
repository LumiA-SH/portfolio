import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Expertise } from "./components/sections/Expertise";
import { Projects } from "./components/sections/Projects";
import { Architecture } from "./components/sections/Architecture";
import { Stack } from "./components/sections/Stack";
import { Process } from "./components/sections/Process";
import { Contact } from "./components/sections/Contact";
import { Skills } from "./components/sections/Skills";

export default function App() {
  return (
      <div className="bg-stage">
        <Header />
        <main>
          <Hero />
          <Expertise />
            <Skills />
            <Projects />
          <Architecture />
          <Stack />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}
