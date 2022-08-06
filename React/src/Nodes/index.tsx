import React, { useCallback, useMemo } from "react";
import { Node } from "../store/state";
import NodeDragBehavior from "../utils/DragBehavior/NodeDragBehavior";
import { select } from "d3-selection";
import { DragBehavior } from "d3-drag";
import { CalculateNodeCoordinates } from "../utils/CoordinatesCalucator";

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
    // <g className="node" ref={nodeRef}>
    <path
      className="MainRectangle"
      d={CalculateNodeCoordinates(props)}
      style={{ fill: "red" }}
      ref={nodeRef}
    />
    // <NodeInput coordinates={inputCirclesCoordinates}></NodeInput>
    // <NodeOutput coordinates={oututCirclesCoordinates}></NodeOutput>
    // </g>
  );
};

export default GraphNode;
