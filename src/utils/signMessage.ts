import { config } from '@/config/wagmiConfig';
import { signMessage } from '@wagmi/core';

export const SignMessage = async ({ msg }: { msg: string }) => {
  await signMessage(config, { message: msg });
};
