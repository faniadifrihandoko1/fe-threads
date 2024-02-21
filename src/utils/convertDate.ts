export default function convertDateFormat(isoDate: string): string {
  const dateObj = new Date(isoDate);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = { day: "2-digit", month: "short", year: "numeric" };
  return dateObj.toLocaleDateString("en-US", options);
}
