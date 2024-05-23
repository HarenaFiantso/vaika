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
        <div className="bg-gray-100 w-full h-[85vh]">
            <div className="flex p-6 justify-evenly w-full h-[100%]">
                <div className="w-[25%] p-4 bg-white h-[max-content] rounded-md">
                    <h1 className="font-bold">Filter</h1>
                    <AccordionComponent  title="Keyword" content="search by keyword"/>
                    <AccordionComponent  title="Price" content="search by price"/>
                    <AccordionComponent  title="Kilometers" content="idk"/>
                    <AccordionComponent  title="Name" content="idk"/>
                </div>
                <CarsBrandList brands={brand} />
            </div>
        </div>
    )
}
export default BrandPage;
