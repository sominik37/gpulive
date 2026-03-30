import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Reserve from "./pages/Reserve";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import AIClusters from "./pages/AIClusters";
import Inference from "./pages/Inference";
import DataCenter from "./pages/DataCenter";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/ai-clusters" element={<AIClusters />} />
          <Route path="solutions/inference" element={<Inference />} />
          <Route path="solutions/datacenter" element={<DataCenter />} />
          <Route path="solutions/research" element={<Research />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="*" element={<div className="p-12 text-center text-[var(--color-muted)]">Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
