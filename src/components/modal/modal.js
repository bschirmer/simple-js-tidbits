import React from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
import "./modal.css";

const Modal = () => {

    function toggleModal(){
        const modalOverlay =  document.querySelector(".modal-overlay");
        modalOverlay.classList.toggle('open-modal');
    }

    return(
        <div className="modal">
            <div className="banner">
                <h1>Modal project</h1>
                <Button onClick={() => toggleModal() }>Open Modal</Button>
            </div>

            <div className="modal-overlay">
                <div className="modal-container">
                    <h3>Modal content</h3>
                    <Button onClick={() => toggleModal()}><FontAwesomeIcon icon={faXbox}/></Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;