import React from 'react';
import styles from '../../style/Modal.module.css'; // Updated to import CSS module

const Modal = ({ doctors, onClose }) => {
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        <div className={styles.top}> <h2>All Doctors</h2>
          <button className={styles['close-btn']} onClick={onClose}>X</button>
         
        </div>

        <div className={styles['doctor-list']}>
          {doctors.map((doctor, index) => (
            <div key={index} className={styles['doctor-item']}>
              <img src={`http://localhost:5000/${doctor.img}`} alt={doctor.name} />
              <div class={styles['mid-first']}>
      <strong>dr.{doctor.name}</strong>
      <span>{doctor.department}</span>
    </div>
    <div class={styles['doc-bottom']}>
      <strong>phone: <span>{doctor.phoneNumber}</span></strong>
      <strong>phone: <span>658 222 127 964</span></strong>
    </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
