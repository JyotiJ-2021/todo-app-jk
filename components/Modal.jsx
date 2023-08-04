import React from "react"

const Modal = ({ modalOpen, setModalOpen, children }) => {
  return (
    modalOpen && (
      <div>
        <div onClick={() => setModalOpen(false)}> &times;</div>
        {children}
      </div>
    )
  )
}

export default Modal
