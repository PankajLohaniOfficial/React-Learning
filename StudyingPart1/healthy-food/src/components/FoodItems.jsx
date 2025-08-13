import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        >
          {/* Yahan pe Parent child ko functionality bhi bhej rha hai */}{" "}
        </Item>
      ))}
    </ul>
  );
};

export default FoodItems;
