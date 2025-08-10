import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessages";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = [
    "Sabziii",
    "Roti",
    "Banana",
    "Salad",
    "Green Vegetable",
    "Milk",
  ];
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>s
          Above is the List of the Healthy foods that are good for the health
          and well bring..
        </p>
      </Container> */}
    </>
  );
}

export default App;
