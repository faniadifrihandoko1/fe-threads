export default function shortUsername(kata: string): string {
  const panjang = 15;
  if (kata.length <= panjang) {
    return kata;
  } else {
    return kata.substring(0, panjang) + ".";
  }
}
