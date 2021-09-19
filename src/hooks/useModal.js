import { useState } from "react";
import { useDispatch } from "react-redux";
import { cleanActive } from "../actions/data";

export const useModal = (initialValue = false) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(initialValue);
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    dispatch(cleanActive());
    return setIsOpen(false);
  };
  return [isOpen, openModal, closeModal];
};
