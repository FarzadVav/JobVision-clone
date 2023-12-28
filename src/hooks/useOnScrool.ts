import { useEffect } from "react";

type ElementsTypes = (string | { id: string; delay: number })[]

const useOneScroll = (elements: ElementsTypes) => {
  useEffect(() => {
    elements.forEach(elem => {
      let element: HTMLElement | null = null;

      if (typeof elem === 'string' && elem.length > 0) {
        element = document.querySelector(`#${elem}`)
      } else if (typeof elem === 'object') {
        element = document.querySelector(`#${elem.id}`)
      }

      element?.classList.add('duration-500')

      window.addEventListener('scroll', () => {
        if ((element?.getBoundingClientRect().top || 0) <= (window.innerHeight / 1.25)) {
          if (typeof elem === 'object') {
            setTimeout(() => {
              element?.classList.remove('scroll-fade-down')
            }, elem.delay);
          } else {
            element?.classList.remove('scroll-fade-down')
          }
        } else {
          if (typeof elem === 'object') {
            setTimeout(() => {
              element?.classList.add('scroll-fade-down')
            }, elem.delay);
          } else {
            element?.classList.add('scroll-fade-down')
          }
        }
      })
    })

  }, [])
}

export default useOneScroll