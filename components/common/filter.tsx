import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function filter() {
  const handleModelChange = (value: string) => {
    console.log(value);
  };

  const handleFuelTypeChange = (value: string) => {
    console.log(value);
  };

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose a type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="SUV">SUV</SelectItem>
        <SelectItem value="SEDAN">SEDAN</SelectItem>
        <SelectItem value="COUPE">COUPE</SelectItem>
        <SelectItem value="ROADSTER">ROADSTER</SelectItem>
        <SelectItem value="SPORT_CAR">SPORT CAR</SelectItem>
        <SelectItem value="BUS">BUS</SelectItem>
      </SelectContent>
    </Select>
  );
}