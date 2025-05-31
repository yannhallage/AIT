import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Navbar = () => {
    // Formulaire 1
    const [formData1, setFormData1] = useState({
        name: "",
        destination: "",
        date: ""
    });

    // Formulaire 2
    const [formData2, setFormData2] = useState({
        name: "",
        pickup: "",
        date: ""
    });

    const handleChange1 = (e) => {
        setFormData1({
            ...formData1,
            [e.target.name]: e.target.value
        });
    };

    const handleChange2 = (e) => {
        setFormData2({
            ...formData2,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();
        alert("Formulaire Livraison:\n" + JSON.stringify(formData1, null, 2));
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        alert("Formulaire Retour:\n" + JSON.stringify(formData2, null, 2));
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Carte */}
            <MapContainer center={[25.2048, 55.2708]} zoom={12} className="h-full w-full z-0">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[25.2048, 55.2708]}>
                    <Popup>Pickup • 4 min</Popup>
                </Marker>
            </MapContainer>

            {/* Deux formulaires côte à côte */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl mx-auto">
                    {/* Formulaire 1 */}
                    <motion.div className="bg-white flex-1 rounded-t-2xl shadow-2xl border border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="p-4 border-b">
                            <h2 className="text-lg font-semibold text-gray-800">🛵 Livraison</h2>
                            <p className="text-sm text-gray-600">Ajouter votre point de départ et destination</p>
                        </div>
                        <form onSubmit={handleSubmit1} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <Label htmlFor="name1">Nom du passager</Label>
                                <Input
                                    id="name1"
                                    name="name"
                                    placeholder="Nom du passager"
                                    value={formData1.name}
                                    onChange={handleChange1}
                                />
                            </div>
                            <div>
                                <Label htmlFor="destination1">Destination</Label>
                                <Input
                                    id="destination1"
                                    name="destination"
                                    placeholder="Adresse de destination"
                                    value={formData1.destination}
                                    onChange={handleChange1}
                                />
                            </div>
                            <div>
                                <Label htmlFor="date1">Date</Label>
                                <Input
                                    type="date"
                                    id="date1"
                                    name="date"
                                    value={formData1.date}
                                    onChange={handleChange1}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-3 flex items-center justify-between pt-2">
                                <div className="text-sm text-gray-500">Express AED 15</div>
                                <Button type="submit" className="bg-black text-white rounded-full px-6">Ajouter</Button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Formulaire 2 */}
                    <div className="bg-white flex-1 rounded-t-2xl shadow-2xl border border-gray-200">
                        <div className="p-4 border-b">
                            <h2 className="text-lg font-semibold text-gray-800">📦 Retour</h2>
                            <p className="text-sm text-gray-600">Ajouter les informations de retour</p>
                        </div>
                        <form onSubmit={handleSubmit2} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <Label htmlFor="name2">Nom du destinataire</Label>
                                <Input
                                    id="name2"
                                    name="name"
                                    placeholder="Nom du destinataire"
                                    value={formData2.name}
                                    onChange={handleChange2}
                                />
                            </div>
                            <div>
                                <Label htmlFor="pickup2">Adresse de retrait</Label>
                                <Input
                                    id="pickup2"
                                    name="pickup"
                                    placeholder="Lieu de retrait"
                                    value={formData2.pickup}
                                    onChange={handleChange2}
                                />
                            </div>
                            <div>
                                <Label htmlFor="date2">Date</Label>
                                <Input
                                    type="date"
                                    id="date2"
                                    name="date"
                                    value={formData2.date}
                                    onChange={handleChange2}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-3 flex items-center justify-between pt-2">
                                <div className="text-sm text-gray-500">Standard AED 10</div>
                                <Button type="submit" className="bg-black text-white rounded-full px-6">Ajouter</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Boîte d'information en haut à droite */}
            <div className="absolute top-4 right-4 z-20">
                <div className="bg-white rounded-xl shadow-md p-4 border border-gray-300">
                    <h3 className="text-sm font-medium text-gray-700">🔔 Informations</h3>
                    <p className="text-xs text-gray-500">Espace réservé pour d'autres actions futures</p>
                </div>
            </div>
        </div>
    );
};
export default Navbar;