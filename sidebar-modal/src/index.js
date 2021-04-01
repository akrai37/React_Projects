import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import  { AppProvider} from './context.js' //we have to wrap our application within the 'App Provider' fn of the 'useContext'
import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>   
       <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
