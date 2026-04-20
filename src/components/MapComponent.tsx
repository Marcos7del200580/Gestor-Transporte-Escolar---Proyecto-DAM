import {Marker,MapContainer,TileLayer,Popup} from "react-leaflet";

const containerStyle = {
    width: '100%',
    height: '400px'
};

const position: [number,number] = [21.0227, -102.2983];

const MapComponent = () => {
    return (
        <MapContainer center={position} zoom={13} style={containerStyle}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>Ubicación de la guagua</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;