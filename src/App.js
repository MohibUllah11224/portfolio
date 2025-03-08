
import './App.css';
import JOBS from './Jobs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './H'; // Assuming your Home component is in 'H.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JOBS />} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
