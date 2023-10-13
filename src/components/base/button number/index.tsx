import clsx from 'clsx';

export const ButtonNumber = ({
  angle,
  color,
  number,
  left,
  top,
}: {
  angle: number;
  color: string;
  number: number;
  left?: number;
  top?: number;
}) => {
  return (
    <button
      type="button"
      style={{ rotate: `${angle}deg`, marginLeft: `${left}px`, marginTop: `${top}px`, }}
      className={clsx('text-[20px] w-10', color)}
    >
      {number}
    </button>
  );
};
