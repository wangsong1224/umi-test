import React from "react";
import Square from "./Square";
import ShoppingList from "./ShoppingList";
export default () => {
  // 一般来说 原生的标签小写 用户自定义的标签首字母大写
  return (
    <div>
      {" "}
      hello world
      <ShoppingList name="张三">children</ShoppingList>
      <Square />
    </div>
  );
};
