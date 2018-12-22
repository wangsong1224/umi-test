import React from "react";
class Square extends React.Component {
  /**
   * 构造方法 constructor 里面定义了当前状态 this.state 对象
   * setState 每次执行后,会自动调用 render 方法,导致 UI 更新
   */
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  // 组件挂载后
  componentDidMount() {}

  // 组件卸载前
  componentWillUnmount() {}

  // UI 每次更新后  即使 render 之后,每次调用 render 方法,都会触发
  componentDidUpdate() {}

  render() {
    return (
      <div>
        <button
          className="square"
          onClick={() => this.setState({ value: "X" })}
        >
          {this.state.value}
        </button>
      </div>
    );
  }
}
export default Square;
