export const handleCopyID = (
  value: number,
  setCopy: (value: boolean) => void,
) => {
  navigator.clipboard.writeText(value.toString()).then(() => {
    setCopy(true);
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1500);
    return () => clearTimeout(timer);
  });
};
