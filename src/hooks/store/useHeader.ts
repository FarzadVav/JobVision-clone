import { create } from 'zustand'

type useHeaderProps = {
  showMegaMenu: boolean;
  showMobileMenu: boolean;
  showMobileMenuJobs: boolean;
  showLogin: boolean;
  showJobInMobileMenu: {
    id: string;
    state: boolean
  }
  setShowMegaMenu: (state: boolean) => void;
  setShowMobileMenu: (state: boolean) => void;
  setShowMobileMenuJobs: (state: boolean) => void;
  setShowLogin: (state: boolean) => void
  setShowJobInMobileMenu: (id: string, state: boolean) => void
}

const useHeader = create<useHeaderProps>(set => ({
  showMegaMenu: false,
  showMobileMenu: false,
  showMobileMenuJobs: false,
  showLogin: false,
  showJobInMobileMenu: {
    id: '',
    state: false
  },
  setShowMegaMenu: state => set({ showMegaMenu: state }),
  setShowMobileMenu: state => set({ showMobileMenu: state }),
  setShowMobileMenuJobs: state => set({ showMobileMenuJobs: state }),
  setShowLogin: state => set({ showLogin: state }),
  setShowJobInMobileMenu: (id, state) => set({ showJobInMobileMenu: { id, state } }),
}))

export default useHeader