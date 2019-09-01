import React ,{ useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { HttpService, handleResponse } from '../http/HttpService';

export const Login = ({ history }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const requestLogin = e => {
    const httpService = new HttpService();
    if(error) {
      setError('');
    }
    //a 'login' -t majd csereld a megfelelo rest endpoint-ra
    httpService.post('/login', {
      username: username,
      password: password
    })
    .then(handleResponse)
    .then(() => history.push('/contacts'))
    .catch(error => setError(error));
  }

  return (
    <div>
      {error && <Alert color="danger">Invalid Login</Alert>}
      <Form onSubmit={requestLogin}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}