
import { motion } from "framer-motion";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardDemo } from "./cardDemo";
import Divtickets from "./divTickets";
import { useState } from "react";


const Navbar = () => {
    const [verification_divticket, setVerification_divticket] = useState(false)
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Carte */}
            <MapContainer center={[25.2048, 55.2708]} zoom={12} className="h-full w-full z-0">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[25.2048, 55.2708]}
                    eventHandlers={{
                        click: () => {
                            setVerification_divticket(!verification_divticket)
                            console.log(verification_divticket)
                        }
                    }}
                >
                    <Popup>Pickup • 4 min</Popup>
                </Marker>
            </MapContainer>

            {/* Deux formulaires côte à côte */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                {
                    verification_divticket ? <Divtickets /> : ''
                }
            </div>

            {/* Boîte d'information en haut à droite */}
            <div className="absolute top-4 right-4 z-20">
                <CardDemo />
            </div>
        </div>
    );
};
export default Navbar;