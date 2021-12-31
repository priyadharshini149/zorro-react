import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Investor from './investor';
import Join from './join';
import Footer from './footer';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <body>
        <Container>

          <Home />
          <Investor />
          <Join />
          <Footer />

        </Container>
      </body>
    </div>
  );
}

export default App;
