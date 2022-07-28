import React from 'react'
import { Node } from '../store/state';

const GraphNode = (props: Node) => {
  return (
    <rect className='node' x={props.position.x} y={props.position.y} style={{width: "10%", height: "5%", fill: "pink"}}>
        abc          
    </rect>
  )
}

export default GraphNode;