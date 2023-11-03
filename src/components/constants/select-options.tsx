import type { ReactNode } from "react";
import { CgInfinity } from "react-icons/cg";
import type { IconType } from "react-icons/lib";

export interface SelectOptionUserInfo {
  status: boolean;
  invitation: number;
  idPlayWithFriend: number;
}

export interface SelectOptionObject {
  title: string;
  value: string;
}

export interface SelectOptionMode {
  title: string;
  Title2: IconType | string;
  value: string;
  time: string;
}

export interface SelectOptionContent {
  title: string;
  children: ReactNode;
  value: string;
}

export interface PlayingModeInformation {
  mode: string;
  time: string;
  arrayNumber: SelectOptionNumber[];
  numberToSearch: number;
}

export interface SelectOptionNumber {
  number: number;
  angle: number;
  color: string;
  left: number;
  top: number;
  clicked: number;
  idUser?: number;
}

export const SELECT_OPTION_BUTTON_FINISH_GAME: SelectOptionObject[] = [
  {
    title: "PLAY AGAIN",
    value: "play again",
  },
  {
    title: "HOME",
    value: "home",
  },
];

export const SELECT_OPTION_NOTIFICCATION: SelectOptionObject[] = [
  {
    title: "Cancel",
    value: "cancel",
  },
  {
    title: "Yes",
    value: "yes",
  },
];

export const SELECT_OPTION_INVITAITON: SelectOptionObject[] = [
  {
    title: "Cancel",
    value: "cancel",
  },
  {
    title: "Accept",
    value: "accept",
  },
];

export const SELECT_OPTION_PLAY_WITH_FRIEND: SelectOptionObject[] = [
  {
    title: "Cancel",
    value: "cancel",
  },
  {
    title: "Invite players",
    value: "invite players",
  },
];

export const SELECT_OPTION_MODE_SANGLE_PLAYER: SelectOptionMode[] = [
  {
    title: "Unlimited time",
    Title2: CgInfinity,
    value: "unlimited",
    time: "0",
  },
  {
    title: "Easy",
    Title2: "10 min",
    value: "easy",
    time: "10:00",
  },
  {
    title: "Medium",
    Title2: "5 min",
    value: "medium",
    time: "5:00",
  },
  {
    title: "Difficult",
    Title2: "3 min",
    value: "difficult",
    time: "3:00",
  },
];

export const BUTTON_HOME: SelectOptionContent[] = [
  {
    //Single Player
    title: "Select Mode",
    children: (
      <div className="relative mb-2 h-24 w-full">
        <div className="absolute left-2.5 inline-block rotate-12 text-4xl text-amber-500">
          <div className="circle_text_number absolute -left-2.5 h-full w-14 border-[5px] border-indigo-600" />
          19
        </div>
        <div className="absolute right-0 top-1.5 inline-block -rotate-45 text-4xl text-pink-500">
          54
        </div>
        <div className="absolute -bottom-1.5 left-10 inline-block -rotate-12 text-4xl text-red-800">
          31
        </div>
      </div>
    ),
    value: "single",
  },
  // {
  //   title: "Play with Friends",
  //   children: (
  //     <div className="relative flex h-24 w-full flex-col justify-around">
  //       <div className="inline-block rotate-12 pl-2 text-4xl leading-8 text-green-500">
  //         51
  //       </div>
  //       <div className="flex w-full justify-around">
  //         <div className="relative text-4xl">
  //           <div className="circle_text_number absolute -left-2 h-full w-[60px] border-[5px] border-red-600" />
  //           49
  //         </div>
  //         <div className="relative text-4xl text-orange-500">
  //           <div className="circle_text_number absolute -left-2 h-full w-[60px] rotate-[20deg] border-[5px] border-indigo-600" />
  //           50
  //         </div>
  //       </div>
  //     </div>
  //   ),
  //   value: "friends",
  // },
];
