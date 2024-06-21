import React from 'react'
import ReactDOM from 'react-dom/client'
import BasicExample from './ContextAPI/BasicExample'
import BasicExample2 from './ContextAPI/BasicExample2'
import { CounterProvider } from './ContextAPI/CounterContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterProvider>
      <BasicExample />
      <BasicExample2 />
   </CounterProvider>,
)
