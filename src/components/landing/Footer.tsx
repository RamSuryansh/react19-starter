import { GitHubIcon, HeartIcon } from './icons'
import { GITHUB_URL } from './landingContent'

export function Footer() {
  return (
    <footer className='relative z-10 w-full  mt-20'>
      <div className='max-w-225 mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1E293B]/50'>
        <p className='text-[13px] text-[#475569] flex items-center gap-1.5'>
          Built with
          <HeartIcon className='w-3.5 h-3.5 text-[#F43F5E]' />
          by
          <a
            href={GITHUB_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#94A3B8] hover:text-white transition-colors font-medium'
          >
            RamSuryansh
          </a>
        </p>

        <div className='flex items-center gap-4'>
          <a
            href={GITHUB_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 text-[13px] text-mauve-400 hover:text-[#94A3B8] transition-colors'
          >
            <GitHubIcon className='w-4 h-4' />
            <span>Star on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
