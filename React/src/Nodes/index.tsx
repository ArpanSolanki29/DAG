import React, { useCallback, useMemo } from "react";
import { Node } from "../store/state";
import NodeDragBehavior from "../utils/DragBehavior/NodeDragBehavior";
import { select } from "d3-selection";
import { DragBehavior } from "d3-drag";
import {
  CalculateNodeCoordinates,
  inputCirclesCoordinates,
  outputCirclesCoordinates,
} from "../utils/CoordinatesCalucator";
import NodeInput from "./input";
import NodeOutput from "./output";

const GraphNode = (props: Node) => {
  const nodeDrag: DragBehavior<SVGElement, any, any> = useMemo(() => {
    return NodeDragBehavior();
  }, []);

  const nodeRef = useCallback((g: SVGElement | null) => {
    if (g !== null) {
      console.log(g);
      select(g).call(nodeDrag);
    }
  }, []);

  return (
    <g className="node" ref={nodeRef}>
      <path
        className="MainRectangle"
        d={CalculateNodeCoordinates(props)}
        style={{ fill: "red" }}
        id={props.id}
      />
      <NodeInput coordinates={inputCirclesCoordinates(props)}></NodeInput>
      <NodeOutput coordinates={outputCirclesCoordinates(props)}></NodeOutput>
    </g>
  );
};

export default GraphNode;
