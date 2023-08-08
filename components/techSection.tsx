import React from 'react'
import { techStacks } from '@/constants'
import { Icon } from '.'
import Image from 'next/image'
import Arrow from '../public/Arrow.png'

function TechSection() {
  return (
    <>
        <div className="grid grid-cols-2 my-5">
            <div className='flex flex-wrap items-center justify-center bg-[#A43030]'>
                {techStacks.map((tech) => {
                    return(
                        <Icon iconImage={tech.icon} Width={180} Height={180} />                    )
                })}
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-white uppercase text-[70px] text-center">Tech Stacks that i work with</div>
                <div className="mr-[250px]"><Image src={Arrow} alt='Arrow' /></div>
            </div>
        </div>
    </>
  )
}

export default TechSection