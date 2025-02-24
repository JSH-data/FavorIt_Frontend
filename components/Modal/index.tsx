import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { CSSTransition } from 'react-transition-group';

import Portal from 'components/Portal';
import { flexbox } from 'styles/mixins/_flexbox';

const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  ${flexbox()}
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-width: 456px;
  position: absolute;
  width: 100%;
`;

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  selector?: string;
};

function Modal({ children, isOpen, onClose, selector }: ModalProps) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      nodeRef={nodeRef}
      classNames="modal"
      unmountOnExit
    >
      <Portal selector={selector}>
        <Overlay>
          <Dim onClick={onClose} />
          <Container ref={nodeRef}>{children}</Container>
        </Overlay>
      </Portal>
    </CSSTransition>
  );
}

export default Modal;
