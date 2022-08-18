const HeaderCTA = ({ props: { title, url, style } }) => {
  const stylesCta = `${style} border-2`;
  return (
    <a href={url} className={stylesCta}>
      {title}
    </a>
  );
};

export default HeaderCTA;
