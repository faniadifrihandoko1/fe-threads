// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function convertTimeToAgo(timestamp: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentDate: any = new Date();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const previousDate: any = new Date(timestamp);

  const timeDifference = currentDate - previousDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return days + " hari yang lalu";
  } else if (hours > 0) {
    return hours + " jam yang lalu";
  } else {
    return minutes + " menit yang lalu";
  }
}
