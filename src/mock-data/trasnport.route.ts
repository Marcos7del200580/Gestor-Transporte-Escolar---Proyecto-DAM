import type { BusStop } from "./transport.busStop.mock";
import { mockBusStops } from "./transport.busStop.mock";

export interface Route {
    id: number;
    name: string;
    description: string;
    start_time: string;
    end_time: string;
    stops: string[];
    favorite: boolean;
    busStop:BusStop[]
}

export const mockRoutes: Route[] = [
    {
        id: 1,
        name: "Colegio 1 - Colegio 2",
        description: "Esta guagua va a los colegios 1 y 2",
        start_time: "07:00",
        end_time: "08:00",
        stops: ["Parada 1", "Parada 2", "Parada 3"],
        favorite: false,
        busStop:mockBusStops
    },
    {
        id: 2,
        name: "Colegio 3 - Colegio 4",
        description: "Esta guagua va a los colegios 3 y 4",
        start_time: "07:00",
        end_time: "08:00",
        stops: ["Parada 1", "Parada 2", "Parada 3"],
        favorite: false,
        busStop:mockBusStops
    },
    {
        id: 3,
        name: "Colegio 5 - Colegio 6",
        description: "Esta guagua va a los colegios 5 y 6",
        start_time: "07:00",
        end_time: "08:00",
        stops: ["Parada 1", "Parada 2", "Parada 3"],
        favorite: false,
        busStop:mockBusStops
    },
]