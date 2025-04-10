import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Home } from "./components/Pages/Home";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Pages/Projects";
import { Skills } from "./components/Pages/Skills";
import Experience from "./components/Pages/Experience/Experience";

function App() {
  return (
    <div className="text-black w-full min-h-screen bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-950 dark:to-slate-900 dark:text-white">
      <NavBar />
      <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-7xl scroll-smooth">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
