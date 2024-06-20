
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Category from "./pages/Category";

function App() {
  

  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path = "/get-started" element={<Category /> } />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
