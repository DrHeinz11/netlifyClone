import hamburger from "../assets/hamburger.svg";
const Navbar = () => {
  return (
    <div className="flex flex-row px-3 justify-between">
      <img
        src="https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg"
        alt="Netlify Logo"
        className="w-36"
      />
      <img src={hamburger} alt="Hamburguer menu" />
    </div>
  );
};

export default Navbar;
