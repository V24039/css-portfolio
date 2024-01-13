import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { LeftMenu } from "./components/LeftMenu";
import { NavBar } from "./components/NavBar";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <LeftMenu />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
