import { Card, Tag } from "antd";
import { Clock, User } from "lucide-react";
import { NotificationCard } from "../../components/notification-card";
import { mockNotifications } from "../../mock-data/notification.mock";
import { mockRoutes } from "../../mock-data/trasnport.route";
import { RouteCard } from "../../components/route-card";
import MapComponent from "../../components/MapComponent";
import { useState } from "react";

export const StudentDashboard = () => {

  const [subido, setSubido] = useState(false);
  const [fecha, setFecha] = useState(new Date());

  const ticar = () => {
    setSubido(!subido);
  }

  const texto = subido ? "Bajarse de la guagua" : "Subir a la guagua";
  const textoPanel = subido ? "En la guagua" : "No ha subido";
  const etiqueta = subido ? "Activo" : "Inactivo";

  const minutosPasados = Math.floor(
    (new Date().getTime() - fecha.getTime()) / 60000
  );

  return (
    <div className="flex flex-col gap-6">

      {/* Top Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Estado Actual */}
        <Card className="rounded-2xl shadow-sm border border-gray-100 h-full">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-800">Estado Actual</h2>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Estado del transporte</p>
              <p className="text-lg font-semibold text-gray-800">{textoPanel}</p>
            </div>
            <Tag className="bg-gray-200 text-gray-600 border-0 rounded-md px-3 py-1 font-medium m-0">{etiqueta}</Tag>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <p>Última actualización: {minutosPasados} minutos</p>
          </div>
        </Card>

        {/* Acción Rápida */}
        <Card className="rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-1">Acción Rápida</h2>
            <p className="text-sm text-gray-500 mb-6">Registra tu entrada o salida de la guagua</p>
          </div>

          <button className="w-full bg-[#00a843] hover:bg-[#009038] text-white font-semibold flex items-center justify-center gap-2 py-4 rounded-xl transition-colors shadow-sm" onClick={ticar}>
            {texto}
          </button>
        </Card>

      </div>

      {/* Avisos y Notificaciones */}
      <Card>
        <h2 className="text-lg font-bold text-gray-800">Rutas Disponibles</h2>
        <p className="text-sm text-gray-500 mb-4
        ">Consulta las rutas y marca tus favoritas</p>
        <div className="flex flex-col gap-4">
          {mockNotifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </div>
      </Card>

      {/* Rutas  */}
      <Card>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-gray-800">Rutas Disponibles</h2>
          <p className="text-sm text-gray-500">Consulta las rutas y marca tus favoritas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {mockRoutes.map((route) => (
              <RouteCard key={route.id} route={route} busStops={route.busStop} />
            ))}
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-gray-800">Ubicación de la Guagua en tiempo real</h2>
          <p className="text-sm text-gray-500">Sigue la ruta y ubicación actual del transporte</p>
          <div className="flex flex-wrap justify-center gap-4">
            <p>Mapa de la guagua</p>
            <MapComponent />
          </div>
        </div>
      </Card>
    </div>
  );
};
