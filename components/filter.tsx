import { CustomSelect } from '@/components';
import { fuels, yearsOfProduction } from '@/constants';

export default function filter() {
  const handleModelChange = (value: string) => {
    console.log(value);
  };

  const handleFuelTypeChange = (value: string) => {
    console.log(value);
  };

  return (
    <div className='flex w-full items-center space-x-2 md:w-fit'>
      <CustomSelect
        label='Choose Model'
        onChange={handleModelChange}
        options={yearsOfProduction}
        containerStyle='z-40 border bg-white dark:bg-slate-800 dark:border-slate-700 rounded-md'
        name='model'
      />
      <CustomSelect
        label='Choose Fuel Type'
        onChange={handleFuelTypeChange}
        options={fuels}
        containerStyle='border bg-white dark:bg-slate-800 dark:border-slate-700 rounded-md'
        name='fueltype'
      />
    </div>
  );
}
