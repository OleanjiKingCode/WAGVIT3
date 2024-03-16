//Switch Network Function

export const SwitchChain = async ({
  chainId,
  chainName,
  rpcUrls,
}: {
  chainId: any;
  chainName: string;
  rpcUrls: string[];
}) => {
  try {
    await window.ethereum?.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId }],
    });
  } catch (switchError: any) {
    const err = switchError;
    if (err.code === 4902) {
      try {
        await window.ethereum?.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId,
              chainName,
              rpcUrls,
            },
          ],
        });
      } catch (addError) {
        return null;
      }
    }
  }
  return null;
};
