import CardImage from "../assets/home/cardImage.png";

function TextCard({ data, image, isBg, largeText }) {
  const { id, title, icon, des } = data;

  const h2TextSize = `${
    largeText ? "font-extrabold font-popin" : "font-semibold font-dm"
  } h5 text-white pt-3 pb-2"`;
  const pTextSize = `${
    largeText ? "h4 font-popin" : "body3 font-dm"
  } max-w-[30rem] text-gray-300  mt-3`;

  return (
    <div
      key={id}
      className="sm:p-5 md:p-6 flex flex-col items-center justify-center sm:items-start sm:justify-start lg:p-10"
    >
      <div
        className={`${
          isBg &&
          "flex items-center justify-center w-[50px] h-[50px] bg-primary-1 rounded-full"
        }`}
      >
        <img src={icon} alt="" />
      </div>
      <div className="text-center sm:text-start">
        <h2 className={h2TextSize}>{title}</h2>
        {image && <img src={CardImage} alt="image" />}
        <p className={pTextSize}>{des}</p>
      </div>
    </div>
  );
}

export default TextCard;
