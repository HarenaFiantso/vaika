'use client'

import { useParams } from "next/navigation";
import React from "react";
import CarsBrandList from "../carList";
import AccordionComponent from "@/components/accordion";

interface Car {
    name: string,
    brand: string
}

const BrandPage: React.FC = () => {
    const {brand} = useParams();  
    return(
        <div className="bg-gray-200 w-full h-[70vh]">
            <div className="flex gap-3 p-5">
                <div className="w-[30%] p-4 bg-white">
                    <h1 className="font-bold">Filter</h1>
                    <AccordionComponent  title="Keyword" content="search by keyword"/>
                    <AccordionComponent  title="Price" content="search by price"/>
                    <AccordionComponent  title="Kilometers" content="idk"/>
                </div>
                <CarsBrandList brands={brand} />
            </div>
        </div>
    )
}
export default BrandPage;
