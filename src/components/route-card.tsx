import { Card, Button, Modal } from "antd";
import { useState } from "react";
import type { Route } from "../mock-data/trasnport.route";
import type { BusStop } from "../mock-data/transport.busStop.mock";
import { mockBusStops } from "../mock-data/transport.busStop.mock";
import { Bus, Star, MapPin, Clock } from "lucide-react";
import { CustomTooltip } from "./CustomTooltip";

interface Props {
    route: Route;
    busStops: BusStop[];
}




export const RouteCard = ({ route }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const change = isFavorite ? "text-yellow-500" : "text-gray-500";
    const title: string = isFavorite ? "Desenmarcar como favorita" : "Marcar como favorita";


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    }



    return (
        <Card className="w-80">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold text-gray-800">{route.name}</h2>
                    <CustomTooltip title={title}>
                        <button className="" onClick={handleFavorite}><Star className={`w-5 h-5 ${change}`} /></button>
                    </CustomTooltip>

                </div>
                <p className="text-sm text-gray-500">Hora de salida: {route.start_time}</p>
                <p className="text-sm text-gray-500">Hora de llegada: {route.end_time}</p>
                <p className="text-sm text-gray-500">Paradas: {route.stops.length}</p>
                <Button type="primary" onClick={showModal}>
                    Ver Paradas
                </Button>
                <Modal
                    title={
                        <div className="flex items-center gap-2">
                            <Bus className="w-5 h-5 text-blue-500" />
                            <span>{route.name}</span>
                        </div>
                    }
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Información completa de la ruta y sus paradas</p>
                    <div className="flex justify-center gap-4 m-4">
                        <div className="bg-blue-50 p-4 rounded-xl ">
                            <p className="text-xs">Hora de salida</p>
                            <p className="text-center font-bold text-blue-600">{route.start_time}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl">
                            <p className="text-xs">Hora de llegada</p>
                            <p className="text-center font-bold text-green-600">{route.end_time}</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-xl">
                            <p className="text-xs">Paradas</p>
                            <p className="text-center font-bold text-red-600">{route.stops.length}</p>
                        </div>
                    </div>


                    <div>
                        <div className="flex items-center gap-2 mb-4">
                           <MapPin className="w-5 h-5 text-blue-500"/> 
                           <p className="text-lg">Paradas de la Ruta</p>
                        </div>
                        
                        <div>
                            <div className="flex flex-col gap-4">
                                {mockBusStops.map((busStop) => (
                                    <div className="border border-blue-200 rounded-xl p-4">
                                        <p className="font-bold text-lg">{busStop.name}</p>
                                        <p className="text-sm text-gray-500">{busStop.description}</p>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3 h-3 text-blue-500"/>
                                            <p>{busStop.arrivalTime}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </Modal>
            </div>
        </Card>
    );
}