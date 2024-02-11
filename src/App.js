// import './App.css';
import Chart from './Chart/Chart';
import Design from './design';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (


    <>
       <Router>
    <div>
      {/* Routes component contains all your route definitions */}
      <Routes>
        {/* Route component defines a route and its corresponding component */}
        <Route exact path="/" element={<Design />} />
        <Route path="/chart" element={<Chart/>}/>
      </Routes>
    </div>
  </Router>
   </>



   
  );
}

export default App;
