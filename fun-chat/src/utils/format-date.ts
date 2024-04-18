export const formatDate = (): string => {
  const day = new Date();
  const formattedDate = day.toLocaleDateString("en-US", { timeZone: "UTC" });
  const formattedTime = day.toLocaleTimeString("en-US", { timeZone: "UTC" });
  return `${formattedDate}, ${formattedTime}`;
};
