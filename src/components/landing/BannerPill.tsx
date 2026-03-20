type BannerPillProps = {
  text: string
}

export function BannerPill({ text }: BannerPillProps) {
  return (
    <div className='inline-flex items-center px-2 py-1 rounded-full bg-[#182136]/50 border border-[#2B354C] text-[15px] font-normal tracking-wide mb-10 shadow-sm animate-[fadeSlideUp_0.5s_ease_both]'>
      <span className='relative flex h-2.5 w-2.5 mr-3'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-50'></span>
        <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]'></span>
      </span>
      <span className='text-[#38BDF8]'>{text}</span>
    </div>
  )
}
