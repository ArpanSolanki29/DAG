import React from "react";
import { Position } from "../store/state";

const NodeInput = (props: { coordinates: Position }) => {
  return (
    <circle
      className="InputCircle"
      cx={props.coordinates.x}
      cy={props.coordinates.y}
      r="4"
      stroke="black"
      strokeWidth="1"
      fill="white"
    />
  );
};

export default NodeInput;
