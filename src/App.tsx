import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResultsSummaryComponent from "./Components/ResultsSummaryComponent/ResultsSummaryComponent";
import "./styles.css";

const theme = createTheme({
  typography: {
    fontFamily: "HankenGrotesk",
    body1: {
      fontSize: 18,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <ResultsSummaryComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
