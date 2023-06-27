import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Players from './Components/Players';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Players />
      <Footer />
    </div>
  )
}

export default App;
