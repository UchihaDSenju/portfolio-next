import { Hero, DescriptionSection } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Hero />
        <div className="text-[96px] uppercase text-center text-white">What I do ?</div>
        <DescriptionSection />
      </div>
    </>
  )
}
