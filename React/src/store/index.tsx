import React from 'react'
import create from 'zustand';
import initialState from './initialState';
import {DAGState, Node} from './state';

const useStore = create<DAGState>((set, get) => ({
    ...initialState,
    addNode: (node: Node) => set((state) => ({nodes: [...state.nodes, node]}))
}));

export default useStore;