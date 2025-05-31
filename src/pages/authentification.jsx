"use client"
import { motion } from "framer-motion"
import SignIn from "../myComponents/signIn"
import { Context} from '../context/authContext'
import { useState } from "react"



export default function Authentificati() {
    const [utilisation_context, setUtilisation_context] = useState(<SignIn />)
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/2 bg-gradient-to-br from-[#fff7f0] via-[#ffe0b3] to-[#F2C078] text-white flex flex-col justify-center items-center px-8">
                <motion.img
                    src="https://eservices.cgi.ci/avit/resources/images/home/home-public-person.png"
                    alt="Framer"
                    className=""
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <h2 className="text-4xl font-bold leading-tight text-center mt-6 text-[#4b2e20]">
                    
                </h2>
            </div>

            {/*  
             utilisation du context auth
             pour passer de Se connecter a S'inscrire
             */}
             <Context.Provider 
             value={{
                utilisation_context, setUtilisation_context
             }}
             >
                {utilisation_context}
             </Context.Provider>
        </div>
    )
}
