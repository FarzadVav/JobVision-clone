import { useState, useEffect } from "react";

type ElementsTypes = (string | { id: string; delay: number })[]

const useOneScroll = (elements: ElementsTypes) => {

  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    elements.forEach(elem => {
      let element: HTMLElement | null = null;
      if (typeof elem === 'string' && elem.length > 0) {
        element = document.querySelector(`#${elem}`)
      } else if (typeof elem === 'object') {
        element = document.querySelector(`#${elem.id}`)
        element.style.animationDelay = `${elem.delay}ms`
      }
      element?.addEventListener('animationend', (event) => {
        console.log(event.animationName);
        if (event.animationName === 'scroll-fade-up__animate') {
          element?.classList.remove('scroll-fade-up')
        }
      })

      window.addEventListener('scroll', () => {
        if ((element?.getBoundingClientRect().top || 0) <= (window.innerHeight / 1.25)) {
          element?.classList.add('scroll-fade-up__animate')
          setScrolled(true)
        } else {
          element?.classList.add('scroll-fade-up')
          element?.classList.remove('scroll-fade-up__animate')
          setScrolled(false)
        }
      })
    })

  }, [])




  return scrolled
}

export default useOneScroll