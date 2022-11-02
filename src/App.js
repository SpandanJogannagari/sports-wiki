import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Soccer from './pages/Soccer';
import Home from './pages/Home';
import F1 from "./pages/F1";
import Soccerleague from "./components/Soccerleague";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/soccer" element={<Soccer />} />
        <Route path="/f1" element={<F1 />} />
        <Route path="/soccer/soccerleague" element={<Soccerleague />} />
      </Routes>
    </Router>
  );
}

export default App;
