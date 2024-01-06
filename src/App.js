import "./App.css"
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Contact from "./Pages/Contact/contact";
import Demo from "./Pages/Demo/Demo";
import Feature from "./Pages/Feature/Feature";
import Home from "./Pages/Home/Home";
import WorkWith from "./Pages/workWith/WorkWith";

function App() {
  return <div className="App" >
    <Header/>
    <Home/>
    <Demo/>
    <Feature/>
    <WorkWith/>
    <Contact/>
    <Footer/>
  </div>;
}

export default App;
