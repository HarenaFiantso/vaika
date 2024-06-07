"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { carApi } from '@/services/vaika-api';
import { Car } from '@vaika-api/typescript-client';

const CardDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [car, setCar] = useState<Car | undefined>();

  useEffect(() => {
    const car = carApi.getACarById(id).then((data) => setCar(data.data));

    toast.promise(car, {
      loading: "Fetching car details...",
      success: "Fetched car details.",
      error: (err) => err.message,
    });
  }, [id]);

  return (
    <section className="relative max-w-[1440px] mx-auto pt-16 md:pt-24 p-2">
      {car ? (
        <div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 w-full">
            <div className="bg-gray-100 dark:bg-gray-900 md:w-1/2 rounded-2xl">
              <Image
                src={`${car.images?.map(image => image.url)}`}
                alt="car"
                width={1024}
                height={1024}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col w-full max-w-sm p-4">
              <h2 className="font-bold text-lg md:text-3xl">{car.name}</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {car.model}
              </p>
              <div className="space-y-2 md:space-y-4 mt-4 md:mt-6 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="w-1/2">
                    <h4 className="md:text-lg font-semibold capitalize">
                      Engine
                    </h4>
                    <p className="font-normal">{car.model}</p>
                  </div>
                  <div className="w-1/2">
                    <h4 className="md:text-lg font-semibold capitalize text-left">
                      Motor type
                    </h4>
                    <p className="font-normal">{car.motor_type?.name}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-1/2">
                    <h4 className="md:text-lg font-semibold capitalize">
                      Color
                    </h4>
                    <p className="font-normal">{car.color}</p>
                  </div>
                  <div className="w-1/2">
                    <h4 className="md:text-lg font-semibold capitalize">
                      Power
                    </h4>
                    <p className="font-normal">{car.power}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="w-1/2">
                    <h4 className="md:text-lg font-semibold capitalize">
                      Type
                    </h4>
                    <p className="font-normal">{car.type?.name}</p>
                  </div>
                  <div className="w-1/2">
                    <h4 className="md:text-lg font-semibold capitalize">
                      Place number
                    </h4>
                    <p className="font-normal">{car.place_number} persons</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 md:p-6 mt-4 md:mt-6 rounded-2xl">
            <h3 className="capitalize font-bold text-lg md:text-2xl">
              About the {car.name}
            </h3>
            <p className="mt-1.5 text-gray-800 dark:text-gray-400 text-normal md:text-lg">
              {car.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
              <div className="gap-2 w-full ">
                <h4 className="text-lg md:text-xl"> 👨 Creator</h4>
                <p className="text-sm md:text-lg">{car.brand?.name}</p>
              </div>
              <div className="gap-2 w-full">
                <h4 className="text-lg md:text-xl"> 💸 Price</h4>
                <p className="text-sm md:text-lg">${car.price} per day</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default CardDetails;
