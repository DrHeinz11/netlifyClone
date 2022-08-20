import "./styles/App.css";
import propsCta from "./constants/data";
import HeaderCTA from "./components/HeaderCTA";
import HeadingTop from "./components/HeadingTop";
import Navbar from "./containers/Navbar";
import Header from "./containers/Header";
import HeaderGridImages from "./components/HeaderGridImages";

const data = [
  {
    key: "4",
    sizeW: "36",
    sizeH: "96",
    columns: 2,
    rows: 2,
    images: [
      {
        imgUrl:
          "https://images.vexels.com/media/users/3/166477/isolated/lists/9bb722f0e85ddbc1ce0f064534fd2311-icono-del-lenguaje-de-programacion-python.png",
        imgAlt: "Python",
        key: "img1",
      },
      {
        imgUrl:
          "https://images.vexels.com/media/users/3/166403/isolated/lists/a5a33bf3004830a2bd581e9fa65de660-icono-del-lenguaje-de-programacion-javascript.png",
        imgAlt: "Javascript",
        key: "img2",
      },
      {
        imgUrl:
          "https://images.vexels.com/media/users/3/166470/isolated/lists/73835fa38fba6d35aff9de603dc5044a-icono-de-lenguaje-de-programacion-php.png",
        imgAlt: "PHP",
        key: "img3",
      },
      {
        imgUrl:
          "https://images.vexels.com/media/users/3/166485/isolated/lists/d4061b653e6ba02ad0afdc79e0315a25-icono-del-lenguaje-de-programacion-ruby.png",
        imgAlt: "Ruby",
        key: "img4",
      },
    ],
  },
  {
    key: "5",
    sizeW: "36",
    sizeH: "96",
    columns: 2,
    rows: 2,
    images: [
      {
        imgUrl:
          "https://images.vexels.com/media/users/3/166477/isolated/lists/9bb722f0e85ddbc1ce0f064534fd2311-icono-del-lenguaje-de-programacion-python.png",
        imgAlt: "Python",
        key: "img1",
      },
      {
        imgUrl:
          "https://images.vexels.com/media/users/3/166403/isolated/lists/a5a33bf3004830a2bd581e9fa65de660-icono-del-lenguaje-de-programacion-javascript.png",
        imgAlt: "Javascript",
        key: "img2",
      },
      {
        imgUrl:
          "https://images.vexels.com/media/users/3/166470/isolated/lists/73835fa38fba6d35aff9de603dc5044a-icono-de-lenguaje-de-programacion-php.png",
        imgAlt: "PHP",
        key: "img3",
      },
      {
        imgUrl:
          "https://images.vexels.com/media/users/3/166485/isolated/lists/d4061b653e6ba02ad0afdc79e0315a25-icono-del-lenguaje-de-programacion-ruby.png",
        imgAlt: "Ruby",
        key: "img4",
      },
    ],
  },
];

function App() {
  return (
    <div className="grid grid-rows-[max-content,max-content,1fr] min-h-screen ">
      <HeadingTop />
      <Navbar />
      <div className="flex flex-row flex-wrap">
        {data.map((e) => (
          <HeaderGridImages data={e} key={e.key} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center p-4 gap-4 ">
        <Header />
        {propsCta.ma5((e) => (
          <HeaderCTA key={e.key} props={e} />
        ))}
      </div>
    </div>
  );
}

export default App;
