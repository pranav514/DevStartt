
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Libraries from "./pages/Libraries";
import BestPractices from "./pages/BestPractices";
import About from "./pages/About";
import Tutorial from "./pages/Tutorial";
function App() {
  

  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path = "/get-started" element={<Category /> } />
          <Route path = "/yt-tutorial" element={<Tutorial /> } />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/best-practices" element={<BestPractices />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
