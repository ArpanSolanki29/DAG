import React from 'react'
import create, { StoreApi } from 'zustand';
import createContext from 'zustand/context';
import { ReactFlowState, ReactFlowStore } from '../types[Deprecated]/general';
import initialState from './initialState';

const { Provider, useStore, useStoreApi } = createContext<StoreApi<ReactFlowState>>();

const createStore = () => 
  create<ReactFlowState>((set, get) => ({
    ...initialState,

  }))
    

export function index() {
  return null;
}

export {Provider, useStore, useStoreApi, createStore};
