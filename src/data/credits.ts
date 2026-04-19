import BaseUILogo from '@/assets/images/logos/base-ui.svg?react';
import CloudflareLogo from '@/assets/images/logos/cloudflare.svg?react';
import InterIcon from '@/assets/images/logos/inter.svg?react';
import ReactLogo from '@/assets/images/logos/react.svg?react';
import TailwindCSSLogo from '@/assets/images/logos/tailwindcss.svg?react';
import TanstackLogo from '@/assets/images/logos/tanstack.svg?react';
import VitePlusColorLogo from '@/assets/images/logos/viteplus-color.svg?react';
import VitePlusLogo from '@/assets/images/logos/viteplus.svg?react';
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
      brandColor: '#03060D',
      url: 'https://base-ui.com',
    },
    {
      name: 'Cloudflare Workers',
      icon: CloudflareLogo,
      brandColor: 'oklch(63.8% 0.243 36.4)',
      url: 'https://workers.cloudflare.com',
    },
    {
      name: 'React',
      icon: ReactLogo,
      brandColor: '#087ea4',
      url: 'https://react.dev',
    },
    {
      name: 'Tailwind CSS',
      icon: TailwindCSSLogo,
      brandColor: 'var(--color-sky-400)',
      url: 'https://tailwindcss.com',
    },
    {
      name: 'TanStack Router',
      icon: TanstackLogo,
      brandColor: 'oklch(59.6% 0.176 163.2)',
      url: 'https://tanstack.com/router/latest',
    },
    {
      name: 'Vite+',
      icon: VitePlusLogo,
      hoverIcon: VitePlusColorLogo,
      brandColor: 'oklch(56.6% 0.261 279.1)',
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
