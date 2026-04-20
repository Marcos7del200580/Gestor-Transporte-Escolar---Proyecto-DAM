
export interface BusStop {
    id:number,
    name:string,
    description:string,
    arrivalTime:string,
}

export const mockBusStops:BusStop[] = [
    {
        id:1,
        name:"Parada 1",
        description:"Av Parada 1, entre calle 1 y calle 2",
        arrivalTime:"07:00",
    },
    {
        id:2,
        name:"Parada 2",
        description:"Av Parada 2, entre calle 1 y calle 2",
        arrivalTime:"07:10",
    },
    {
        id:3,
        name:"Parada 3",
        description:"Av Parada 3, entre calle 1 y calle 2",
        arrivalTime:"07:20",
    },
    {
        id:4,
        name:"Parada 4",
        description:"Av Parada 4, entre calle 1 y calle 2",
        arrivalTime:"07:30",
    },
]