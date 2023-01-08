import './App.css';
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from './components/History';



function App() {
  return (
    <>



      <Router>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='*' element={<Registration />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </Router>



    </>
  );
}

export default App;
