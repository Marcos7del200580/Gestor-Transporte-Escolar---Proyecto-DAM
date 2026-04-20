import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white shadow-xl rounded-2xl overflow-hidden min-h-[600px]">
        {/* Left Side - Info/Branding */}
        <div className="p-10 flex flex-col justify-center h-full bg-blue-50/50 ">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 text-white p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6v6" /><path d="M15 6v6" /><path d="M2 12h19.6" /><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
            </div>
            <h1 className="text-3xl font-bold text-blue-600">TransEscolar</h1>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
            Sistema Inteligente de <span className="text-red-600">Transporte Escolar</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Gestiona y monitorea el transporte escolar en tiempo real con nuestra plataforma segura y eficiente.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Seguimiento en Tiempo Real</h3>
                <p className="text-gray-500 text-sm">Conoce la ubicación exacta de cada guagua</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Seguridad Garantizada</h3>
                <p className="text-gray-500 text-sm">Control total de entradas y salidas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 flex flex-col justify-center h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
