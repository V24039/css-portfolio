import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { LeftMenu } from "./components/LeftMenu";
import { NavBar } from "./components/NavBar";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="text-white w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
      <NavBar />
      <Home />
      <LeftMenu />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
