import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerate'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { FlipWords } from './ui/FlipWords'
import { description } from '@/data'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />

        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute to-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center my-20 relative z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
            <TextGenerateEffect 
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Creative Concepts into Harmonious User Experiences"
            />

            <div className='flex text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hello! I am Kevin Baluyot, a<FlipWords words={description} /> based in Los Angeles
            </div>

            <a target="_blank" href="https://docs.google.com/document/d/1qL74ma-dNh7uvLTmsYhtVPmvz_3uNl3amR0Cghjt2MM/edit?usp=sharing">
              <MagicButton 
                title="View Resume/CV"
                icon={ <FaLocationArrow />}
                position='right'
              />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Hero