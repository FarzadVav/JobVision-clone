import { ReactNode, createContext } from "react";

type LoadingContextTypes = {
  loading: {
    app: boolean;
    page: boolean
  };
  startLoading: (app: boolean) => void;
  endLoaidng: (app: boolean) => void
}
const LoadingContext = createContext<LoadingContextTypes>({} as LoadingContextTypes)

type LoadingContextProviderProps = {
  children: ReactNode
}
export const LoadingContextProvider = ({ children }: LoadingContextProviderProps) => {

  return (
    <LoadingContext.Provider value={{} as LoadingContextTypes}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContext