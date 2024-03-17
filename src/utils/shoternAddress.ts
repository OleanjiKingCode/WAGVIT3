export const shortenAddress = (address?: string): string => {
  if (!address || !address.startsWith('0x')) {
    return address ?? '-';
  }
  const prefixLength = 6;
  const suffixLength = 4;
  const truncatedAddress = `${address.slice(0, prefixLength)}…${address.slice(-suffixLength)}`;
  return truncatedAddress;
};
