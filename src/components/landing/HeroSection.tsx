import type { ReactNode } from 'react'

type HeroSectionProps = {
  titlePrefix: string
  titleAccent: string
  description: string
  children?: ReactNode
}

export function HeroSection({
  titlePrefix,
  titleAccent,
  description,
  children,
}: HeroSectionProps) {
  return (
    <section className='text-center space-y-4 mb-14' aria-label='Hero'>
      <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] animate-[fadeSlideUp_0.6s_ease_both]'>
        {titlePrefix}{' '}
        <span className='text-transparent bg-clip-text bg-linear-to-r from-[#67E8F9] via-[#818CF8] to-[#F0ABFC]'>
          {titleAccent}
        </span>
      </h1>
      <p className='text-base md:text-[17px] text-[#8492A6] max-w-2xl mx-auto leading-relaxed mt-4 antialiased animate-[fadeSlideUp_0.6s_ease_0.15s_both]'>
        {description}
      </p>
      {children}
    </section>
  )
}
