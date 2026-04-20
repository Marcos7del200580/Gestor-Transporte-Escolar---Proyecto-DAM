import type { NotificationType } from "../mock-data/notification.mock";

export const NOTIFICATION_TYPE_CONFIG: Record<NotificationType, {
    bgColor: string;
    borderColor: string;
    textColor: string;
    icon: string;
    label: string;
} > = {
   "urgente": {
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    textColor: "text-red-600",
    icon: "🚨",
    label: "Urgente",
   },
   "retraso": {
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-100",
    textColor: "text-yellow-600",
    icon: "⏰",
    label: "Retraso",
   },
   "información": {
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    textColor: "text-blue-600",
    icon: "ℹ️",
    label: "Información",
   },
}       

