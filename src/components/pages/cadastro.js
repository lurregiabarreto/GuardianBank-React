import react, {useState} from 'react';
import {Form, FormGroup, Input, Button, Label, Alert} from 'reactstrap';
import Header from '../Header';

const Cadastro = (props) => {
    const [mensagem, setMensagem] = useState("")
    const [cor, setCor] = useState("")
    const dadosDeCadastro = {
        email: "",
        senha: ""
    }

    const register = () => {

        const url = "http://localhost:8080/usuario";
        const data = {
            email: dadosDeCadastro.email,
            senha: dadosDeCadastro.senha,
        };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

        fetch(url, requestInfo)
        .then(response => {
            if (!response.ok) {
                throw new Error("Dados inválidos")
            }
            setMensagem('O cadastro foi realizado com sucesso!')
            setCor('success')
        })
        .catch( e => {
            console.log(e)
            setMensagem('Dados inválidos')
            setCor('danger')
        });
    }

    return(
        <div className='Content'>
            <Header title='Guardian Bank'/>
            {
                mensagem !== ''? (
                    <Alert color={cor} className='text-center'>{mensagem}</Alert>
                ) : ''
            }
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type='text' id='email' placeholder='Email' onChange={e => dadosDeCadastro.email = e.target.value}/>
                </FormGroup>
                <FormGroup>
                <Label for="password">Senha</Label>
                    <Input type='password' id='password' placeholder='Senha' onChange={e => dadosDeCadastro.senha = e.target.value}/>
                </FormGroup>
                <Button color='primary' onClick={register}>Cadastre-se</Button>
            </Form>
        </div>
    )
} 

export default Cadastro;