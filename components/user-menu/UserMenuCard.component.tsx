import Image from "next/image";

type Props = {
  cardInfo: { name: string; img: string };
};

const UserMenuCard = ({ cardInfo }: Props) => {
  return (
    <div className="grow flex flex-col items-center justify-center space-y-1 w-24 h-24 m-1 bg-secondaybg rounded-2xl">
      <Image src={cardInfo.img} height={30} width={30} alt={cardInfo.name} />
      <p className="text-sm">{cardInfo.name}</p>
    </div>
  );
};

export default UserMenuCard;
