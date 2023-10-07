import type { ReactNode } from 'react';
import { CgInfinity } from 'react-icons/cg';
import type { IconType } from 'react-icons/lib';

export interface SelectOptionMode {
  title: string;
  Title2: IconType | string;
  value: string;
}

export interface SelectOptionContent {
  title: string;
  children: ReactNode;
  value: string;
}

export interface PlayingModeInformation {
  id?: string;
  mode: string;
}

export const SELECT_OPTION_MODE_SANGLE_PLAYER: SelectOptionMode[] = [
  {
    title: 'Unlimited time',
    Title2: CgInfinity,
    value: 'unlimited',
  },
  {
    title: 'Easy',
    Title2: '5 min',
    value: 'easy',
  },
  {
    title: 'Medium',
    Title2: '3 min',
    value: 'medium',
  },
  {
    title: 'Difficult',
    Title2: '1 min',
    value: 'difficult',
  },
];

export const BUTTON_HOME: SelectOptionContent[] = [
  {
    title: 'Single Player',
    children: (
      <div className="relative mb-2 h-24 w-full">
        <div className="absolute left-2.5 inline-block rotate-12 text-4xl text-amber-500">
          <div className="circle_text_number absolute -left-2.5 h-full w-14 border-[5px] border-indigo-600" />
          19
        </div>
        <div className="absolute right-2.5 top-1.5 inline-block -rotate-45 text-4xl text-pink-500">
          54
        </div>
        <div className="absolute -bottom-1.5 left-10 inline-block -rotate-12 text-4xl text-red-800">
          31
        </div>
      </div>
    ),
    value: 'single',
  },
  {
    title: 'Play with Friends',
    children: (
      <div className="relative flex h-24 w-full flex-col justify-around">
        <div className="inline-block rotate-12 pl-2 text-4xl leading-8 text-green-500">
          51
        </div>
        <div className="flex w-full justify-around">
          <div className="relative text-4xl">
            <div className="circle_text_number absolute -left-2 h-full w-[60px] border-[5px] border-red-600" />
            49
          </div>
          <div className="relative text-4xl text-orange-500">
            <div className="circle_text_number absolute -left-2 h-full w-[60px] rotate-[20deg] border-[5px] border-indigo-600" />
            50
          </div>
        </div>
      </div>
    ),
    value: 'friends',
  },
];