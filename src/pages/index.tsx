import { Inter } from 'next/font/google';
import { Showcase } from '@/components/showcase';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <Showcase />;
}
