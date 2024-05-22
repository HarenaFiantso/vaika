'use client'

import { useParams } from "next/navigation";
import React from "react";

const BrandPage: React.FC = () => {
    const {brand} = useParams();  
    return(
        <div>Car with brand {brand} </div>
    )
}
export default BrandPage;
