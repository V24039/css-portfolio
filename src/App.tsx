import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Home } from "./components/Pages/Home";
import { NavBar } from "./components/NavBar";
import { Portfolio } from "./components/Pages/Projects";
import { Skills } from "./components/Pages/Skills";

function App() {
  return (
    <div className="text-black w-full bg-slate-300 dark:bg-slate-950 dark:text-white">
      <NavBar />
      <div className="px-3">
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
