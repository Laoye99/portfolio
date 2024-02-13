import './App.css';
import { createContext, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
    <div id={theme}>
    <Nav
    </div>
    <ScrollToTop
    top="200"
    smooth
    height="20"
    width="20"
    color="white"
    style={{ borderRadius: "90px ", backgroundColor: "#38004c" }}
    />
    </ThemeContext.Provider>
  );
}

export default App;
