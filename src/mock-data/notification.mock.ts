export type NotificationType = "urgente" | "retraso" | "información";

export interface Notification {
    id:number,
    title:string,
    message:string,
    type:NotificationType,
    date:string,
    read:boolean,
}

export const mockNotifications:Notification[] = [
    {
        id:1,
        title:"Cambio de Ruta",
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        type:"urgente",
        date:"2026-04-11T10:55:00",
        read:false,
    },
    {
        id:2,
        title:"Retraso de la guagua",
        message:"La ruta Centro-Norte tendrá un desvío temporal por obras en la calle principal.",
        type:"retraso",
        date:"2026-04-11T10:55:00",
        read:false,
    },
    {
        id:3,
        title:"Información",
        message:"La ruta Centro-Norte tendrá un desvío temporal por obras en la calle principal.",
        type:"información",
        date:"2026-04-11T10:55:00",
        read:false,
    },
]