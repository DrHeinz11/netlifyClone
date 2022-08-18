const HeaderCTA = ({ props: { title, url, style } }) => {
  const stylesCta = `${style} border w-60 text-center py-1.5 px-6 trasition duration-100 tracking-wider rounded-md border-primary font-w text-primary text-lg font-cta font-semibold `;

  return (
    <a href={url} className={stylesCta}>
      {title}
    </a>
  );
};

export default HeaderCTA;
