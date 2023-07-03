import React, { useState } from 'react';
import { Form , Button } from 'react-bootstrap';

const PersonalDetailsForm = ({ onNext }) => {
    const [name , setName ]= useState('');
    const [email , setEmail ]= useState('');
    const [phoneNumber ,setPhoneNumber ] = useState('');
    const [address,setaddress ]= useState(' ');

    const handleNextClick = () => {

        if(!name || !email || !phoneNumber || !address ){
            alert ('Please fill in all fields');
            return;
        }

        onNext({name , email, phoneNumber, address});

    };
    return (
        <Form>
            <Form.Group controlId= "name">
                <Form.label>Name</Form.label>
                <Form.Control
                  type="text" placeholder ="Enter your name here..." value={name} 
                 
                  onChange={(e) => setName(e.target.value)}
                />
                   
            </Form.Group>
          <Form.Group controlId="email">
            <Form.Label > Email  </Form.Label>
            <Form.Control
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
          </Form.Group>
       
            <Form.Group controlId="PhoneNumber">
            <Form.Label > phoneNumber </Form.Label>
            <Form.Control
            type="Telephone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            /> 
            </Form.Group>

            <Form.Group controlId="address">
            <Form.Label > Address </Form.Label>
            <Form.Control
             type="text"
             value={address}
             onChange={(e) => setAddress(e.target.value)}
             />
            </Form.Group>
            <Button variant='primary' onClick={()=>handleNextClick()}> Next </Button>

        </Form>
    );
};
export default PersonalDetailsForm;
