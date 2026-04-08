import BaseUILogo from '@/assets/images/logos/base-ui.svg?react';
import ClaudeAppIcon from '@/assets/images/logos/claude-app-icon-square.svg?react';
import CloudflareLogo from '@/assets/images/logos/cloudflare.svg?react';
import CodexAppIcon from '@/assets/images/logos/codex-app-icon-square.svg?react';
import FigmaAppIcon from '@/assets/images/logos/figma-app-icon-square.svg?react';
import InterIconFill from '@/assets/images/logos/inter-icon-fill.png';
import NpmLogo from '@/assets/images/logos/npm.svg?react';
import PaperAppIcon from '@/assets/images/logos/paper-app-icon-square.svg?react';
import ReactLogo from '@/assets/images/logos/react.svg?react';
import TailwindCSSLogo from '@/assets/images/logos/tailwindcss.svg?react';
import TanstackLogo from '@/assets/images/logos/tanstack.svg?react';
import VitePlusLogo from '@/assets/images/logos/viteplus-color.svg?react';
import WarpAppIcon from '@/assets/images/logos/warp-app-icon-square.svg?react';
import ZedAppIcon from '@/assets/images/logos/zed-app-icon-square.svg?react';
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
  TOOLS: [
    {
      name: 'Zed',
      icon: ZedAppIcon,
      url: 'https://zed.dev/',
    },
    {
      name: 'Paper',
      icon: PaperAppIcon,
      url: 'https://paper.design',
    },
    {
      name: 'Figma',
      icon: FigmaAppIcon,
      url: 'https://www.figma.com',
    },
    {
      name: 'Warp',
      icon: WarpAppIcon,
      url: 'https://www.warp.dev/',
    },
    {
      name: 'Claude Code',
      icon: ClaudeAppIcon,
      url: 'https://claude.com/product/claude-code',
    },
    {
      name: 'Codex',
      icon: CodexAppIcon,
      url: 'https://openai.com/codex',
    },
  ],
  TYPOGRAPHY: [
    {
      name: 'Inter',
      description: 'Inter is hard to beat.',
      icon: InterIconFill,
      url: 'https://rsms.me/inter',
    },
  ],
};
