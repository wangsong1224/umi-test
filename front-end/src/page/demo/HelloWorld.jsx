import React from "react";
import Square from "./Square";
import ShoppingList from "./ShoppingList";
import style from "./HelloWorld.css";
export default () => {
  // 一般来说 原生的标签小写 用户自定义的标签首字母大写
  return (
    <div className={style.hello}>
      {" "}
      hello world
      <ShoppingList name="张三">children</ShoppingList>
      <Square />
    </div>
  );
};
