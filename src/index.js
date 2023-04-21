import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

number.innerText = 0;

const Add = "Add";
const Minus = "Minus";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "Add":
      return count + 1;
    case "Minus":
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

console.log(countStore.getState());

const onChange = () => {
  number.innerText = countStore.getState();
  console.log("there was a change on the store");
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: Add });
};

const handleMinus = () => countStore.dispatch({ type: Minus });

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
