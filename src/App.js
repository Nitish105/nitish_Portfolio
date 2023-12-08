import { useContext } from "react";

import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Footer from "./components/footer/Footer";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
