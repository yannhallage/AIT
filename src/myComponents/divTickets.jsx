
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Divtickets = () => {
    const [formData1, setFormData1] = useState({
        name: "",
        destination: "",
        date: ""
    });
    const handleSubmit1 = (e) => {
        e.preventDefault();
        alert("Formulaire Livraison:\n" + JSON.stringify(formData1, null, 2));
    };

    const handleChange1 = (e) => {
        setFormData1({
            ...formData1,
            [e.target.name]: e.target.value
        });
    };
    return (
        <>
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
            </div>
        </>
    )
}

export default Divtickets;