import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className="list-group-item">
      {foodItem}

      {/* $ sign hamara hamara variable banaane ke liye use hota hai */}
      <button
        className={`${styles.button} btn btn-info `}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
