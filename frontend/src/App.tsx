import { BrowserRouter } from 'react-router-dom'
import { DrawerProvider } from './context/DrawerContext'
import { AppThemeProvider } from './context/ThemeContext'
import { AppRoutes } from './routes'
import Sidebar from './shared/components/Sidebar'

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <Sidebar>
            <AppRoutes />
          </Sidebar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  )
}

export default App
