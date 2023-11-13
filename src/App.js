import "./App.css"
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Demo from "./Pages/Demo/Demo";
import Feature from "./Pages/Feature/Feature";
import Home from "./Pages/Home/Home";
import Support from "./Pages/Support/Support";

function App() {
  return <div className="App">
    <Header/>
    <Home/>
    <Demo/>
    <Support/>
    <Feature/>
    <Footer/>
  </div>;
}

export default App;
