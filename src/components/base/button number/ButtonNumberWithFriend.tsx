import clsx from "clsx";

export const ButtonNumberWithFriend = ({
  angle,
  color,
  number,
  left,
  top,
  onClick,
  clicked,
  idUser,
}: {
  angle: number;
  color: string;
  number: number;
  left?: number;
  top?: number;
  onClick?: () => void;
  clicked: number;
  idUser: number;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        rotate: `${angle}deg`,
        marginLeft: `${left}px`,
        marginTop: `${top}px`,
      }}
      className={clsx(
        "text-[20px] w-7 h-9 rounded-full circle_loading",
        color,
        clicked !== 0
          ? clicked === idUser
            ? "border-sky-600 border-[3px]"
            : "bg-red-600 border-[3px]"
          : null
      )}
    >
      {number}
    </button>
  );
};
