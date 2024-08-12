import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Example from "./pages/Example";
import TermsAndConditions from "./pages/Terms";
import Upload from "./pages/Upload.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="" Component={Home} />
          <Route path="example" Component={Example} />
          <Route path="upload" Component={Upload} />
          <Route path="terms" Component={TermsAndConditions} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
