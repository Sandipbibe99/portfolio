import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './pages/Home/Portfolio';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Portfolio/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
