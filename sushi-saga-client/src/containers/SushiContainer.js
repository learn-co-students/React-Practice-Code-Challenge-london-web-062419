import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const mapSushis = (
  sushiArray,
  handleEatSushi,
  eatenSushisArray,
  moreSushi
) => {
  return sushiArray.map(sushi => {
    const eaten = eatenSushisArray.includes(sushi);
    return (
      <Sushi sushi={sushi} handleEatSushi={handleEatSushi} eaten={eaten} />
    );
  });
};

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {mapSushis(
          props.sliceOfSushis,
          props.handleEatSushi,
          props.eatenSushis
        )}
        <MoreButton getFourMore={props.moreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
