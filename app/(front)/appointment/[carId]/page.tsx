'use client'

import { useParams } from "next/navigation"
import { AppointmentForm } from "@/components"
import { AppointmentProps } from "@/constants"

export default function Appointment(){
    
        const { carId } = useParams<AppointmentProps>()
        
    return(
        <main className="relative w-full h-[100vh] overflow-auto pt-20 text-white">
            <AppointmentForm carId={carId} /> 
        </main>
    )
}