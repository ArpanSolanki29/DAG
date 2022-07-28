import { CSSProperties } from "react";
import { Position, XYPosition } from "./utils";

export interface Node<T = any> {
    id: string;
    position: XYPosition
    data: T;
    type?: string;
    style?: CSSProperties;
    targetPosition: Position;
    sourcePosition: Position;
};