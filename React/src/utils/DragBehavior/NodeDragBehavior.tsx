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
      // console.log(this);
      const { x, y, subject } = event;
      // console.log(x);
      // console.log(y);
      // console.log(subject);
      const val = this.querySelector("g.node path[class='MainRectangle']");
      // console.log(val);
      this.querySelector("g.node path[class='MainRectangle']")?.setAttribute(
        "d",
        CalculateNodeCoordinates({ x, y })
      );
      const inputNode: Element | null = this.querySelector(
        "g.node circle[class='InputCircle']"
      );
      inputNode?.setAttribute("cx", String(x));
      inputNode?.setAttribute("cy", String(y + 25));
      const outputNode: Element | null = this.querySelector(
        "g.node circle[class='OutputCircle']"
      );
      outputNode?.setAttribute("cx", String(x + 150));
      outputNode?.setAttribute("cy", String(y + 25));
      subject.x = event.x;
      subject.y = event.y;
    });
}

export default NodeDragBehavior;
