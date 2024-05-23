import mock from '@/lib/data/brandCarMock.json';
import { brandProps } from '@/lib/type';

export default function CarsBrandList({ brands }: brandProps) {
  return (
    <div className='h-full w-[70%]'>
      <h1 className='text-xl font-bold'>
        Our {brands} cars ({mock.length} results)
      </h1>
      <p className='text-xs'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus in voluptatum illo nostrum ipsum
        consequatur magnam quo id cupiditate, dolor earum accusantium facere voluptate quia expedita.
      </p>
      <div className='my-5 h-0.5 border-t border-gray-400'></div>
      <div className='grid h-[80%] grid-cols-4 gap-3 overflow-auto '>
        {mock.map((car, index) => (
          <div key={index} className='h-[max-content] w-[80%] overflow-auto rounded-md bg-white shadow-md'>
            <div className='overflow-hidden'>
              <img src={car.img} alt="car's image" className='w-[100%]' />
            </div>
            <div className='p-2'>
              <p className='text-xs font-bold'> {car.name} </p>
              <p className='text-xs'> {car.brand} </p>
              <p className='text-xs'> {car.kilometers} </p>

              <div className='mt-[1rem]'>
                <p className='text-xs font-bold'> {car.price} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
