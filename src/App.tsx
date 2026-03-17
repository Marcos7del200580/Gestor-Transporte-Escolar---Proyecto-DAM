// import { useState } from 'react';
// import { Bus, MapPin, Bell, MessageSquare, School, Users, User } from 'lucide-react';
// import { Button,Input,Checkbox } from "antd";

import { LoginForm } from "./components/feautures/auth/components/LoginForm";


export default function App() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);
  // const [selectedUserType, setSelectedUserType] = useState<'student' | 'family' | 'school' | null>(null);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Login submitted', { email, password, rememberMe, userType: selectedUserType });
  // };

  return (
   <div className="App">
      <LoginForm />
    </div>
  );
}
