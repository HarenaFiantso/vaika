'use client'

import { useParams } from "next/navigation"
import { AppointmentForm } from "@/components"

export default function Appointment(){
        const { carId } = useParams()
        
    return(
        <main className="relative w-full h-[100vh] overflow-auto pt-20 text-white">
            <AppointmentForm /> 
        </main>
    )
}