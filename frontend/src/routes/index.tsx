import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Button variant="contained" color="primary">Dashboard </Button>} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}