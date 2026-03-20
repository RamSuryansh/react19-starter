export function AnimatedBackground() {
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none' aria-hidden='true'>
      {/* Large primary orb */}
      <div
        className='absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.07]
          bg-gradient-to-br from-[#818CF8] to-[#6366F1]
          animate-[floatOrb_20s_ease-in-out_infinite]'
        style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />

      {/* Secondary orb — cyan accent */}
      <div
        className='absolute w-[350px] h-[350px] rounded-full blur-[100px] opacity-[0.05]
          bg-gradient-to-br from-[#06B6D4] to-[#67E8F9]
          animate-[floatOrb_25s_ease-in-out_3s_infinite_reverse]'
        style={{ top: '60%', left: '30%' }}
      />

      {/* Tertiary orb — purple accent */}
      <div
        className='absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.04]
          bg-gradient-to-br from-[#A855F7] to-[#F0ABFC]
          animate-[floatOrb_18s_ease-in-out_6s_infinite]'
        style={{ top: '40%', left: '70%' }}
      />

      {/* Grid overlay for depth */}
      <div
        className='absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
