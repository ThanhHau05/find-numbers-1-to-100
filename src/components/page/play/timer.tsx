import { BsStopwatchFill } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";

export const Timer = ({ timer, mode }: { timer: string; mode: string }) => {
  return (
    <div className="flex items-center justify-center">
      <BsStopwatchFill className="text-xl text-gray-800 drop-shadow-md" />
      {mode === "unlimited" ? (
        <CgInfinity className="mx-2 text-xl text-gray-800 drop-shadow-md" />
      ) : (
        <h2 className="text-xl pl-2">{timer}</h2>
      )}
    </div>
  );
};
