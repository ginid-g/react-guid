import classes from "./Modal.module.css";

import ReactDom from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return <div className={classes.modal}>{props.children}</div>;
}

const portalEle = document.getElementById("overlays");

function Modal(props) {
  return (
    <>
      {ReactDom.createPortal(<Backdrop />, portalEle)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEle
      )}
      ;
    </>
  );
}

export default Modal;
