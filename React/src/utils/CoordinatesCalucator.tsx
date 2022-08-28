import { Node, Position } from "../store/state";

export const CalculateNodeCoordinates = (props: Position): string => {
  const length: number = props.x + 30;
  const breadth: number = props.y + 10;

  const rectPath: string = `M ${props.x},${props.y} 
		${length},${props.y} ${length},${breadth} 
		${props.x},${breadth} ${props.x},${props.y}`;
  return rectPath;
};

export const inputCirclesCoordinates = (props: Node): Position => {
  let breadth: number = props.y + 5;
  return { x: props.x, y: breadth };
};

export const outputCirclesCoordinates = (props: Node): Position => {
  let length: number = props.x + 30;
  return { x: length, y: props.y + 5 };
};
