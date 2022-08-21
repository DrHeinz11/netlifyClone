import "./HeaderGridImg.css";
const HeaderGridImages = ({ data: { sizeW, sizeH, images } }) => {
  return (
    <div className={`gridAreas w-${sizeW} h-${sizeH} gap-2`}>
      {images.map((e) => (
        <img src={e.imgUrl} className={e.key} alt={e.imgAlt} key={e.key} />
      ))}
    </div>
  );
};

export default HeaderGridImages;
