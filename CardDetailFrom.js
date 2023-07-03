import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CardDetailsForm= ({ onSubmit }) => {
    const  [cardholderName, setCardholderName] =useState ('');
    const  [CardNumber, setCardNumber ] = useState('');
    const  [expiryDate, setExpiryDate ] = useState('');
    const  [cvv, setCVV ] =useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;    
        

        onSubmit({ cardholderName, CardNumber , expiryDate ,cvv});
    };
    return(
        

        <Form onSubmit= {handleSubmit}>
            <Form.Group controlId="cardholderName">
                <Form.label>cardholderName</Form.label>
                <Form.Control type='text' placeholder="Enter your name" value={cardholderName   
                } onChange={(event)=>setCardholderName( event.target.value)}
                required
                />
            </Form.Group>
            <Form.Group controlId="cardNumber">
                <Form.label>cardNumber</Form.label>
                <Form.Control type='text' value={cardNumber} 
                onChange={(event)=>setCardNumber( event.target.value)}
                required
                />
            </Form.Group>
            <Form.Group controlId="expiryDate">
                <Form.label>expiryDate</Form.label>
                <Form.Control type='text' value={expiryDate} 
                onChange={(event)=>setExpiryDate( event.target.value)}
                required
                />
                </Form.Group>
            <Form.Group controlId="cvv">
                <Form.label>CVV</Form.label>
                <Form.Control type='text' value={expiryDate} 
                onChange={(event)=>setCVV( event.target.value)}
                required
                />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>


        </Form>
    );
            };

    export default CardDetailsForm;
        
