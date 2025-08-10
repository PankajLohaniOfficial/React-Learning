import "./App.css";
import styles from "../src/assets/App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <input className={styles.display} type="text" />
      <div className={styles.buttonsContainer}>
        <button>C</button>
      </div>
    </div>
  );
}

export default App;
