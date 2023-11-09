import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Signuppage from "./signup";
import Appbar from "./appbar";
import Signinpage from "./signin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Router>
        <Appbar />
        <Routes>
          <Route path="/signin" element={<Signinpage />}></Route>
          <Route path="/signup" element={<Signuppage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
