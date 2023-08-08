import React from 'react'
import Description from './desc'
import { descriptions } from '@/constants'

function DescriptionSection() {
  return (
    <>
        <div className="bg-[#2D3658] my-5 p-10">
          {descriptions.map((desc) => {
            return(
              <Description desc={desc.desc} />
            )
          })}
        </div>
    </>
  )
}

export default DescriptionSection