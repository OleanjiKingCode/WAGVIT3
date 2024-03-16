export const shortenAddress = (
  account: string,
  firstTakeLength = 5,
  secondTakeLength = 4
) => {
  const partOne = account.substring(0, firstTakeLength);
  const partTwo = account.substring(account.length - secondTakeLength);
  return `${partOne}...${partTwo}`;
};
