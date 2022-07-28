import React from 'react'
import { XYCoord } from 'react-dnd';
import { Node } from '../store/state';
import { v4 as uuidv4 } from 'uuid';

const CreateNode= (kind: string, location: DOMPoint) : Node  =>  {
    return {
        id: uuidv4(),
        kind: kind,
        position: {x: location?.x ?? 0, y: location?.y ?? 0}
    }
}

export default CreateNode;