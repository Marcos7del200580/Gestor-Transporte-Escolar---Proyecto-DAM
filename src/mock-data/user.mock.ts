export interface Users {
   id:number,
   name:string
   email:string
   password:string
   role:string
}

export const mockUsers:Users[] = [
  {
    id: 1,
    name: "Administrador",
    email: "admin@test.com",
    password: "123456",
    role: "admin",
  },
  {
    id: 2,
    name: "Familia Pérez",
    email: "family@test.com",
    password: "123456",
    role: "family",
  },
  {
    id: 3,
    name: "Alumno Juan",
    email: "student@test.com",
    password: "123456",
    role: "student",
  },
];