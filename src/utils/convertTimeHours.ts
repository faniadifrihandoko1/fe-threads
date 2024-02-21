export default function convertISOToReadableTime(
  isoDateString: string
): string {
  const date = new Date(isoDateString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${period}`;
}
