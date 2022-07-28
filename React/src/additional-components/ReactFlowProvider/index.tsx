import React, {FC, PropsWithChildren} from 'react'
import { createStore, Provider } from '../../store/index[Deprecated]'


const ReactFlowProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Provider createStore={createStore}>
            {children}
        </Provider>
    )
}

export default ReactFlowProvider;