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
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years === 1 ? "1 tahun yang lalu" : years + " tahun yang lalu";
  } else if (months > 0) {
    return months === 1 ? "1 bulan yang lalu" : months + " bulan yang lalu";
  } else if (days > 0) {
    return days === 1 ? "1 hari yang lalu" : days + " hari yang lalu";
  } else if (hours > 0) {
    return hours === 1 ? "1 jam yang lalu" : hours + " jam yang lalu";
  } else {
    return minutes === 1 ? "1 menit yang lalu" : minutes + " menit yang lalu";
  }
}
