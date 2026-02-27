import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Browserrouter} from "react-router-dom"

ReactDom.createRoot(document.getElementById('root')).render(
  <Browserrouter>
    <App />
  </Browserrouter>,
)
