import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/usuario' component={Cadastro}/>
        </Switch>
    </Router>
);

export default Routes;