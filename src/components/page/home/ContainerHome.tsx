import { Images } from '@/components/images';

import { ButtonHome } from './ButtonHome';

export const ContainerHome = () => {
  return (
    <div className="absolute z-20 flex h-full w-full flex-col items-center justify-evenly p-5">
      <div className="flex gap-4 text-4xl drop-shadow-md">
        <img
          src={Images.HandDrawnCircle.src}
          alt=""
          className="absolute -left-9 top-[-30px] h-28 w-48 rounded-full drop-shadow-md"
        />
        {/* <div className="circle_text_number absolute " /> */}
        <h2 className="text-green-500">Number</h2>
        <h2>Hunt</h2>
      </div>
      <div className="mb-20 grid grid-cols-2 gap-2">
        <ButtonSinglePlayer />
        <ButtonPlayWithFriends />
      </div>
    </div>
  );
};

const ButtonSinglePlayer = () => {
  return (
    <ButtonHome title="Single Player">
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
    </ButtonHome>
  );
};

const ButtonPlayWithFriends = () => {
  return (
    <ButtonHome title="Play with Friends">
      <div className="relative flex h-24 w-full flex-col justify-around">
        <div className="inline-block rotate-12 pl-2 text-4xl leading-8 text-green-500">
          51
        </div>
        <div className="flex w-full justify-around">
          <div className="relative text-4xl">
            <div className="circle_text_number absolute -left-2.5 h-full w-[60px] border-[5px] border-red-600" />
            49
          </div>
          <div className="relative text-4xl text-orange-500">
            <div className="circle_text_number absolute -left-2 h-full w-[60px] rotate-[20deg] border-[5px] border-indigo-600" />
            50
          </div>
        </div>
      </div>
    </ButtonHome>
  );
};
