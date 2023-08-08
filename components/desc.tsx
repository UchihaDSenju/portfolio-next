import { descriptionProps } from '@/types'
import React from 'react'
import fireIcon from '../public/Subtract.png'
import Image from 'next/image'

function Description({desc}: descriptionProps) {
  return (
  <>
    <div className="flex items-center gap-7 text-[50px] h-auto">
      <div>
        <Image src={fireIcon} alt='fireBullet' width={70} height={70}/>
      </div>
      <div className="text-white uppercase">{desc}</div>
    </div>
  </>
  )
}

export default Description