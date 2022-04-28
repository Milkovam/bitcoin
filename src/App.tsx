import { BitcoinProvider } from "./context/bitcoinContext";
import BitcoinList from "./components/BitcoinList";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <BitcoinProvider>
        <BitcoinList />
      </BitcoinProvider>
    </Container>
  );
}

export default App;
