import Image from "next/image";

const Card = ({
  title,
  desc,
  linerColor,
  icon,
}: {
  title: string;
  desc: string;
  linerColor: string;
  icon: string;
}) => {
  return (
    <div
      className="shadow-md rounded-lg w-[311px] px-[32px] pt-[44px] pb-[26px] h-[222px] 
                flex flex-col justify-between  relative md:w-[350px] md:h-[250px]              
                "
    >
      <div>
        <h1 className="text-[20px] pb-[10px] ">{title}</h1>
        <p className="text-[12px] md:text-[15px] text-GrayBlue">{desc}</p>
      </div>
      <Image src={icon} alt="" width={64} height={64} className="self-end" />

      <div
        className={`${linerColor} min-w-full absolute  top-0 left-0  h-[12px]  rounded-t-lg`}
      ></div>
    </div>
  );
};

export default Card;
