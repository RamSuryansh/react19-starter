import { BoltIcon, CheckIcon, CodeIcon, CpuIcon, PaletteIcon, ShieldIcon } from './icons'
import type { FeatureItem } from './landingContent'

type FeatureGridProps = {
  items: FeatureItem[]
}

function FeatureIcon({
  kind,
  className,
}: {
  kind: FeatureItem['icon']
  className: string
}) {
  const icons = {
    check: CheckIcon,
    bolt: BoltIcon,
    palette: PaletteIcon,
    code: CodeIcon,
    shield: ShieldIcon,
    cpu: CpuIcon,
  } as const

  const Icon = icons[kind]
  return <Icon className={className} />
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <section
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-10'
      aria-label='Tech stack highlights'
    >
      {items.map((feature, i) => (
        <article
          key={feature.title}
          className='group flex flex-col items-start p-5 rounded-xl bg-[#0B101A]/20 border border-[#1E293B]/40
            hover:border-[#334155]/60 hover:bg-[#0F1629]/60
            transition-all duration-300 cursor-default
            hover:shadow-[0_0_20px_rgba(99,102,241,0.06)]'
          style={{
            animation: `fadeSlideUp 0.5s ease ${0.1 + i * 0.08}s both`,
          }}
        >
          <div className='flex items-center w-full mb-3'>
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-white/5 ${feature.iconBg} ${feature.iconColor} mr-3 shadow-sm
                group-hover:scale-110 transition-transform duration-200`}
              aria-hidden='true'
            >
              <FeatureIcon kind={feature.icon} className='w-4.5 h-4.5' />
            </div>
            <h3 className='text-[15px] font-semibold text-[#F8FAFC]'>
              {feature.title}
            </h3>
          </div>
          <p className='text-[14px] text-[#64748B] leading-normal group-hover:text-[#8492A6] transition-colors duration-200'>
            {feature.description}
          </p>
        </article>
      ))}
    </section>
  )
}
