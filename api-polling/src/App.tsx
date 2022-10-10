import { createTheme, colors, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import ShippingTracker from './components/ShippingTracker';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[500]
    },
    secondary: {
      main: colors.grey[700]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <ShippingTracker />
      </div>
    </ThemeProvider>
  );
}

export default App;
