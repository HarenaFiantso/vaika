import mock from "@/brandCarMock.json";
interface brandProps{
    brands: string;
}

export default function CarsBrandList({brands}: brandProps){
    return(
        <div className="w-[70%] h-full">
            <h1 className="text-xl font-bold">Our {brands} cars ({mock.length} results) </h1>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus in voluptatum illo nostrum ipsum consequatur magnam quo id cupiditate, dolor earum accusantium facere voluptate quia expedita.</p>
            <div className="h-0.5 border-t border-gray-400 my-5"></div>
            <div className="grid grid-cols-4 gap-3 overflow-auto h-[80%] ">
                {mock.map((car, index) => (
                    <div key={index} className="rounded-md overflow-auto h-[max-content] bg-white shadow-md w-[80%]">
                        <div className="overflow-hidden">
                            <img src={ car.img } alt="car's image" className="w-[100%]" />
                        </div>
                        <div className="p-2">
                            <p className="font-bold text-xs"> {car.name} </p>
                            <p className="text-xs"> { car.brand } </p>
                            <p className="text-xs" > { car.kilometers } </p>

                            <div className="mt-[1rem]">
                                <p className="font-bold text-xs"> {car.price} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}