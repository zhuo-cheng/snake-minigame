import "./style/index.less";
import Food from "./modules/Food";
import ScorePanel from "./modules/ScorePanel";
// import Snake from "./modules/Snake";

const food = new Food();
console.log(food.X,food.Y);
food.change();
console.log(food.X,food.Y);