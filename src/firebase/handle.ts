import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import type { Dispatch } from 'react';
import type { AnyAction } from 'redux';

import { handleRandomId } from '@/components/handled';
import { UserActions } from '@/redux';

import { db, myFirebase } from '.';

export const DataFirebase = {
  AddNewUserId: async (dispatch: Dispatch<AnyAction>) => {
    const docRef = doc(db, 'Data', 'Id');
    const isCheck = await getDoc(docRef);
    let id = handleRandomId();
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
    dispatch(UserActions.setCurrentUserID(id));
  },
};
