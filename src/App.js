import { BrowserRouter ,  Routes, Route } from "react-router-dom";
import './assets/css/App.css'; // Global CSS
import Index from "./Components/Index";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter */}
    <Routes>
      {/* Define the route for Index (Home Page) */}
      <Route path="/" element={<Index />} />
      {/* Define the route for Home */}
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App