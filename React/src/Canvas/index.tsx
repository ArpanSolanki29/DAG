import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SideBar from '../SideBar';
import Editor from './Editor';

const Canvas = () => {
  return (
    <DndProvider backend={HTML5Backend}>
        <Editor/>
        <SideBar />
    </DndProvider>
  )
}

export default Canvas;