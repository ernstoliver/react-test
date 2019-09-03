import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';

export const ContactRow = ({ index: i, contact, isEditable, triggerEditable, editContact, deleteContact }) => {
  const [state, setState] = useState({
    firstName: contact.firstname,
    lastName: contact.lastname,
    email: contact.email,
    phoneNumber: contact.phonenumber
  });

  const onChange = e => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <tr>
      {console.log(state)}
      <th scope="row">{i}</th>
      <td><Input value={contact.firstname} readOnly={!isEditable} onChange={onChange} name={"firstName"} /></td>
      <td><Input value={contact.lastname} readOnly={!isEditable} onChange={onChange} name={"lastName"} /></td>
      <td><Input value={contact.email} readOnly={!isEditable} onChange={onChange} name={"email"} /></td>
      <td><Input value={contact.phonenumber} readOnly={!isEditable} onChange={onChange} name={"phoneNumber"} /></td>
      <td>
        <Button
          onClick={() => triggerEditable(isEditable, contact.id)}
        >
          {isEditable ? "Cancel" : "Edit"}
        </Button>
        <Button
          className={isEditable ? "btn btn-success" : "btn btn-danger"}
          onClick={isEditable ? () => editContact(state) : () => deleteContact()}
        >
          {isEditable ? "Save" : "Delete"}
        </Button>
      </td>
    </tr>
  )
}