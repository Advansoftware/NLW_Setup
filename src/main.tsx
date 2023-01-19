import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
    <ResponsiveAppBar />
    <App/>
    </>,
)
