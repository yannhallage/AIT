import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CardDemo } from "./cardDemo";
import Divtickets from "./divTickets";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DivBusVerification from "./divBusVerification";

const Navbar = () => {
    const [verification_divticket, setVerification_divticket] = useState(false);

    return (

        <div className="relative h-screen w-screen overflow-hidden">

            {/* Navbar horizontale */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-[#f00] p-4 shadow-md flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <img src="https://avatars.mds.yandex.net/get-lpc/10116223/867eda96-a281-4bc1-abaf-fa261004e1a1/orig" alt="" srcset="" />
                </h1>
                <Input placeholder="🔍 Rechercher..." className="w-64 bg-white" />
                <Button
                    onClick={() => {
                        console.log('deconnection')
                    }}
                >
                    sign out
                </Button>
            </div>

            <div className="absolute top-[86px] left-4 z-10">
                {
                    verification_divticket ? <DivBusVerification /> : ''
                }
            </div>
            {/* Carte */}
            <MapContainer center={[5.334152, -4.021490]} zoom={12} className="h-full w-full z-0">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker
                    position={[5.334152, -4.021490]}
                    eventHandlers={{
                        click: () => {
                            setVerification_divticket(!verification_divticket);
                            console.log(verification_divticket);
                        },
                    }}
                >
                    <Popup>Pickup • 4 min</Popup>
                </Marker>
                <Marker
                    position={[48.8609074, 2.2712711]}
                    eventHandlers={{
                        click: () => {
                            setVerification_divticket(!verification_divticket);
                            console.log(verification_divticket);
                        },
                    }}
                >
                    <Popup>Pickup • 4 min</Popup>
                </Marker>
            </MapContainer>

            {/* Div ticket si actif */}
            <div className="absolute bottom-0 left-70 right-0 z-10 p-4">
                {verification_divticket ? <Divtickets /> : ""}
            </div>

            {/* Carte info */}
            <motion.div className="absolute top-[100px] right-4 z-20"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <CardDemo />
            </motion.div>
        </div>
    );
};


export default Navbar;
