import { useEffect, useState } from "react"

const useFirstMount = () => {
  const [firstMount, setFirstMount] = useState<boolean>(true)

  useEffect(() => {
    if (firstMount) setFirstMount(false)
  })

  return firstMount
}

export default useFirstMount