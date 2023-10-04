import { Images } from '@/components/images';

import { RenderButtonHome } from './RenderButtonHome';

export const ContainerHome = () => {
  return (
    <div className="absolute z-20 flex h-full w-full flex-col items-center justify-evenly p-5">
      <div className="flex gap-4 text-4xl drop-shadow-md">
        <img
          src={Images.HandDrawnCircle.src}
          alt=""
          className="absolute -left-9 top-[-30px] h-28 w-48 rounded-full drop-shadow-md"
        />
        <h2 className="text-green-500">Number</h2>
        <h2>Hunt</h2>
      </div>
      <RenderButtonHome />
    </div>
  );
};
