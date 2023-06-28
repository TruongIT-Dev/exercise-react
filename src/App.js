import './App.css';
import Navigation from './Components/Navigation';
import Players from './Components/Players';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Detail from './Components/Detail';
import PlayersPresentation from './Components/PlayersPresentation';



import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Players />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        {/* <Route path='/contact' element={<Contact />}></Route> */}
      </Routes>
      <Footer />
    </div>
  )
}


export default App;
