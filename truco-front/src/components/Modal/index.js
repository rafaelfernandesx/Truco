import React from 'react';
import { ModalBlur, ModalDialogForm, ModalHeader, ModalBody, ModalFooter, BtnCloseModal, ModalTitle, BtnBottomCloseModal, BtnBottomSaveModal } from './styled';


export function Modal(props) {

  function onSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const formObject = Object.fromEntries(formData);
    props.onSubmitForm()
  }

  function blurCloseModal(e) {
    if (e.target.getAttribute('id') === props.modalId){
      e.target.classList.remove('show-modal');
    }
  }

  return (
    <ModalBlur onClick={blurCloseModal} id={props.modalId}>
      <ModalDialogForm name={props.modalId} modalSize={props.modalSize} onSubmit={onSubmit}>
        <ModalHeader>
          <ModalTitle>{props.title}</ModalTitle>
          <BtnCloseModal type="button" onClick={() => closeModal(props.modalId)}>×</BtnCloseModal>
        </ModalHeader>
        <ModalBody>
          {props.children}
        </ModalBody>
        <ModalFooter>
          <BtnBottomCloseModal type="button" onClick={() => closeModal(props.modalId)}>Fechar</BtnBottomCloseModal>
          <BtnBottomSaveModal>Salvar</BtnBottomSaveModal>
        </ModalFooter>
      </ModalDialogForm>
    </ModalBlur>
  )
}

export function openModal(id) {
  document.getElementById(id).classList.add('show-modal');
}

export function closeModal(id) {
  document.getElementById(id).classList.remove('show-modal');
}