import React, { LegacyRef, MutableRefObject, useRef } from 'react'
import { useDrop } from 'react-dnd';

import GraphNode from '../Nodes';
import useStore from '../store';
import CreateNode from './utils';



const Editor = () => {

  const addNode = useStore(state => state.addNode);
  const nodes = useStore(state => state.nodes);

  const canvasRef = useRef<any>();

  const [{}, drop] = useDrop<{kind: string}, void, {}>({
		accept: ["node"],
		drop({ kind }, monitor) {
      console.log(kind);
      const location = monitor.getClientOffset();
      console.log(location?.x + "   " + location?.y);
      let svgPoint = canvasRef.current?.createSVGPoint();
      console.log(svgPoint)
      if(svgPoint!==undefined) {
        svgPoint.x = location?.x ?? 0; 
        svgPoint.y = location?.y ?? 0;
        svgPoint = svgPoint.matrixTransform(canvasRef.current?.getScreenCTM()?.inverse());
        console.log(svgPoint);
      }
      addNode(CreateNode(kind, svgPoint));  
		},
	})

  return (
    <div style={{width: '75%', float: 'left'}} ref={drop}>
        <svg viewBox='0 0 100 100' style={{ fill: '#a1b2d3'}} ref={canvasRef}>
            <rect className='background' fill='#a1b2d3' style={{width: "100%", height: "100%"}}/>
            <g style={{ fill: 'green' }}>
              {nodes.map(node => (
                  <GraphNode 
                    key={node.id}
                    id={node.id} 
                    kind={node.kind} 
                    position={node.position}></GraphNode>
              ))}
            </g> 
        </svg>
    </div>
  )
}

export default Editor;