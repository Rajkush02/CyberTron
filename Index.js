import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailForm';
import CardDetailsForm from './CardDetailFrom';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap/lib/InputGroup';

const App=() => {
    const [PersonalDetails , setPersonalDetails] = useState(null);
    const [CardDetails , setCardDetails ] = useState(null);
    const [ modalIsOpen , setModalIsOpen] = useState(false);

    const handlePersonalDetailsSubmit = (data) => {
        setPersonalDetails(data);
    };
    const CardDetailsSubmit = (data) => {
        setCardDetails(data);
        setModalIsOpen(true);

    };

    const closeModal =() =>{
        setModalIsOpen(false);

    };
    return(
        <div>
            <h1> Multi-Step Form</h1>
            {!PersonalDetails ? (
                <PersonalDetailsForm onNext={handlePersonalDetailsNext} />
            ): (
                <CardDetailsForm onSubmit={handleCardDetailsSubmit} />
                )}
           <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <h2>Collected Data</h2>
            <pre>{JSON.stringify({  ...PersonalDetails, ...App.CardDetails},null, 2)} </pre>
           
           
            <Button variant="Primary" onClick = {closeModal}>Close</Button>
           </Modal>
        </div>
    );
};

export default App;