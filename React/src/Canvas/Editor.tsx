import React, { useRef } from "react";
import { useDrop } from "react-dnd";

import GraphNode from "../Nodes";
import useStore from "../store";
import { Position } from "../store/state";
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
      addNode(CreateNode(kind, location));
    },
  });

  return (
    <div style={{ width: "75%", float: "left", height: "100%" }} ref={drop}>
      {nodes.map((node) => (
        <GraphNode
          key={node.id}
          id={node.id}
          kind={node.kind}
          x={node.x}
          y={node.y}
        />
      ))}
    </div>
  );
};

export default Editor;

// </svg>
