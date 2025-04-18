// import { useState } from 'react'
// import './App.css'
// import Home from './Component/Home';
// import Register from './Component/Register';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Home/>
//     <Register/>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Privacy from './Component/Privacy';
import Terms from './Component/Terms';
// import Reg from './Component/Reg';

// import Privacy from './Component/Privacy';
// import Terms from './Component/Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-of-use" element={<Terms />} />
        {/* <Route path="/Reg" element={<Reg />} /> */}
        {/* <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
