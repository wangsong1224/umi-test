import React from "react";
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        {/* ShoppingList 标签上的所有属性都会通过 this.props传递进来 */}
        <h1>Shopping List for {this.props.name}</h1>
        {/* 如果是闭合标签, children 可以获取闭合标签包裹的内容 */}
        <h1>{this.props.children}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
export default ShoppingList;
