import React from 'react'
import create from 'zustand';
import initialState from './initialState';
import {DAGState, DAGStore, Node} from './state';

const useStore = create<DAGState>((set, get) => ({
    ...initialState,
    addNode: (node: Node) => set((state) => ({nodes: [...state.nodes, node]}))
}));


type CountStore = {
    count: number;
    increment: () => void;
  };

export const useCountStore = create<CountStore>((set, get) => ({
    count: 0,
    increment: (): void =>  {
      const { count } = get();
      set({ count: count + 1 });
    }
  }));

export default useStore;