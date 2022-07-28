export type Position = {
    x: number; y: number;
}

export type Node = {
    id: string;
    kind: string;
    position: Position;
}

export type Edge = {
    id: string;
    source: Node;
    target: Node;
    startPosition: Position;
    endPosition: Position;
}

export type DAGState = DAGStore & DAGAction;

export type DAGStore = {
    nodes: Node[];
    edges: Edge[];
}

export type DAGAction = {
    addNode: (node: Node) => void;
}