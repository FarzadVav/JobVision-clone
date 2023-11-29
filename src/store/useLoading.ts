import { create } from 'zustand'

type useLoadingTypes = {
  appLoading: boolean;
  pageLoading: boolean
  startAppLoadingHandler: () => void;
  endAppLoadingHandler: () => void;
  startPageLoadingHandler: () => void;
  endPageLoadingHandler: () => void
}

const useLoading = create<useLoadingTypes>(set => ({
  appLoading: false,
  pageLoading: false,
  startAppLoadingHandler: () => set({ appLoading: true }),
  endAppLoadingHandler: () => set({ appLoading: false }),
  startPageLoadingHandler: () => set({ pageLoading: true }),
  endPageLoadingHandler: () => set({ pageLoading: false })
}))

export default useLoading