import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Example from "./pages/Example";
import TermsAndConditions from "./pages/Terms";
import Upload from "./pages/Upload.jsx";
import AboutUs from "./pages/About.jsx";
import FAQs from "./pages/FAQs.jsx";
import Portfolio from "./pages/Portfolio.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="" Component={Home} />
          <Route path="example" Component={Example} />
          <Route path="upload" Component={Upload} />
          <Route path="terms" Component={TermsAndConditions} />
          <Route path="about" Component={AboutUs} />
          <Route path="faqs" Component={FAQs} />
          <Route path="portfolio" Component={Portfolio}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
