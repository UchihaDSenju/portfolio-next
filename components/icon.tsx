import React from 'react'
import Image from 'next/image'
import { iconProps } from '@/types'

function Icon({iconImage, Desc}: iconProps) {
  return (
    <>
        <div>
            <Image width={60} height={60} src={iconImage} alt='icon' />    
        </div>
    </>
  )
}

export default Icon