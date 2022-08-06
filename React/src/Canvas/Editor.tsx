import { NONAME } from "dns";
import React, { useRef } from "react";
import { useDrop } from "react-dnd";

import GraphNode from "../Nodes";
import useStore from "../store";
import CreateNode from "../utils/NodeUtils";

const Editor = () => {
  const addNode = useStore((state) => state.addNode);
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const canvasRef = useRef<any>();

  const [{}, drop] = useDrop<{ kind: string }, void, {}>({
    accept: ["node"],
    drop({ kind }, monitor) {
      console.log(kind);
      const location = monitor.getClientOffset();
      console.log(location?.x + "   " + location?.y);
      let svgPoint = canvasRef.current?.createSVGPoint();
      console.log(svgPoint);
      if (svgPoint !== undefined) {
        svgPoint.x = location?.x ?? 0;
        svgPoint.y = location?.y ?? 0;
        svgPoint = svgPoint.matrixTransform(
          canvasRef.current?.getScreenCTM()?.inverse()
        );
        console.log(svgPoint);
      }
      addNode(CreateNode(kind, svgPoint));
    },
  });

  return (
    <div style={{ width: "75%", float: "left" }} ref={drop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="648px"
        // style="bbackground-size: 54px 54px; background-position: -27px -27px; width: 100%; height: 648px; user-select: none; min-width: 750px;"
        viewBox="0 0 100 100"
        style={{
          backgroundColor: "salmon",
          backgroundPosition: "-27px -27px",
          width: "100%",
          height: "648px",
          userSelect: "none",
          minWidth: "750px",
        }}
        ref={canvasRef}
      >
        <rect
          className="background"
          fill="transparent"
          height="648"
          style={{ minWidth: "750px", width: "100%" }}
        />
        <g className="edges" />

        <g className="nodes" style={{ fill: "green" }}>
          {nodes.map((node) => (
            <GraphNode
              key={node.id}
              id={node.id}
              kind={node.kind}
              x={node.x}
              y={node.y}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Editor;

// </svg>
