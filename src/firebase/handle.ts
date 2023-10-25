import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import type { Dispatch } from "react";
import type { AnyAction } from "redux";

import { handleRandomId } from "@/components/handled";
import { UserActions } from "@/redux";

import { db, myFirebase } from ".";
import { SelectOptionUserInfo } from "@/components/constants/select-options";

export const DataFirebase = {
  AddNewUserId: async (dispatch: Dispatch<AnyAction>) => {
    const docRef = doc(db, "Data", "Id");
    const isCheck = await getDoc(docRef);
    let id = handleRandomId();
    const idRef = doc(db, "Users", id.toString());
    const isCheckId = await getDoc(idRef);
    if (!isCheck.exists()) {
      await setDoc(docRef, { id: [id] }, { merge: true });
    } else {
      const listID: number[] = isCheck.data().id;
      while (listID.includes(id)) {
        id = handleRandomId();
      }
      await updateDoc(docRef, {
        id: myFirebase.firestore.FieldValue.arrayUnion(id),
      });
    }
    if (!isCheckId.exists()) {
      const data: SelectOptionUserInfo = { status: true, invitation: 0 };
      await setDoc(idRef, data, { merge: true });
    }
    dispatch(UserActions.setCurrentUserID(id));
  },
  UpdateUserStatus: async (id: number, status: boolean) => {
    const idRef = doc(db, "Users", id.toString());
    await updateDoc(idRef, { status });
  },
  GetIDList: async (): Promise<number[]> => {
    const docRef = doc(db, "Data", "Id");
    const isCheck = await getDoc(docRef);
    if (isCheck.exists()) {
      return isCheck.data().id;
    }
    return [];
  },
  GetUserInfo: async (id: number) => {
    const idRef = doc(db, "Users", id.toString());
    const isCheck = await getDoc(idRef);
    if (isCheck.exists()) {
      return isCheck.data().status;
    }
    return null;
  },
  GetInvitationUser: async (id: number) => {
    const docRef = doc(db, "Users", id.toString());
    const isCheck = await getDoc(docRef);
    if (isCheck.exists()) {
      return isCheck.data().invitation;
    }
  },
  SetInvitationUser: async (id: number, IDInvitation: number) => {
    const docRef = doc(db, "Users", id.toString());
    const isCheck = await getDoc(docRef);
    if (isCheck.exists()) {
      updateDoc(docRef, { ...isCheck.data(), invitation: IDInvitation });
    }
  },
};
