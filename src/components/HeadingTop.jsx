import closeButton from "../assets/bx-x-circle.svg";
const HeadingTop = () => {
  return (
    <div className="bg-primary py-1 w-full flex flex-1 flex-row justify-between px-2 py-2.5 items-center">
      <h3 className="capitalize font-body font-medium text-white text-sm md:text-lg">
        unrivaled support for Next.js apps with zero configuration.&nbsp;
        <a className="underline hover:no-underline" href="">
          see the difference
        </a>
      </h3>
      <img src={closeButton} alt="close button" />
    </div>
  );
};

export default HeadingTop;
