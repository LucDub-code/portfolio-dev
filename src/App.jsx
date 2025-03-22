import Layout from './components/layout/Layout'
import { NavigationProvider } from './components/context/NavigationContext'
import { AboutProvider } from './components/context/AboutContext'

function App() {
  return (
    <AboutProvider>
      <NavigationProvider>
        <Layout />
      </NavigationProvider>
    </AboutProvider>
  )
}

export default App
