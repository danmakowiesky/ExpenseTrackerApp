import { Button } from '@mui/material'
import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDrawerContext } from '../context/DrawerContext'

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Dashboard',
        icon: 'home',
        path: '/dashboard',
      },
    ])
  }, [])
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
