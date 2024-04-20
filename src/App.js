import "./App.css";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Homecontent from "./components/Homecontent";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Rawmaterial from "./components/Rawmaterial";
import { useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign from "./components/Sign";
import Privacy from "./components/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import Terms from "./components/Terms";
import Return from "./components/Return";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Hoodies from "./components/Hoodies";
import Sweatshirts from "./components/Sweatshirts";
import Mugs from "./components/Mugs";
import Zipper from "./components/Zipper";
import Mousepads from "./components/Mousepads";
import Caps from "./components/Caps";
import Tshirt from "./components/Tshirt";
import Polo from "./components/Polo";
import Over from "./components/Over";
import Orders from "./components/Orders";
import Update from "./components/Update";
import LoadingBar from 'react-top-loading-bar'
import TshirtDetail from "./components/TshirtDetail";
import PoloDetails from "./components/PoloDetails";
import OverDetails from "./components/OverDetails";
import HoodieDetails from "./components/HoodieDetails";
import SweatDetails from "./components/SweatDetails";
import MugsDetails from "./components/MugsDetails";
import ZipperDetails from "./components/ZipperDetails";
import MouseDetails from "./components/MouseDetails";
import CapDetails from "./components/CapDetails";
import { CartProvider } from './CartContext';
import Checkout from "./components/Checkout";
import Buy from "./components/Buy";

function App() {
  const [mode, setmode] = useState("light"); //Whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(0);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1f2937";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
    <CartProvider>
      <Router>
      <LoadingBar color='#f11946' progress={progress}/>
        <Navbar mode={mode} setProgress={setProgress} showAlert={showAlert} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
        <Route path="/" element={
          <>
          <ScrollToTop>
          <Homecontent mode={mode} toggleMode={toggleMode} />
          <Rawmaterial mode={mode} toggleMode={toggleMode} />
          </ScrollToTop>
          </>
          } /> 
        <Route exact path="/login" element={<Login showAlert={showAlert} setProgress={setProgress} mode={mode} toggleMode={toggleMode} />} />
        <Route exact path="/signup" element={<Sign showAlert={showAlert} setProgress={setProgress} mode={mode} toggleMode={toggleMode}/>} />
        <Route exact path="/privacy" element={
          <ScrollToTop>
            <Privacy mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
        <Route exact path="/terms" element={
          <ScrollToTop>
            <Terms mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
        <Route exact path="/return" element={
          <ScrollToTop>
            <Return mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
        <Route exact path="/contact" element={
          <ScrollToTop>
            <Contact mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/about" element={
          <ScrollToTop>
            <AboutUs mode={mode} setProgress={setProgress} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/hoodies" element={
          <ScrollToTop>
            <Hoodies mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/sweat" element={
          <ScrollToTop>
            <Sweatshirts mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/mugs" element={
          <ScrollToTop>
            <Mugs mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/zipper" element={
          <ScrollToTop>
            <Zipper mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/mousepad" element={
          <ScrollToTop>
            <Mousepads mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/caps" element={
          <ScrollToTop>
            <Caps mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/tshirt" element={
          <ScrollToTop>
            <Tshirt mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/polo" element={
          <ScrollToTop>
            <Polo mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/oversized" element={
          <ScrollToTop>
            <Over mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/order" element={
          <ScrollToTop>
            <Orders mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/update" element={
          <ScrollToTop>
            <Update mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/tshirt/:id" element={
          <ScrollToTop>
            <TshirtDetail mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
        <Route exact path="/polo/:id" element={
          <ScrollToTop>
            <PoloDetails mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
          <Route exact path="/over/:id" element={
          <ScrollToTop>
            <OverDetails mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
          <Route exact path="/hoodie/:id" element={
          <ScrollToTop>
            <HoodieDetails mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/sweat/:id" element={
          <ScrollToTop>
           <SweatDetails mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
          <Route exact path="/mugs/:id" element={
          <ScrollToTop>
           <MugsDetails mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/zipper/:id" element={
          <ScrollToTop>
           <ZipperDetails mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
          <Route exact path="/mouse/:id" element={
          <ScrollToTop>
           <MouseDetails mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
        <Route exact path="/caps/:id" element={
          <ScrollToTop>
           <CapDetails mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
        <Route exact path="/checkout" element={
          <ScrollToTop>
            <Checkout mode={mode} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
         <Route exact path="/buy" element={
          <ScrollToTop>
            <Buy mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>
          </ScrollToTop>
        } />
        </Routes>
        <Footer  mode={mode} setProgress={setProgress} toggleMode={toggleMode}/>
        <Footer1 mode={mode} toggleMode={toggleMode}/>
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
