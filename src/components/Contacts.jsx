import React from 'react';
import { Table } from 'reactstrap';
import { HttpService, handleResponse } from '../http/HttpService';

const httpService = new HttpService();

export default class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: '',
    }
  }

  componentDidMount = () => {
    //ide a getAll contacts rest endpoint-ot
    httpService.get('user-contacts')
      .then(handleResponse)
      .then(response => {
        this.setState({ data: response })
      })
      .catch(error => this.setState({ error: error }));
  }

  isEmpty = arr => {
    return arr.length === 0;
  }

  //ide az adatokat kellene behelyettesiteni
  render() {
    return (
      !this.isEmpty() ?
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>PhoneNumber</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>061</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>062</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>063</td>
            </tr>
          </tbody>
        </Table>
        : this.state.error ?
          "Unable to load contacts"
          : "Loading..."
    );
  }
}