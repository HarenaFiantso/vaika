'use client'

import { useParams } from "next/navigation"

export default function Appointment(){
        const { carId } = useParams()
        
    return(
        <section>
            Appointment of car id: {carId} 
        </section>
    )
}