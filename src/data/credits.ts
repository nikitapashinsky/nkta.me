import BaseUILogo from '@/assets/images/logos/base-ui.svg?react';
import ClaudeLogo from '@/assets/images/logos/claude.svg?react';
import CloudflareLogo from '@/assets/images/logos/cloudflare.svg?react';
import CodexLogo from '@/assets/images/logos/codex-app-icon.png';
import InterLogo from '@/assets/images/logos/inter.svg?react';
import NpmLogo from '@/assets/images/logos/npm.svg?react';
import ReactLogo from '@/assets/images/logos/react.svg?react';
import TailwindCSSLogo from '@/assets/images/logos/tailwindcss.svg?react';
import TanstackLogo from '@/assets/images/logos/tanstack.svg?react';
import VitePlusColorLogo from '@/assets/images/logos/viteplus-color.svg?react';
import VitePlusLogo from '@/assets/images/logos/viteplus.svg?react';
import WarpLogo from '@/assets/images/logos/warp.svg?react';
import ZedAppLogo from '@/assets/images/logos/zed-app.svg?react';
import type { LinkProps } from '@/components/Link';

type Group = 'TOOLS' | 'TECH' | 'TYPOGRAPHY';

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
      brandColor: '#FF4801',
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
      brandColor: '#38BDF8',
      url: 'https://tailwindcss.com',
    },
    {
      name: 'tailwind-merge',
      icon: NpmLogo,
      brandColor: '#cb3837',
      url: 'https://www.npmjs.com/package/tailwind-merge',
    },
    {
      icon: TanstackLogo,
      name: 'Tanstack Router',
      url: 'https://tanstack.com/router/latest',
    },
    {
      icon: VitePlusLogo,
      hoverIcon: VitePlusColorLogo,
      name: 'Vite Plus',
      url: 'https://viteplus.dev',
    },
  ],
  TOOLS: [
    {
      name: 'Claude Code',
      icon: ClaudeLogo,
      brandColor: '#D97757',
      url: 'https://claude.com/product/claude-code',
    },
    {
      name: 'Codex',
      icon: CodexLogo,
      url: 'https://openai.com/codex',
    },
    {
      name: 'Warp',
      icon: WarpLogo,
      url: 'https://www.warp.dev/',
    },
    {
      name: 'Zed',
      icon: ZedAppLogo,
      brandColor: '#1348DC',
      url: 'https://zed.dev/',
    },
  ],
  TYPOGRAPHY: [
    {
      name: 'Inter',
      icon: InterLogo,
      brandColor: 'color(display-p3 1.0 0.36 0.0)',
      url: 'https://rsms.me/inter',
    },
  ],
};
