import { useEffect, useState } from 'react'
import { ArrowRightIcon, GitHubIcon, StarIcon } from './icons'
import { GITHUB_REPO, GITHUB_URL } from './landingContent'

export function GitHubButtons() {
  const [stars, setStars] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        setStars(data.stargazers_count ?? 0)
        setLoading(false)
      })
      .catch(() => {
        setStars(null)
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  const formatStars = (count: number) => {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`
    return count.toString()
  }

  return (
    <div className='flex flex-wrap items-center justify-center gap-3 mt-8 animate-[fadeSlideUp_0.7s_ease_0.3s_both]'>
      <a
        href={GITHUB_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-[15px] font-semibold text-white
          bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#7C3AED]
          shadow-[0_0_24px_rgba(99,102,241,0.25)]
          hover:shadow-[0_0_32px_rgba(99,102,241,0.4)]
          hover:scale-[1.03] active:scale-[0.98]
          transition-all duration-200 ease-out'
      >
        <GitHubIcon className='w-5 h-5' />
        View on GitHub
        <ArrowRightIcon className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5' />
      </a>

      <a
        href={GITHUB_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[15px] font-semibold
          bg-[#0E1524] border border-[#1E293B] text-[#E2E8F0]
          hover:border-[#334155] hover:bg-[#131C2E]
          hover:scale-[1.03] active:scale-[0.98]
          transition-all duration-200 ease-out'
      >
        <StarIcon className='w-4 h-4 text-[#FBBF24]' />
        <span>Stars</span>
        <span className='inline-flex items-center justify-center min-w-[2rem] px-2 py-0.5 rounded-md bg-[#1E293B]/70 text-[13px] font-bold text-[#94A3B8] tabular-nums'>
          {loading ? (
            <span className='inline-block w-6 h-3 rounded bg-[#1E293B] animate-[shimmer_1.5s_infinite]' />
          ) : stars !== null ? (
            formatStars(stars)
          ) : (
            '—'
          )}
        </span>
      </a>
    </div>
  )
}
