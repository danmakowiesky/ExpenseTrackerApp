import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider } from './context/ThemeContext'
import { AppRoutes } from './routes'
import Sidebar from './shared/components/Sidebar'

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Sidebar>
          <AppRoutes />
        </Sidebar>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
