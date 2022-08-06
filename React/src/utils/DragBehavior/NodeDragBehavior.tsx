import React from "react";
import { drag, D3DragEvent } from "d3-drag";
import { CalculateNodeCoordinates } from "../CoordinatesCalucator";

type NodeDragSubject = {
  x: number;
  y: number;
};

type NodeEventDrag = D3DragEvent<SVGElement, unknown, NodeDragSubject>;

function NodeDragBehavior() {
  //   debugger;
  console.log("calling drag beahivor");
  return drag<SVGElement, unknown, NodeDragSubject>()
    .on("start", function (event: NodeEventDrag) {
      console.log(this);
    })
    .on("drag", function (event: NodeEventDrag) {
      console.log(this);
      const { x, y, subject } = event;
      console.log(x);
      console.log(y);
      console.log(subject);
      this.setAttribute("d", CalculateNodeCoordinates({ x, y }));
      subject.x = event.x;
      subject.y = event.y;
    });
}

export default NodeDragBehavior;
