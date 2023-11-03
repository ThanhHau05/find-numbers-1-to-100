import { BasicColors } from "@/components/base/basic colors";
import { SelectOptionNumber } from "@/components/constants/select-options";
import { DataFirebase } from "@/firebase/handle";

export const handleCopyID = (
  value: number,
  setCopy: (value: boolean) => void
) => {
  navigator.clipboard.writeText(value.toString()).then(() => {
    setCopy(true);
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1500);
    return () => clearTimeout(timer);
  });
};

export const handleCreateNewGame = () => {
  let checkLeft = false;
  let i = 0;
  let newGame: SelectOptionNumber[] = Array(100)
    .fill(null)
    .map((_, index) => {
      let randomIndex = Math.floor(Math.random() * BasicColors.length);
      randomIndex = Math.min(randomIndex, BasicColors.length - 1);
      const angle = Math.random() * 180;
      return {
        number: index + 1,
        angle,
        color: BasicColors[randomIndex] ?? "text-black",
        left: 0,
        top: 0,
        clicked: 0,
      };
    });
  newGame = newGame.sort(() => Math.random() - 0.5);
  newGame = newGame.map((item) => {
    const check = Math.floor(Math.random() * 5);
    if (!checkLeft && check > 4) checkLeft = true;
    else if (checkLeft && check > 4) checkLeft = false;
    i++;
    if (i > 6) i = 1;
    return {
      ...item,
      left: checkLeft && i < 6 ? Math.random() * 80 : check > 2 ? 30 : 0,
      top: !checkLeft && i < 6 ? Math.random() * 60 : 0,
    };
  });
  return newGame;
};

function handleVisibilityChange(currentUserID: number): (event: Event) => void {
  return () => {
    if (document.hidden) {
      DataFirebase.UpdateUserStatus(currentUserID, false);
    } else {
      DataFirebase.UpdateUserStatus(currentUserID, true);
    }
  };
}

export const handleUpdateUserStatus = async (currentUserID: number) => {
  DataFirebase.UpdateUserStatus(currentUserID, true);

  document.addEventListener(
    "visibilitychange",
    handleVisibilityChange(currentUserID)
  );

  window.addEventListener("beforeunload", () => {
    DataFirebase.UpdateUserStatus(currentUserID, false);
  });

  return () => {
    DataFirebase.UpdateUserStatus(currentUserID, false);
    document.removeEventListener(
      "visibilitychange",
      handleVisibilityChange(currentUserID)
    );
    window.removeEventListener("beforeunload", () => {
      DataFirebase.UpdateUserStatus(currentUserID, false);
    });
  };
};

export const handleInputIDSearch = (
  id: number,
  setIDSearch: (id: string) => void
) => {
  if (id.toString().length <= 6) {
    setIDSearch(id.toString());
  }
};

export const handleIDSearch = async (id: number, idUser: number) => {
  const IDList = await DataFirebase.GetIDList();
  if (IDList.length !== 0 && IDList.includes(id) && id !== idUser) {
    const status = await DataFirebase.GetUserInfo(id);
    if (status) {
      return true;
    }
  }
  return false;
};

export const handleInvitePlayers = async (
  idInvite: number,
  idUser: number,
  setShowInfo: (value: string) => void
) => {
  const invitation = await DataFirebase.GetInvitationUser(idInvite);
  if (invitation === 0) {
    await DataFirebase.SetInvitationUser(idInvite, idUser);
    setShowInfo("Invite successfully!");
    return;
  } else if (invitation === idUser) {
    setShowInfo("You have already invited this player!");
    return;
  }
  setShowInfo("Invite failed!");
};
