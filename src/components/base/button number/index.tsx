import clsx from 'clsx';

export const ButtonNumber = ({
  angle,
  color,
  number,
  left,
  top,
  onClick,
  clicked,
}: {
  angle: number;
  color: string;
  number: number;
  left?: number;
  top?: number;
  onClick?: () => void;
  clicked: boolean;
}) => {
  return (
    <button
    onClick={onClick}
      type="button"
      style={{ rotate: `${angle}deg`, marginLeft: `${left}px`, marginTop: `${top}px`, }}
      className={clsx('text-[20px] w-7 h-9 rounded-full', color, clicked ? 'border-[3px] border-sky-600 circle_loading' : null)}
    >
      {number}
    </button>
  );
};
