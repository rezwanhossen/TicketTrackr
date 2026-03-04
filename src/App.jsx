import "./App.css";
import Footer from "./components/Footer/Footer";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="roboto w-11/12 mx-auto">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

export default App;
