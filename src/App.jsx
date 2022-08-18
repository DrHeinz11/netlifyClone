import "./styles/App.css";
import HeaderCTA from "./components/HeaderCTA";

const propsCta = {
  title: "esto es una prueba ",
  url: "https://tailwindcss.com/docs/",
  style: "font-serif text-xl bg-slate-400 hover:bg-slate-700",
};
function App() {
  return (
    <div>
      <h1>hola esto es una prueba</h1>
      <h1 className="font-sans lg:font-serif text-6xl">
        Hola esto es una prueba con
      </h1>
      <HeaderCTA props={propsCta} />
    </div>
  );
}

export default App;
