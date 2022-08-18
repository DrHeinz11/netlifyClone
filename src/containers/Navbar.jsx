import hamburger from "../assets/hamburger.svg";
const Navbar = () => {
  return (
    <div className="flex flex-row px-2 justify-between">
      <img
        src="https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg"
        alt="Netlify Logo"
        className="w-32"
      />
      <img src={hamburger} alt="Hamburguer menu" />
    </div>
  );
};

export default Navbar;
