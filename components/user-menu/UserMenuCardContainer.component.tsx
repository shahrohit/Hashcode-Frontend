import cardList from "@/constant/UserMenuCardList";
import UserMenuCard from "./UserMenuCard.component";

const UserMenuCardContainer = () => {
  return (
    <div className="my-1 flex flex-wrap  justify-center">
      {cardList?.map((card) => {
        return <UserMenuCard key={card.name} cardInfo={card} />;
      })}
    </div>
  );
};

export default UserMenuCardContainer;
