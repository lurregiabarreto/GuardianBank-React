import react, {Component} from "react";
import Login from "./Component/pages/Login";
import "./App.css"


class App extends Component {
    render(){
        return(
            <div className="App">
                <Login/>
            </div>
        );
    }
}

export default App