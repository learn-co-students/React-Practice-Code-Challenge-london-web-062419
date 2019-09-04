import React, { Fragment } from "react";

const Sushi = props => {
  const { name, price, img_url } = props.sushi;

  return (
    <div className="sushi">
      <div className="plate">
        {props.eaten ? null : (
          <img
            src={img_url}
            width="100%"
            onClick={() => props.handleEatSushi(props.sushi)}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
