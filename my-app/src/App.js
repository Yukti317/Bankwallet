import './App.css';
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>



      <Router>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='*' element={<Registration />} />
        </Routes>
      </Router>



    </>
  );
}

export default App;
