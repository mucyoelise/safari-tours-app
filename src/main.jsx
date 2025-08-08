import {createRoot} from 'react-dom/client'
import App from './App'
import React from 'react'

createRoot(document.querySelector('#root'))
.render(
    < React.StrictMode>
        <App/>
    </React.StrictMode>
)