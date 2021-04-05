// import logo from './logo.svg';
// import './App.scss';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <div className="" style={{ width: '85%', margin: '0 auto' }}>
        <Navbar />
        <Slider />
        <Content />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
