// useModal.js
import { useState } from "react";

function useViewModal() {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedData(null);
  };

  return {
    showModal,
    selectedData,
    openModal,
    closeModal,
  };
}

export default useViewModal;
