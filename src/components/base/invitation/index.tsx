import { SELECT_OPTION_INVITAITON } from "@/components/constants/select-options";
import { handleRandomId } from "@/components/handled";
import { PlayGameLogo } from "@/components/page/play/PlayGameLogo";
import { DataFirebase } from "@/firebase/handle";
import { selector } from "@/redux";
import clsx from "clsx";
import { useSelector } from "react-redux";

export const Invitation = ({ id }: { id: number }) => {
  return (
    <div className="absolute z-30 w-full h-full flex items-center justify-center bg-slate-700/90">
      <div className="p-5 bg-slate-100 border-4 rounded-lg border-slate-400 flex items-center justify-center flex-col">
        <PlayGameLogo />
        <h2 className="py-5">ID {id} has invited you to play.</h2>
        <RenderButton idInviter={id} />
      </div>
    </div>
  );
};

const RenderButton = ({ idInviter }: { idInviter: number }) => {
  const { currentUserID } = useSelector(selector.user);
  return (
    <div className="flex items-center justify-around gap-8">
      {SELECT_OPTION_INVITAITON.map((item) => (
        <button
          key={item.value}
          className={clsx(
            "bg-white py-1 rounded-lg border-[1.5px] w-28 hover:bg-gray-100 shadow-md text-lg",
            item.value === "cancel"
              ? "px-4 border-gray-700 text-gray-800"
              : null,
            item.value === "accept"
              ? "px-2 border-green-400 text-green-600"
              : null
          )}
          onClick={async () => {
            let idGame = 0;
            if (item.value === "cancel") {
              await DataFirebase.InvitationCancel(currentUserID);
            }
            if (item.value === "accept") {
              idGame = handleRandomId();
              await DataFirebase.InvitationAccept(
                handleRandomId(),
                currentUserID,
                idInviter
              );
            }
            DataFirebase.SetIDInvitation(idGame, 0);
          }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
