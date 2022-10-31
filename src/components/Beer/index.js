import React, { useState } from 'react';
import Modal from 'react-modal';

import './styles.css';

export default function Beer({beer}) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#2FA4E7';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '500px',
        },
    };

    let subtitle;
    Modal.setAppElement('#root');

    return (
        <div className="col-sm-3 mt-3 mb-3">
            <div className="card">
                <img src={beer.image_url} className="card-img-top" alt={beer.name} />
                <div className="card-body">
                    <h5 className="card-title">{beer.name}</h5>
                    <button className="btn btn-primary" onClick={()=>openModal()}>
                        <i className="fa fa-plus fa-2x" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Name: {beer.name}</h2>
                <h3 >ID: {beer.id}</h3>
                <h4>Tag: {beer.tagline}</h4>
                <p><strong>Description:</strong> {beer.description}</p>                
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
}
