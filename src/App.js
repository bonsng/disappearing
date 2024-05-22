import MainPage from "./pages/MainPage";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./Components/Theme";
import {GlobalStyles} from "./GlobalStyles";
import Toggle from "./Components/Toggle";

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <MainPage />
    </ThemeProvider>

  );
}

export default App;
