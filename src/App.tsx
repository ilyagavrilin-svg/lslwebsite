import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "@/components/Layout";
import Home from "@/pages/Home";

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-[#21304A]">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
