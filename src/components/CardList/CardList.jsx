// import {robots} from '../../assets/robots';
import Card from "../card/Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((user) => {
    return (
      <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    );
  });
  return <div>{cardsArray}</div>;
};
export default CardList;
