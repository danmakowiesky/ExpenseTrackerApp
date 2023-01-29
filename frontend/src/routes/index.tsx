import { Button } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDrawerContext } from '../context/DrawerContext'

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext()
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <Button
            onClick={toggleDrawerOpen}
            variant="contained"
            color="primary"
          >
            Toggle Theme
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}
