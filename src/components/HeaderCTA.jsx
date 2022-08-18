const HeaderCTA = ({ props: { title, url, style } }) => {
  const styleDef = `${style} p-4`;
  return (
    <a href={url} className={styleDef}>
      {title}
    </a>
  );
};

export default HeaderCTA;
