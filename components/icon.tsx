import React from 'react'
import Image from 'next/image'
import { iconProps } from '@/types'

function Icon({iconImage, Width, Height}: iconProps) {
  return (
    <>
        <div>
            <Image width={Width} height={Height} src={iconImage} alt='icon' />    
        </div>
    </>
  )
}

export default Icon