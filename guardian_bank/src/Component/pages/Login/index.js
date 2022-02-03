import react, {Component} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import Header from './Component/Header'

export default class Login extends Component {
    render() {
        return(
            <div>
                <Header title="Página de login"/>
                <hr />
                <Form>
                    <FormGroup>
                        <Label for="email"> Email</Label>
                        <Input type="text" id="email" placeholder="Informe o seu email: "/>
                    </FormGroup> 
                    <FormGroup>
                        <Label for="password"> Senha</Label>
                        <Input type="password" id="password" placeholder="Informe a sua senha: "/>
                    </FormGroup> 
                    <Button color="primary" block> Entrar </Button>
                </Form>
            </div>
        );
    }
} 