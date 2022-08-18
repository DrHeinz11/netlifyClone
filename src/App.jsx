import "./styles/App.css";
import HeaderCTA from "./components/HeaderCTA";
import HeadingTop from "./components/HeadingTop";

const propsCta = [
  {
    key: "1",
    title: "get in touch with us",
    url: "https://tailwindcss.com/docs/",
    style:
      "font-cta font-medium bg-white capitalize font-w text-primary text-xl hover:border-secondary hover:text-secondary rounded-md border-primary py-0.5 px-6",
  },
];
function App() {
  return (
    <div className="bg-orange-300">
      <HeadingTop />
      <h1 className="bg-orange-500 text-4xl font-body">
        hola esto es una prueba
      </h1>
      <h1 className="font-display bg-primary lg:font-serif text-6xl">
        Hola esto es una prueba con
      </h1>
      {propsCta.map((e) => (
        <HeaderCTA key={e.key} props={e} />
      ))}
    </div>
  );
}

export default App;
