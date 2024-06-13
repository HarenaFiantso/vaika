import { Loader } from '@/components';
import { MouseEventHandler, ReactNode } from 'react';

type CustomButtonProps = {
  title: string;
  type: 'button' | 'submit' | 'reset';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode | undefined;
  containerStyle?: string;
  isLoading?: boolean;
};

export default function CustomButton({ title, handleClick, containerStyle, type, isLoading, icon }: CustomButtonProps) {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isLoading}
      className={`dark:bg-gradient-radial flex items-center justify-center rounded-full border bg-blue-500 from-slate-700 to-slate-900 px-4 py-1.5 text-center capitalize outline-none dark:border-zinc-600 dark:text-slate-300 md:px-6 md:py-2.5 ${containerStyle} gap-2 ${isLoading && 'bg-opacity-90'}`}
    >
      <span>{title}</span>
      {isLoading && <Loader />}
      {icon && icon}
    </button>
  );
}
