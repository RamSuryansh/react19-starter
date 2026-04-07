import { AnimatedBackground } from '@/components/landing/AnimatedBackground'
import { BannerPill } from '@/components/landing/BannerPill'
import { FeatureGrid } from '@/components/landing/FeatureGrid'
import { Footer } from '@/components/landing/Footer'
import { GitHubButtons } from '@/components/landing/GitHubButtons'
import { HeroSection } from '@/components/landing/HeroSection'
import {
  FEATURE_ITEMS,
  LANDING_COPY,
  QUICK_START_COMMAND,
  SECOND_QUICK_COMMAND,
} from '@/components/landing/landingContent'
import { TerminalCard } from '@/components/landing/TerminalCard'

function App() {
  return (
    <div className='min-h-dvh w-full overflow-x-hidden bg-[#070B14] text-slate-200 font-sans selection:bg-cyan-500/30 flex flex-col relative antialiased'>
      <AnimatedBackground />

      <main className='relative z-10 w-full max-w-225 flex flex-col items-center justify-center mx-auto px-4 pt-24 pb-8 flex-1'>
        <BannerPill text={LANDING_COPY.badge} />

        <HeroSection
          titlePrefix={LANDING_COPY.titlePrefix}
          titleAccent={LANDING_COPY.titleAccent}
          description={LANDING_COPY.description}
        >
          <GitHubButtons />
        </HeroSection>

        <TerminalCard
          label={LANDING_COPY.terminalLabel}
          commands={[QUICK_START_COMMAND, SECOND_QUICK_COMMAND]}
        />

        <FeatureGrid items={FEATURE_ITEMS} />
      </main>

      <Footer />
    </div>
  )
}

export default App
