import React, { useCallback } from "react";
import { Position } from "../store/state";
import { select } from "d3-selection";
// @ts-ignore
import { drag, DragBehavior, D3DragEvent } from "d3-drag";

type OutputDragSubject = {
  x: number;
  y: number;
};

type OutputDragEvent = D3DragEvent<
  SVGCircleElement,
  unknown,
  OutputDragSubject
>;

const outputDragBehaviour = (): DragBehavior<
  SVGCircleElement,
  unknown,
  OutputDragSubject
> => {
  debugger;
  return drag<SVGCircleElement, unknown, OutputDragSubject>().on(
    "start",
    function onStart(event: OutputDragEvent) {
      console.log(event);
    }
  );
  // .on("drag");
};

const handledrag = (circle: SVGCircleElement | null): any => {
  // debugger;
  select(circle).call(
    drag<any, unknown, any>().on("start", (event: any) => {
      console.log(event);
    })
  );
};

const NodeOutput = (props: { coordinates: Position }) => {
  const drag = useCallback((circle: SVGCircleElement | null) => {
    // debugger;
    console.log(circle);
    if (circle !== null) {
      handledrag(circle);
    }
  }, []);

  return (
    <circle
      ref={drag}
      className="OutputCircle"
      cx={props.coordinates.x}
      cy={props.coordinates.y}
      r="4"
      stroke="black"
      strokeWidth="1"
      fill="white"
    />
  );
};

export default NodeOutput;
