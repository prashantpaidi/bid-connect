import { create } from 'zustand';

interface TenderModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useTenderModal = create<TenderModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useTenderModal;
