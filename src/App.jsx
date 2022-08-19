import "./styles/App.css";
import propsCta from "./constants/data";
import HeaderCTA from "./components/HeaderCTA";
import HeadingTop from "./components/HeadingTop";
import Navbar from "./containers/Navbar";
import Header from "./containers/Header";

function App() {
  return (
    <div className="grid grid-rows-[max-content,max-content,1fr] min-h-screen ">
      <HeadingTop />
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 gap-4 ">
        <Header />
        {propsCta.map((e) => (
          <HeaderCTA key={e.key} props={e} />
        ))}
      </div>
    </div>
  );
}

export default App;
