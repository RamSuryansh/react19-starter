export const GITHUB_REPO = 'ramsuryansh/react19-starter'
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`

export const QUICK_START_COMMAND =
  'npx degit RamSuryansh/react19-starter#dev <app_name>'

export const SECOND_QUICK_COMMAND =
  'npx degit RamSuryansh/react-tailwind-vite#main <app_name>'

export const COPY_COMMAND =
  'npx degit RamSuryansh/react19-starter#dev <app_name>'

export const COPY_SECOND_COMMAND =
  'npx degit RamSuryansh/react-tailwind-vite#main <app_name>'

export const LANDING_COPY = {
  badge: 'Minimal setup. Instant productivity.',
  titlePrefix: '',
  titleAccent: 'Quick Setup, React starter',
  description:
    'A blazing fast, unopinionated React boilerplate for the developer community. Engineered for speed and editorial-grade aesthetics.',
  terminalLabel: 'Terminal - Zsh',
  systemStatus: 'System Status',
  revision: 'Revision 2024.01',
}

export type FeatureItem = {
  title: string
  description: string
  icon: 'check' | 'bolt' | 'palette' | 'code' | 'shield' | 'cpu'
  iconColor: string
  iconBg: string
}

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: 'React 19.2',
    description: 'Latest concurrent features and server components ready.',
    icon: 'check',
    iconColor: 'text-[#C7D2FE]',
    iconBg: 'bg-[#1E293B]',
  },
  {
    title: 'Vite 8.0',
    description: 'Next-gen lightning fast build tool and HMR.',
    icon: 'bolt',
    iconColor: 'text-[#E9D5FF]',
    iconBg: 'bg-[#2E1065]/50',
  },
  {
    title: 'Tailwind 4.2',
    description: 'Advanced CSS orchestration with zero-runtime overhead.',
    icon: 'palette',
    iconColor: 'text-[#06B6D4]',
    iconBg: 'bg-[#083344] border border-[#164E63]',
  },
  {
    title: 'TypeScript 5.9',
    description: 'Full type safety with the latest compiler features.',
    icon: 'code',
    iconColor: 'text-[#60A5FA]',
    iconBg: 'bg-[#172554]/50 border border-[#1E3A5F]',
  },
  {
    title: 'React Compiler',
    description:
      'Automatic memoization — no more manual useMemo or useCallback.',
    icon: 'cpu',
    iconColor: 'text-[#F0ABFC]',
    iconBg: 'bg-[#4A1D6A]/30 border border-[#581C87]/50',
  },
  {
    title: 'ESLint 9',
    description:
      'Pre-configured flat config with React hooks and refresh plugins.',
    icon: 'shield',
    iconColor: 'text-[#34D399]',
    iconBg: 'bg-[#064E3B]/40 border border-[#065F46]/60',
  },
]
