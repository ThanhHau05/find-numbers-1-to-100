import { Images } from "@/components/images";

export const PlayGameLogo = () => {
  return (
    <div className="inline-block">
      <div className="flex gap-2 text-lg drop-shadow-md">
        <img
          src={Images.HandDrawnCircle.src}
          alt=""
          className="absolute -left-2 top-[-15px] h-14 w-[98px] rounded-full"
        />
        <h2 className="ml-3 text-green-500">Number</h2>
        <h2>Hunt</h2>
      </div>
    </div>
  );
};
