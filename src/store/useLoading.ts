import { create } from 'zustand'

type useLoadingTypes = {
  loadingKeys: string[];
  addLoadingKey: (key: string) => void;
  removeLoadingKey: (key: string) => void
}

const useLoading = create<useLoadingTypes>(set => ({
  loadingKeys: [],
  addLoadingKey: key => set(state => ({ loadingKeys: [...state.loadingKeys, key] })),
  removeLoadingKey: key => set(state => ({ loadingKeys: state.loadingKeys.filter(_key => _key !== key) }))
}))

export default useLoading