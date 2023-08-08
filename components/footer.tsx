import React from 'react'
import { Icon } from '.'
import { FooterMediaIcons } from '@/constants'

function Footer() {
  return (
    <footer className="bg-[#333333] p-11">
      <div className="uppercase text-white text-[64px] text-center">
        Catch me at
      </div>
      <div className="flex w-[70%] justify-evenly mx-auto my-6">
        {FooterMediaIcons.map((icon) => {
          return(
            <Icon iconImage={icon.icon}  />
          )
        })}
      </div>
    </footer>
  )
}

export default Footer