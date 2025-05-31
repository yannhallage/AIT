// import { ButtonGhost } from "./buttonGhost";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Navbar = () => {

    const [formData, setFormData] = useState({
        destination: "",
        name: "",
        date: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Ticket généré pour: " + JSON.stringify(formData));
    };
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Carte plein écran avec icône de livraison */}
            <MapContainer center={[25.2048, 55.2708]} zoom={12} className="h-full w-full z-0">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[25.2048, 55.2708]}>
                    <Popup>Pickup • 4 min</Popup>
                </Marker>
            </MapContainer>

            {/* Interface type Yango flottante sur toute la largeur */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                <div className="bg-white w-full max-w-5xl mx-auto rounded-t-2xl shadow-2xl border border-gray-200">
                    <div className="p-4 border-b">
                        <h2 className="text-lg font-semibold text-gray-800">🛵 Livraison</h2>
                        <p className="text-sm text-gray-600">Ajouter votre point de départ et destination</p>
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Label htmlFor="name">Nom du passager</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Nom du passager"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="destination">Adresse de destination</Label>
                            <Input
                                id="destination"
                                name="destination"
                                placeholder="Ex: Dubai International Financial Centre"
                                value={formData.destination}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="date">Date</Label>
                            <Input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-1 md:col-span-3 flex items-center justify-between pt-2">
                            <div className="text-sm text-gray-500">Express AED 15</div>
                            <Button type="submit" className="bg-black text-white rounded-full px-6">Add info</Button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Nouvelle div supplémentaire pour un usage futur */}
            <div className="absolute top-4 right-4 z-20">
                <div className="bg-white rounded-xl shadow-md p-4 border border-gray-300">
                    <h3 className="text-sm font-medium text-gray-700">🔔 Informations</h3>
                    <p className="text-xs text-gray-500">Espace réservé pour d'autres actions futures</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar;