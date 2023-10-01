export const ContainerHome = () => {
  return (
    <div className="absolute z-20 flex h-full w-full flex-col items-center justify-evenly">
      <div className="flex gap-4 text-4xl drop-shadow-md">
        <div className="circle_text_number absolute -left-5 -top-5 h-24 w-40 rounded-full border-8 border-red-600" />
        <h2 className="text-green-500">Number</h2>
        <h2>Hunt</h2>
      </div>
      <div className="mb-24 flex h-40 w-2/3 items-center justify-center rounded-lg border-4 border-slate-400 bg-slate-100 shadow-lg">
        <h2 className="text-2xl uppercase">Enter your name</h2>
      </div>
    </div>
  );
};
