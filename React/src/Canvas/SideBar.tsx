import React from 'react'
import { useDrag } from 'react-dnd'

export interface NodeTypeProps {
    kind: string
}

export default function SideBar() {
    return (
        <aside style={{float: 'right', width: '25%'}}>
            <div className='description'>
                You can drag these nodes.
            </div>
            <div className='dndnode input' draggable={true}>
                <NodeType kind='Input'/>
            </div>

            <div className='dndnode' draggable={true}>
                <NodeType kind='Default'/>
            </div>

            <div className='dndnode output' draggable={true}>
                <NodeType kind='Output'/>
            </div>
        </aside>
    )
}




export const NodeType = (props: NodeTypeProps): React.ReactElement => {

    const [_, drag] = useDrag(() => ({
        type: 'node',
        item: {kind: props.kind}
    }));
    
    return (
        <div
			ref={drag}
			className="abstract"
			style={{
				cursor: "move",
				margin: "1em",
				display: "flex",
				alignItems: "center",
				padding: 12,
			}}
		>
			<div
				style={{
					flex: 1,
					marginLeft: 6,
					marginRight: 6,
				}}
			>
				{props.kind} Node
			</div>
		</div>
    );
}