const getFormattedDate = (dataString: string | undefined) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(dataString);
  return date.toLocaleDateString("en-US", options);
};
export default getFormattedDate;