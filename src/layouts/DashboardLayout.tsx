import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "antd";

export const DashboardLayout = () => {
  const navigate = useNavigate();

  // Mocked user reading for now (this should come from Context/Redux and the actual Login form)
  const userStr = localStorage.getItem("mockUser");
  const user = userStr ? JSON.parse(userStr) : {
    name: "Usuario Demo",
    role: "alumno",
    roleLabel: "Panel del Alumno"
  };

  const currentRoleLabel = user.role === 'admin' ? 'Panel de Administración' :
                           user.role === 'familia' ? 'Panel de Familia' :
                           'Panel del Alumno';

  const handleLogout = () => {
    localStorage.removeItem("mockUser");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">{currentRoleLabel}</h1>
                <p className="text-sm text-gray-500 leading-tight">Bienvenido, {user.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button onClick={handleLogout} className="flex items-center gap-2 rounded-lg" size="large">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};
