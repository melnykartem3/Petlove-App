import { useState } from 'react';
import clsx from 'clsx';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import css from './LogOutBtn.module.css';

export default function LogOutBtn({ theme = 'default', inMenu = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className={clsx(css.logOutBtn, css[`${theme}LogOutBtn`], {
          [css.inMenu]: inMenu,
        })}
        onClick={openModal}
      >
        Log out
      </button>
      <ModalApproveAction
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        closeModal={closeModal}
      />
    </>
  );
}
