import React,{useEffect} from "react";
import { motion } from "framer-motion";


function Modal(props) {


  function closeModal() {
    props.closeModal();
  }

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        {props.children}
        <div class="modal_btn_wrap">
          <motion.button whileTap={{scale:1.1}} id="modalCloseBtn" onClick={closeModal}>등록</motion.button>
          <motion.button whileTap={{scale:1.1}} id="modalCloseBtn" onClick={closeModal}>취소</motion.button>
        </div>
      </div>
    </div>
  );
}
 
export default Modal;



