import clsx from 'clsx';

export const ButtonHome = ({
  title,
  onClick,
  children,
}: {
  title: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        'flex items-center justify-center rounded-lg border-4 border-slate-400 bg-slate-100 p-3 text-xl uppercase shadow-lg transition-all hover:border-gray-600 hover:bg-zinc-200 hover:shadow-xl',
        children ? 'flex-col' : null,
      )}
    >
      {children}
      {title}
    </button>
  );
};
