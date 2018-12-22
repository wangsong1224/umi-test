import React, { Component } from "react";
import { Card, Button } from "antd";
export default class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 1,
          setup: "Did you hear about the two silk worms in a race?",
          punchline: "It ended in a tie."
        },
        {
          id: 2,
          setup: "What hanppens to a frog's car when it breaks down?",
          punchline: "It gets toad away"
        }
      ]
    };
  }
  /**
   * 属性初始化器
   */
  addNewCard = () => {
    this.setState(prevState => {
      const prevCardList = prevState.cardList;
      this.counter += 1;
      const card = {
        id: 3,
        setup: "Who is the next?",
        punchline: "Nobody"
      };
      return {
        cardList: prevCardList.concat(card)
      };
    });
  };
  render() {
    return (
      <div>
        {/* 循环 */}
        {this.state.cardList.map(card => {
          return (
            <Card key={card.id}>
              <div>Q:{card.setup}</div>
              <div>
                <strong>A:{card.punchline}</strong>
              </div>
            </Card>
          );
        })}
        <Button onClick={this.addNewCard}>点击添加一条记录</Button>
      </div>
    );
  }
}
