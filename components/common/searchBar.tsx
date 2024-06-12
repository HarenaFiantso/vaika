import { TbBrandOnlyfans } from 'react-icons/tb';
import { ModelTraining, Search } from '@mui/icons-material';

type SearchBarProps = {
  setSearchBrand: (brand: string) => void;
  setSearchModel: (model: string) => void;
};

export default function SearchBar({ setSearchBrand, setSearchModel }: SearchBarProps) {
  return (
    <form
      className="flex w-full max-w-3xl flex-col items-center justify-center gap-2 rounded border bg-white  px-2 dark:border-slate-700 dark:bg-slate-800 md:flex-row">
      <div className="relative flex w-full items-center px-4 py-2.5 dark:border-slate-700 md:border-r ">
        <TbBrandOnlyfans />
        <input
          type="text"
          placeholder="Search a brand..."
          className="flex-1 bg-transparent pl-4 text-xs text-gray-400 outline-none"
          onChange={(e) => setSearchBrand(e.target.value)}
        />
        <button type="submit">
          <Search />
        </button>
      </div>
      <div className="flex w-full items-center px-4 py-2.5 ">
        <ModelTraining />
        <input
          type="text"
          placeholder="Search a model..."
          className="flex-1 bg-transparent pl-4 text-xs text-gray-400 outline-none"
          onChange={(e) => setSearchModel(e.target.value)}
        />
      </div>
      <button type="submit">
        <Search />
      </button>
    </form>
  );
}