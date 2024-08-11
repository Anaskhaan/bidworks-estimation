import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Example from "./pages/Example";
import Uppload from "./pages/Uppload";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="" Component={Home} />
          <Route path="example" Component={Example} />
          <Route path="upload" Component={Uppload} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
