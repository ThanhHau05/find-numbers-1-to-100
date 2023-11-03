import { useEffect, useState } from "react";
import { ContainerPlayGame } from "../play";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import { PlayingModeInformation } from "@/components/constants/select-options";
import { DataActions } from "@/redux";
import { useDispatch } from "react-redux";

export const PlayWithFriend = ({ idGame }: { idGame: number }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<PlayingModeInformation>();
  const [timer, setTimer] = useState("0:00");
  useEffect(() => {
    const docRef = doc(db, "PlayWithFriend", idGame.toString());
    onSnapshot(docRef, (data) => {
      if (data.exists()) {
        setData(data.data() as PlayingModeInformation);
      }
    });
  }, [idGame]);

  useEffect(() => {
    if (data?.time) {
      const interval = setInterval(() => {
        const [minute, second] = data.time.split(":");
        if (second === "00") {
          const time = `${Number(minute) - 1}:59`;
          setTimer(time);
          dispatch(DataActions.setCurrentModeData({ ...data, time }));
        } else {
          const newsecond = Number(second) - 1;
          const time = `${minute}:${
            newsecond < 10 ? `0${newsecond}` : newsecond
          }`;
          setTimer(time);
          dispatch(DataActions.setCurrentModeData({ ...data, time }));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [data?.time]);

  return (
    <div>
      {data?.mode ? <ContainerPlayGame data={data} timer={timer} /> : null}
    </div>
  );
};
