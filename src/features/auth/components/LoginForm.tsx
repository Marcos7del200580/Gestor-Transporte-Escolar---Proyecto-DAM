import { Checkbox, Form, Input, Button } from "antd";
import { BaseChexboxGroup } from "../../../components/chexbox";
import { useState } from "react";
import { BaseModal } from "../../../components/modal";
import { mockUsers } from "../../../mock-data/user.mock";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!selectedRole) {
      setErrorMessage("Por favor, seleccione un rol antes de continuar.");
      setShowErrorModal(true);
      return;
    }

    const user = mockUsers.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password &&
        u.role === selectedRole
    );

    if (!user) {
      setErrorMessage("Credenciales incorrectas o rol incorrecto. Intente nuevamente.");
      setShowErrorModal(true);
      return;
    }

    // Guardar en "sesión" (mock)
    localStorage.setItem("mockUser", JSON.stringify({
      email: user.email,
      name: user.name || "Usuario",
      role: user.role,
    }));

    if (selectedRole === "admin") navigate("/dashboard/admin");
    if (selectedRole === "alumno") navigate("/dashboard/student");
    if (selectedRole === "familia") navigate("/dashboard/family");
  };

  const typeUsers = [
    {
      label: "Administrador",
      role: "admin",
    },
    {
      label: "Alumno",
      role: "alumno",
    },
    {
      label: "Familia",
      role: "familia",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full mx-auto ">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Bienvenido</h2>
        <p className="text-gray-500">Ingresa tus credenciales para acceder</p>
      </div>

      <Form
        name="login"
        layout="vertical"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleSubmit}
        className="flex flex-col gap-4"
      >
        <Form.Item<FieldType>
          label={<span className="font-semibold text-gray-700">Correo Electrónico</span>}
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor introduzca su correo electrónico",
            },
            {
              type: "email",
              message: "El formato de correo no es válido",
            }
          ]}
        >
          <Input
            size="large"
            placeholder="tu@correo.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label={
            <div className="flex justify-between w-full">
              <span className="font-semibold text-gray-700">Contraseña</span>
            </div>
          }
          name="password"
          rules={[
            { required: true, message: "Por favor introduzca su contraseña" },
          ]}
        >
          <Input.Password
            size="large"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => {
              setFormData({
                ...formData,
                password: e.target.value,
              });
            }}
          />
        </Form.Item>

        <div className="mb-4">
          <span className="font-semibold text-gray-700 mb-2 block">Rol de Usuario</span>
          <BaseChexboxGroup
            options={typeUsers.map((users) => users.label)}
            onChange={(value) => {
              // As solo se puede un rol a la vez visualmente en este mock, tomamos el último marcado o primero
              if (value.length > 0) {
                const selected = value[value.length - 1]; // Toma el último seleccionado
                const roleObj = typeUsers.find((us) => us.label === selected);
                setSelectedRole(roleObj?.role || null);
              } else {
                setSelectedRole(null);
              }
            }}
          />
          {selectedRole && <p className="text-sm text-blue-600 mt-1">Has seleccionado: {typeUsers.find(t => t.role === selectedRole)?.label}</p>}
        </div>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Recordar mi sesión</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="w-full bg-blue-600 h-12 rounded-xl text-lg hover:bg-blue-700">
            Iniciar Sesión →
          </Button>
        </Form.Item>
      </Form>

      {/* Demo helper */}
      <div className="mt-8 border-t border-gray-100 pt-6">
        <div className="text-center text-xs text-gray-400 mb-4 tracking-widest uppercase">Demo Users</div>
        <div className="bg-blue-50 p-4 rounded-xl text-sm space-y-2 border border-blue-100 overflow-hidden">
          <p className="flex justify-between text-blue-900 border-b border-blue-100 pb-2"><strong className="w-20">Alumno:</strong> <span className="opacity-75">alumno@escuela.com</span></p>
          <p className="flex justify-between text-blue-900 border-b border-blue-100 pb-2"><strong className="w-20">Familia:</strong> <span className="opacity-75">familia@escuela.com</span></p>
          <p className="flex justify-between text-blue-900 pt-1"><strong className="w-20">Admin:</strong> <span className="opacity-75">admin@escuela.com</span></p>
          <p className="text-center italic text-blue-800/60 mt-2 text-xs">La contraseña no importa en modo demo</p>
        </div>
      </div>

      <BaseModal
        title="Error de Autenticación"
        contentModal={errorMessage}
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
      />
    </div>
  );
};