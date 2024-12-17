import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import icons from '../../images/sprite/sprite.svg';
import catEmoji from '../../images/cat/catEmoji.png';
import catEmoji_2x from '../../images/cat/catEmoji@2x.png';
import { signoutUser } from '../../redux/users/operations.js';
import css from './ModalApproveAction.module.css';

Modal.setAppElement('#root');

export default function ModalApproveAction({
  isOpen,
  onRequestClose,
  closeModal,
}) {
  const dispatch = useDispatch();

  const confirmLogout = () => {
    dispatch(signoutUser());
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Log Out"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={css.modalWrapper}>
        <button onClick={handleCancel} className={css.closeButton}>
          <svg className={css.closeIcon}>
            <use href={`${icons}#crossModal`}></use>
          </svg>
        </button>
        <div className={css.iconWrapper}>
          <picture>
            <source
              srcSet={`${catEmoji} 1x, ${catEmoji_2x} 2x`}
              type="image/png"
              width="44"
              height="44"
            />
            <img src={catEmoji} alt="Cat emoji" />
          </picture>
        </div>
        <span className={css.span}>Already leaving?</span>
        <div className={css.btnWrapper}>
          <button onClick={confirmLogout} className={css.btnApprove}>
            Yes
          </button>
          <button onClick={handleCancel} className={css.btnCancel}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
