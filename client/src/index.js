import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App'

createRoot(document.getElementById('root')).render(<App />)