import React from 'react'

function Hero() {
  return (
    <>
        <div className="grid grid-cols-2 bg-[#2D3658] text-white p-10 my-5">
            <div className="flex flex-col justify-center items-center font-cursiveFont">
                <div className="text-[70px] mb-10">
                    Hi I’m Mohamed Tariq,
                </div>
                <div className="text-center text-[50px]">
                    A passionate Full Stack Software Developer having experience of building web and mobile applications using HTML/CSS/JavaScript/React.js using cool libraries and frameworks
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-[400px] h-[400px] bg-slate-200 rounded-[50%]">

                </div>
            </div>
        </div>
    </>
  )
}

export default Hero