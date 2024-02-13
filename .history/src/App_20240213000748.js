import './App.css';
import { createContext, useState } from 'react';
import Scr

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
    </ThemeContext.Provider>
  );
}

export default App;
