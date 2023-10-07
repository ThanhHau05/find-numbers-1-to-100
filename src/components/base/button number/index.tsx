import clsx from 'clsx';

export const ButtonNumber = ({
  angle,
  color,
}: {
  angle: number;
  color: string;
}) => {
  return (
    <button
      type="button"
      style={{ rotate: `${angle}deg` }}
      className={clsx('text-2xl', color)}
    >
      1
    </button>
  );
};
