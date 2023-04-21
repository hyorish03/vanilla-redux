import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    count++;
  } else if (action.type === "Minus") {
    count--;
  } else return 0;
  return count;
};
const countStore = createStore(countModifier);
console.log(countStore);
const onChange = () => {
  console.log("there was a change on the store");
};
countStore.subscribe(onChange);
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => countStore.dispatch({ type: "Minus" });
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
