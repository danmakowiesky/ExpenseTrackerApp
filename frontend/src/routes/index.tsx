import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../context/ThemeContext";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext()
  return (
    <Routes>
      <Route path="/dashboard" element={<Button onClick={toggleTheme} variant="contained" color="primary">Toggle Theme</Button>} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}