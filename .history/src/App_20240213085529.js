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
    </div>
    <ScrollToTop
    
    />
    </ThemeContext.Provider>
  );
}

export default App;
