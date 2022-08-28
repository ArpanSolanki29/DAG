import React, { useCallback, useMemo } from "react";
import { Node } from "../store/state";
import NodeDragBehavior from "../utils/DragBehavior/NodeDragBehavior";
import { select } from "d3-selection";
import { DragBehavior } from "d3-drag";
import {
  CalculateNodeCoordinates,
  inputCirclesCoordinates,
  oututCirclesCoordinates,
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
    <>
      <div
        id="rectangle"
        className="NodeRectangle"
        style={{
          width: "150px",
          height: "50px",
          top: props.y,
          left: props.x,
          position: "absolute",
          backgroundColor: "lightsalmon",
        }}
      />
      {/* <NodeInput coordinates={inputCirclesCoordinates()} /> */}
      {/* <NodeOutput coordinates={outputCirclesCoordinates()} /> */}
    </>
  );
};

export default GraphNode;
