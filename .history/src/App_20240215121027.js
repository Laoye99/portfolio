import './App.css';
import { createContext, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Navbar from './components/SideNav/Navbar';
import Sidebar from './components/SideNav/Sidebar';
import About from './components/About/About';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
    <div id={theme}>
    <Navbar/>
    <Sidebar changeTheme={changeTheme} theme={theme}/>
    <About/>
    </div>
    <ScrollToTop
    top="200"
    smooth
    height="20"
    width="20"
    color="white"
    style={{ borderRadius: "90px ", backgroundColor: "#000000" }}
    />
    </ThemeContext.Provider>
  );
}

export default App;
