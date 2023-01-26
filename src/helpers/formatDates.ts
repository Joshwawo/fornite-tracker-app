export const formatDates = (date: string) => {
  const format = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const fix = format.format(new Date(date));
  return fix.split("at")[0];
};
