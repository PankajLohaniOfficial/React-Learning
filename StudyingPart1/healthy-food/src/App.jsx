import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessages";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import { use, useState } from "react";

function App() {
  // let textStateArr = useState("Food Item Entered By User");

  // let textToShow = textStateArr[0];
  //  ------>>>>  textToShow ko hamesha current state value ki tarah dekhte hai <<<<------
  // let setTextState = textStateArr[1];
  // <<<<<<<<<<<<   or      >>>>>>>>>>>>>>>>>>

  // let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = ""; // yeh hamara Input field ko clear karne ke liye
      let newItems = [...foodItems, newFoodItem]; // yeh hamara naya item add karne ke liye hai
      setFoodItems(newItems); // yeh state ko update karega
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
