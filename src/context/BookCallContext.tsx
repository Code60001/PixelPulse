"use client";

import React, { createContext, useContext, useState } from "react";
import { LetsTalkModal } from "@/components/ui/LetsTalkModal";

type BookCallContextType = {
  isModalOpen: boolean;
  openModal: (e?: React.MouseEvent) => void;
  closeModal: () => void;
};

const BookCallContext = createContext<BookCallContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {}
});

export function BookCallProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BookCallContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      <LetsTalkModal isOpen={isModalOpen} onClose={closeModal} />
    </BookCallContext.Provider>
  );
}

export function useBookCall() {
  return useContext(BookCallContext);
}
