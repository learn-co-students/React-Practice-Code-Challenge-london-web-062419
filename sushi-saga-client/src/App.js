import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    slicedSushiIndex: 0,
    eatenSushis: [],
    budget: 100
  };

  getSushis = () => {
    return fetch(API).then(resp => resp.json());
  };

  componentDidMount = () => {
    this.getSushis().then(sushis => this.setState({ sushis }));
  };

  getFourSushis = () => {
    const slicedSushi = this.state.sushis.slice(
      this.state.slicedSushiIndex,
      this.state.slicedSushiIndex + 4
    );
    return slicedSushi;
  };

  eatSushi = sushi => {
    const remainingBudget = this.state.budget - sushi.price;
    if (remainingBudget >= 0) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi],
        budget: remainingBudget
      });
    }
  };

  getFourMore = () => {
    return this.setState({ slicedSushiIndex: this.state.slicedSushiIndex + 4 });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sliceOfSushis={this.getFourSushis()}
          handleEatSushi={this.eatSushi}
          eatenSushis={this.state.eatenSushis}
          moreSushi={this.getFourMore}
        />
        <Table
          eatenSushis={this.state.eatenSushis}
          budget={this.state.budget}
        />
      </div>
    );
  }
}

export default App;
