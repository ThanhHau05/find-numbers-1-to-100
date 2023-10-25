import { useContext, useEffect, useState } from "react";
import {
  handleIDSearch,
  handleInputIDSearch,
  handleInvitePlayers,
} from "../handle";
import { SELECT_OPTION_PLAY_WITH_FRIEND } from "@/components/constants/select-options";
import clsx from "clsx";
import { RiLoader3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { selector } from "@/redux";
import { MainContext } from "@/context/main-context";

export const RenderSelectModePlayWithFriend = () => {
  const { currentUserID } = useSelector(selector.user);
  const [idsearch, setIDSearch] = useState<string>("");
  const [showloading, setShowLoading] = useState(false);
  const [showinfoidsearch, setShowInfoIDSearch] = useState("");

  useEffect(() => {
    if (idsearch.length > 1) setShowLoading(true);
    if (idsearch.length >= 6 || idsearch.length <= 1) setShowLoading(false);
    if (idsearch.length === 6) {
      const handle = async () => {
        const value = await handleIDSearch(+idsearch, currentUserID);
        if (value) {
          setShowInfoIDSearch("Online players");
        } else {
          setShowInfoIDSearch("ID not found or user of this ID is offline");
        }
      };
      handle();
    }
  }, [idsearch]);
  return (
    <div>
      <h2 className="text-2xl text-center mb-5">Play with friend</h2>
      <h2 className="text-center mb-2">Enter Player ID</h2>
      <div className="flex items-center justify-center flex-col">
        <input
          type="number"
          className="outline-none rounded-md py-2 px-4 w-2/3 text-center"
          placeholder="123456"
          maxLength={6}
          value={idsearch}
          onChange={(e) => handleInputIDSearch(+e.target.value, setIDSearch)}
        />
        <div className="mt-4">
          {showloading ? (
            <RiLoader3Fill className="text-2xl animate-spin text-gray-900" />
          ) : null}
          {idsearch.length === 6 ? <h2>{showinfoidsearch}</h2> : null}
        </div>
      </div>
      <RenderButton
        show={showinfoidsearch === "Online players"}
        idInvite={+idsearch}
      />
    </div>
  );
};

const RenderButton = ({
  show,
  idInvite,
}: {
  show: boolean;
  idInvite: number;
}) => {
  const { currentUserID } = useSelector(selector.user);
  const { setValueShowMode } = useContext(MainContext);
  return (
    <div className="flex items-center justify-center mt-5 gap-3">
      {SELECT_OPTION_PLAY_WITH_FRIEND.map((item) => (
        <button
          disabled={item.value === "invite players" && !show}
          key={item.value}
          className={clsx(
            "bg-white px-2 rounded-lg border-[1.5px] py-2 w-32 hover:bg-gray-100 shadow-md",
            item.value === "cancel" ? "border-gray-700 text-gray-800" : null,
            item.value === "invite players"
              ? "border-green-400 text-green-600"
              : null,
            item.value === "invite players" && !show
              ? "opacity-50 cursor-not-allowed"
              : null
          )}
          onClick={() => {
            if (item.value === "cancel") {
              setValueShowMode("");
            }
            if (show) {
              handleInvitePlayers(idInvite, currentUserID);
            }
          }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
