import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Home } from "./components/Pages/Home";
import { NavBar } from "./components/NavBar";
import { Portfolio } from "./components/Pages/Projects";
import { Skills } from "./components/Pages/Skills";

function App() {
  return (
    <div className="text-white w-full bg-slate-950">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
