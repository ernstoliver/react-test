import React from 'react';
import { Table, Button } from 'reactstrap';
import { HttpService, handleResponse } from '../http/HttpService';
import { ContactRow } from './ContactRow';

const httpService = new HttpService();

export default class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: '',
      editableRows: []
    }
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = () => {
    httpService.get('/contacts/' + localStorage.getItem('id'))
      .then(handleResponse)
      .then(response => {
        this.setState({ data: response })
      })
      .catch(error => this.setState({ error: error }));
  }

  isEmpty = arr => {
    return arr.length === 0;
  }

  triggerEditable = (isEditable, id) => {
    let modifiedArray;
    if (isEditable) {
      modifiedArray = this.state.editableRows.filter(e => e !== id);
    } else {
      modifiedArray = [...this.state.editableRows, id];
    }
    this.setState({ editableRows: modifiedArray });
  }

  editContact = contact => {
    //query?
    httpService.put('/edit/' + localStorage.getItem('id'), contact)
      .then(handleResponse)
      .catch(() => alert('Failed to edit contact'));
  }

  deleteContact = () => {
    if (window.confirm('Confirm deletion')) {
      httpService.delete('/delete/' + localStorage.getItem('id'))
        .then(handleResponse)
        .then(() => this.fetchData())
        .catch(() => alert('Failed to delete contact'));
    }
  }

  render() {
    const { data } = this.state;
    return (
      !this.isEmpty(data) ?
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((contact, i) => {
              const isEditable = this.state.editableRows.indexOf(contact.id) !== -1;
              return (
                <ContactRow
                  key={contact.id}
                  index={i}
                  contact={contact}
                  isEditable={isEditable}
                  triggerEditable={this.triggerEditable}
                  editContact={this.editContact}
                  deleteContact={this.deleteContact}
                />
              )
            })}
          </tbody>
          <Button>Add Contact</Button>
        </Table>
        : this.state.error ?
          "Unable to load contacts"
          : "Loading..."
    );
  }
}