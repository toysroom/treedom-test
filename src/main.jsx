import React from 'react'
import ReactDOM from 'react-dom/client'
import { WizardContextProvider } from './contexts/WizardContext.jsx';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WizardContextProvider>
      <App />
    </WizardContextProvider>
  </React.StrictMode>,
)
