/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import { CopyIcon } from './icons'

type TerminalCardProps = {
  label: string
  commands: string[]
}

export function TerminalCard({ label, commands }: TerminalCardProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCopyStatusText] = useState('Idle')
  const timeoutRef = useRef<
    Record<number, ReturnType<typeof setTimeout> | null>
  >({})

  useEffect(() => {
    return () => {
      Object.values(timeoutRef?.current).forEach((t) => {
        if (t) clearTimeout(t)
      })
    }
  }, [])

  const onCopy = async (text: string, idx: number) => {
    const supportsClipboard =
      typeof navigator !== 'undefined' && navigator.clipboard

    if (!supportsClipboard) {
      setCopyStatusText('Clipboard not supported')
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(idx)
      setCopyStatusText('Command copied')

      if (timeoutRef.current[idx]) {
        clearTimeout(timeoutRef.current[idx])
      }

      timeoutRef.current[idx] = setTimeout(() => {
        setCopiedIndex((current) => (current === idx ? null : current))
        setCopyStatusText('Idle')
      }, 1200)
    } catch {
      setCopyStatusText('Copy failed')
    }
  }

  return (
    <section
      className='w-full max-w-200 bg-[#0E1524] border border-[#1E293B] rounded-xl shadow-2xl relative overflow-hidden mb-12'
      aria-label='Quick start command'
    >
      <div className='h-9.5 border-b border-[#1E293B]/80 flex items-center px-4 relative bg-[#090E17]/50'>
        <div className='flex gap-2 relative z-10'>
          <div className='w-2.75 h-2.75 rounded-full bg-[#FF5F56] opacity-80'></div>
          <div className='w-2.75 h-2.75 rounded-full bg-[#FFBD2E] opacity-80'></div>
          <div className='w-2.75 h-2.75 rounded-full bg-[#27C93F] opacity-80'></div>
        </div>
        <div className='absolute inset-x-0 w-full text-center text-[10px] font-mono text-[#475569] tracking-[0.15em] pointer-events-none uppercase'>
          {label}
        </div>
      </div>

      <div className='p-5 md:p-6 flex flex-col gap-3'>
        {commands.map((cmd, idx) => (
          <div key={idx} className='flex items-center justify-between'>
            <code
              className='font-mono text-[14px] md:text-[15px] overflow-x-auto flex-1 text-[#E2E8F0] px-2 whitespace-pre'
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <span className='text-[#06B6D4] font-bold mr-2.5'>$</span>
              {cmd}
            </code>

            <div className='relative ml-4 shrink-0'>
              <span
                className={`absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-[#1E293B] bg-[#0B1322] px-2.5 py-1 text-[11px] font-medium text-cyan-300 shadow-lg transition-all duration-200 pointer-events-none ${
                  copiedIndex === idx
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-1'
                }`}
                role='status'
                aria-live='polite'
              >
                Copied
              </span>

              <button
                type='button'
                className='p-2 rounded-md bg-[#1E293B]/40 hover:bg-[#1E293B] text-[#94A3B8] hover:text-white transition-all border border-[#1E293B] shrink-0'
                onClick={() => onCopy(cmd, idx)}
                title='Copy to clipboard'
                aria-label={`Copy command ${idx + 1}`}
              >
                <CopyIcon className='w-4.5 h-4.5' />
              </button>
            </div>
          </div>
        ))}
      </div>

      <p
        aria-live='polite'
        className='font-mono text-xs text-[#475569] mb-3 pl-8'
      >
        // First command create app with React compiler & second don't have it.
        Try both!
      </p>
    </section>
  )
}
