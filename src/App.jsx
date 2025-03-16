import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import { NavigationProvider } from './components/context/NavigationContext'

function App() {
  return (
    <NavigationProvider>
      <Layout />
    </NavigationProvider>
  )
}

export default App
