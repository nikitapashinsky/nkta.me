import BaseUILogo from '@/assets/images/logos/base-ui.svg?react';
import CloudflareLogo from '@/assets/images/logos/cloudflare.svg?react';
import InterIcon from '@/assets/images/logos/inter.svg?react';
import NpmLogo from '@/assets/images/logos/npm.svg?react';
import ReactLogo from '@/assets/images/logos/react.svg?react';
import TailwindCSSLogo from '@/assets/images/logos/tailwindcss.svg?react';
import TanstackLogo from '@/assets/images/logos/tanstack.svg?react';
import VitePlusLogo from '@/assets/images/logos/viteplus-color.svg?react';
import type { LinkProps } from '@/components/Link';

type Group = 'TECH' | 'TYPOGRAPHY';

export interface Credit {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
  hoverIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  brandColor?: string;
  name: string;
  url: LinkProps['to'];
  description?: string;
}

export const credits: Record<Group, Credit[]> = {
  TECH: [
    {
      name: 'Base UI',
      icon: BaseUILogo,
      url: 'https://base-ui.com',
    },
    {
      name: 'Cloudflare Workers',
      icon: CloudflareLogo,
      url: 'https://workers.cloudflare.com',
    },
    {
      name: 'React',
      icon: ReactLogo,
      url: 'https://react.dev',
    },
    {
      name: 'Tailwind CSS',
      icon: TailwindCSSLogo,
      url: 'https://tailwindcss.com',
    },
    {
      name: 'tailwind-merge',
      icon: NpmLogo,
      url: 'https://www.npmjs.com/package/tailwind-merge',
    },
    {
      icon: TanstackLogo,
      name: 'Tanstack Router',
      url: 'https://tanstack.com/router/latest',
    },
    {
      icon: VitePlusLogo,
      name: 'Vite Plus',
      url: 'https://viteplus.dev',
    },
  ],
  TYPOGRAPHY: [
    {
      name: 'Inter',
      icon: InterIcon,
      url: 'https://rsms.me/inter',
    },
  ],
};
