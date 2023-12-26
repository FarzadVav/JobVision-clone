import { create } from 'zustand'

type useHeaderProps = {
  showMegaMenu: boolean;
  showMobileMenu: boolean;
  showMobileMenuJobs: boolean;
  showLogin: boolean;
  showMobileMenuSubJobs: {
    id: string;
    state: boolean
  }
  setShowMobileMenuSubJobs: (id: string, state: boolean) => void
}

const useHeader = create<useHeaderProps>(set => ({
  showMegaMenu: false,
  showMobileMenu: false,
  showMobileMenuJobs: false,
  showLogin: false,
  showMobileMenuSubJobs: {
    id: '',
    state: false
  },
  setShowMobileMenuSubJobs: (id, state) => set({ showMobileMenuSubJobs: { id, state } }),
}))

export default useHeader