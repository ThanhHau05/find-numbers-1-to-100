import { SELECT_OPTION_NOTIFICCATION } from "@/components/constants/select-options";
import { handleOutGame } from "@/components/page/play/handle";
import { MainContext } from "@/context/main-context";
import clsx from "clsx";
import { useContext } from "react";
import { TfiClose } from "react-icons/tfi";
import { useDispatch } from "react-redux";

export const NotificationOutgame = () => {
  const { setShowOutGame } = useContext(MainContext);
  return (
    <div className="absolute z-20 w-full h-full flex items-center justify-center bg-white/80">
      <div className="p-5 bg-white rounded-2xl shadow-md border">
        <div className="flex items-center text-xl">
          <h2>Notification</h2>
          <div className="p-2 bg-gray-300 cursor-pointer group hover:bg-slate-500 inline-block rounded-full mr-0 mx-auto">
            <TfiClose
              onClick={() => setShowOutGame(false)}
              className="group-hover:text-white text-sm"
            />
          </div>
        </div>
        <div>
          <h2 className="mr-20 pt-4 pb-8">You want to exit the game ?</h2>
          <RenderButton />
        </div>
      </div>
    </div>
  );
};

const RenderButton = () => {
  const dispatch = useDispatch();
  const { setShowOutGame } = useContext(MainContext);
  return (
    <div className="flex items-center justify-around">
      {SELECT_OPTION_NOTIFICCATION.map((item) => (
        <button
          key={item.value}
          className={clsx(
            "bg-white py-1 rounded-lg border-[1.5px] w-24 hover:bg-gray-100 shadow-md",
            item.value === "cancel"
              ? "px-2 border-gray-700 text-gray-800"
              : null,
            item.value === "yes" ? "px-4 border-green-400 text-green-600" : null
          )}
          onClick={() =>
            handleOutGame({ dispatch, value: item.value, setShowOutGame })
          }
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
