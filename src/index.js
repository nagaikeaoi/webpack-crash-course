import _ from "lodash";
import "./style.css";
import "./style.scss";
import logo from "./logo.png";

function compornent() {
  const element = document.createElement("div");
  const array = ["Hello", "webpack", "!!"];
  element.innerHTML = _.join(array, " ");
  return element;
}

document.body.appendChild(compornent());
document.body.classList.add("background");

const image = new Image();
image.src = logo;
document.body.appendChild(image);
