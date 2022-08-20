const HeaderGridImages = ({
  data: { sizeW, sizeH, columns, rows, images },
}) => {
  return (
    <div
      className={`grid grid-cols-${columns} grid-rows-${rows} w-${sizeW} h-${sizeH}`}
    >
      <img src="" alt="" />
      {images.map((e) => (
        <img src={e.imgUrl} alt={e.imgAlt} key={e.key} />
      ))}
    </div>
  );
};

export default HeaderGridImages;
