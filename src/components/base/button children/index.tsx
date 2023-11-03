import clsx from "clsx";

export const ButtonChildren = ({
  title,
  onClick,
  children,
  childrenTop,
  textLarge,
  borderLarge,
  hoverTextColor,
  hoverBgColor,
  flexCenter,
}: {
  title: string;
  onClick?: () => void;
  children: React.ReactNode;
  childrenTop?: boolean;
  textLarge?: boolean;
  borderLarge?: boolean;
  hoverTextColor?: boolean;
  hoverBgColor?: boolean;
  flexCenter?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        "group flex flex-col items-center rounded-lg border-slate-400 bg-slate-100 p-2 uppercase shadow-lg transition-all hover:border-gray-600  hover:shadow-xl px-5",
        textLarge ? "text-xl" : "text-xs",
        borderLarge ? "border-4" : "border-2",
        hoverTextColor ? "hover:text-white" : null,
        hoverBgColor ? "hover:bg-gray-800" : "hover:bg-zinc-200",
        flexCenter ? "justify-center" : "justify-between"
      )}
    >
      {childrenTop ? (
        <>
          {children}
          {title}
        </>
      ) : (
        <>
          {title}
          {children}
        </>
      )}
    </button>
  );
};
