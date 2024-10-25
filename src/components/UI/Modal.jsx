import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Backdrop(props) {
  const navigate = useNavigate();
  function closeHandler() {
    if (!props.onClose) {
      return navigate("..");
    }
    return props.onClose();
  }
  return <div className={styles.backdrop} onClick={closeHandler}></div>;
}

function ModalOverlay(props) {
  return (
    <motion.div
      className={`${styles.modal} col-11 col-sm-10 col-md-auto`}
      initial={{ top: "60%", opacity: 0 }}
      animate={{ top: "50%", opacity: 1 }}
    >
      <div className={styles.content}>{props.children}</div>
    </motion.div>
  );
}

const portalElement = document.getElementById("modal");

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
