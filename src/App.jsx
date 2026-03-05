import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Tickets from "./components/tickets/Tickets";

const datas = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const tickts = datas();
function App() {
  const [inProgress, setInProgress] = useState([]);
  const [reslove, setReslove] = useState([]);
  const handelInProgress = (title) => {
    const newData = [...inProgress, title];
    setInProgress(newData);
  };
  const handelResolve = (title) => {
    const newReslove = [...reslove, title];
    setReslove(newReslove);
    const updatInprogress = inProgress.filter((inp) => inp !== title);
    setInProgress(updatInprogress);
  };
  return (
    <>
      <div className="roboto w-11/12 mx-auto">
        <Navbar />
        <Banner inProgress={inProgress} reslove={reslove} />
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <Tickets
            tickts={tickts}
            handelInProgress={handelInProgress}
            inProgress={inProgress}
            handelResolve={handelResolve}
            reslove={reslove}
          />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
