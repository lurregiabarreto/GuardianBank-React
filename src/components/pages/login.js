import react, {Component} from 'react';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';
import Header from '../Header';

export default class Login extends Component {

    render() {
        return(
            <div>
                <Header title='Guardian Bank'/>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type='text' id='email' placeholder='Email'/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Senha</Label>
                        <Input type='password' id='password' placeholder='Senha'/>
                    </FormGroup>
                    <Button color='primary'>Entrar</Button>
                </Form>
            </div>
        )
    }
}