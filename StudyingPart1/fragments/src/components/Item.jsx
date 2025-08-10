import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className="list-group-item">
      {foodItem}

      {/* $ sign hamara hamara variable banaane ke liye use hota hai */}
      <button
        className={`${styles.button} btn btn-info `}
        onClick={() => console.log(`${foodItem} being bought..`)}
      >
        {" "}
        Buy
      </button>
    </li>
  );
};

export default Item;
