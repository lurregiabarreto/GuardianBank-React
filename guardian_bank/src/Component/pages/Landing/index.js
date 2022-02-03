import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Header from "../../Header";

export default class Landing extends Component {



    render() {
    return (
      <div>
        <Header title="Landing Page" />
        <hr />
        <Form>
          <FormGroup>
            <Label for="name"> Nome: </Label>
            <Input type="text" id="name" placeholder="Informe o seu nome" />
          </FormGroup>
          <FormGroup>
            <Label for="email"> Email: </Label>
            <Input type="text" id="email" placeholder="Informe o seu email" />
          </FormGroup>
          <FormGroup>
            <Label for="observations"> Observações: </Label>
            <Input
              type="text"
              id="observations"
              placeholder="Digite alguma observação"
            />
          </FormGroup>
          <Button color="danger" block>
            {" "}
            ENVIAR
          </Button>
        </Form>
      </div>
    );
  }
}