export const NumberToSearch = ({ number }: { number: number }) => {
  return (
    <div className="rounded-lg border-2 border-slate-500 p-1 px-5 shadow-md drop-shadow-md">
      <h2>{number >= 101 ? 100 : number}</h2>
    </div>
  );
};
