import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { LoginForm } from "./features/auth/components/LoginForm";
import { AdminDashboard } from "./features/dashboards/AdminDashboard";
import { StudentDashboard } from "./features/dashboards/StudentDashboard";
import { FamilyDashboard } from "./features/dashboards/FamilyDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={
            <>
              <LoginForm />
            </>
          } />
          <Route path="/login" element={<Navigate to="/" replace />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="student" element={<StudentDashboard />} />
          <Route path="family" element={<FamilyDashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
