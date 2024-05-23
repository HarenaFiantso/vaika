interface brandProps{
    brands: string;
}

export default function CarsBrandList({brands}: brandProps){
    return(
        <div>
            <h1 className="text-xl font-bold">Our {brands} Cars </h1>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus in voluptatum illo nostrum ipsum consequatur magnam quo id cupiditate, dolor earum accusantium facere voluptate quia expedita.</p>
            <div className="h-0.5 border-t border-gray-400 my-5"></div>
            <div>
                list of car with the same brand
            </div>
        </div>
    )
}