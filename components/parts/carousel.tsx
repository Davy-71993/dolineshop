"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { IndexKind } from "typescript"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"


type Props = {}

const Carousel = (props: Props) => {
  const carousel_ref = useRef<HTMLDivElement | null>(null)
  const [curentSlide, setCurrentSlide] = useState(0)
  const [control, setControls] = useState(false)
  const [paused, setPaused] = useState(false)


  /**
   * Takes the current slide and toggles the hide class on it
   * @param cs Index of the current slide
   */
  useEffect(() => {
    const slides = document.querySelectorAll('.slide')
    if(slides != undefined){
      const slidesArray = Array.from(slides)
      slidesArray.forEach((slide, index) => {
        if(index === curentSlide){
          slide.classList.add('left-0', 'z-10')
          slide.classList.remove('left-full')
        }else{
          slide.classList.remove('left-0', 'z-10')
          setTimeout(() => {
            slide.classList.add('left-full')
          }, 800);
        }
      })
    }
  }, [curentSlide])

  setTimeout(() => {
    if(!paused && !control){
      nextSlide()
    }
  }, 5000);

  const nextSlide = () => {
    
    if(curentSlide < 3){
      setCurrentSlide(curentSlide+1)
      return
    }
    setCurrentSlide(0)
  }

  const previousSlide = () => {
    setControls(true)
    if(curentSlide > 0){
      setCurrentSlide(curentSlide-1)

      return
    }
    setCurrentSlide(3)
  }
  
  return (
    <AspectRatio ratio={16/5} ref={carousel_ref} className="w-full overflow-hidden relative">
      <div className="slide w-full h-fit absolute left-0 duration-700 ease-in-out"> 
        <Image 
          src={'/images/carousel/one.jpg'} 
          alt="Slide One" width={1000} 
          height={10} 
          className="w-full"
        />
      </div>
      <div className="slide w-full h-fit absolute left-full duration-700 ease-in-out"> 
        <Image 
          src={'/images/carousel/two.jpg'} 
          alt="Slide Two" width={1000} 
          height={10} 
          className="w-full"
        />
      </div>
      <div className="slide w-full h-fit absolute left-full duration-700 ease-in-out"> 
        <Image 
          src={'/images/carousel/three.jpg'} 
          alt="Slide Three" width={1000} 
          height={10} 
          className="w-full"
        />
      </div>
      <div className="slide w-full h-full absolute left-full duration-700 ease-in-out">
        <Image 
          src={'/images/carousel/four.jpg'} 
          alt="Slide Four" width={1000} 
          height={10} 
          className="w-full"
        />
      </div>
    </AspectRatio>
  )
}

export default Carousel