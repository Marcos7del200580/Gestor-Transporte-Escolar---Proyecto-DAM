import { NOTIFICATION_TYPE_CONFIG } from "./notification-card.constants";
import type { Notification, NotificationType } from "../mock-data/notification.mock";


interface Props {
    notification: Notification
}


export const NotificationCard = ({ notification }: Props) => {
    const config = NOTIFICATION_TYPE_CONFIG[notification.type as NotificationType];
    console.log(config.label)
    return (
        <div className={`flex justify-between items-start p-4 rounded-xl border ${config.bgColor} ${config.borderColor}`}>

            <div className="flex gap-3 items-start">
                <span className="text-xl mt-0.5">{config.icon}</span>
                <div>
                    <p className="font-semibold text-gray-800">{notification.title}</p>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.date}</p>
                </div>
            </div>

            <span className={`${config.textColor} font-semibold border border-${config.textColor}-200 rounded-xl p-2`}>
                {config.label}
            </span>

        </div>
    )
}