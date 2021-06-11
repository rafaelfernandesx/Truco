import styled from 'styled-components';

export const ModalBlur = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.4);
  z-index: 50;
  margin-top: -1000px;
  transition: 0.2s margin-top;
  overflow-y: auto;
`;
export const ModalDialogForm = styled.form`
  display: flex;
  margin-top: -20%;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.modalSize || 40}vw;
  min-width: 350px;
  background-color: #FFF;
  border-radius: 5px;
  overflow: hidden;
`;
export const ModalHeader = styled.div`
  position:relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #CCC;
  height: 40px;
`;
export const ModalTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 14px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
`;
export const BtnCloseModal = styled.button`
  position: absolute;
  font-weight: bold;
  font-size: 20px;
  right: 0px;
  width: 39px;
  height: 39px;
  background-color: #fff;
  border: none;
  color: #000;
  &:hover {
    background-color: #efefef;
  }
  &:active {
    background-color: #e6e6e6;
  }
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #CCC;
  padding: 14px 0px;
`;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
export const BtnBottomCloseModal = styled.button`
  height: 40px;
  width: 100px;
  background-color: #e1e1e1;
  border: none;
  color: #000;
  &:hover {
    background-color: #efefef;
  }
  &:active {
    background-color: #e6e6e6;
  }
`;
export const BtnBottomSaveModal = styled.button`
  height: 40px;
  width: 100px;
  background-color: #53b770;
  border: none;
  color: #000;
  &:hover {
    background-color: #53c876;
  }
  &:active {
    background-color: #49ad66;
  }
`;