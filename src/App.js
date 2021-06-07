import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio";
import Nuevo from "./components/Nuevo";
import Consulta from "./components/Consulta";
import Proveedores from "./components/Proveedores";
import Administrador from "./components/Administrador";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AiOutlineFileAdd, AiOutlineProfile } from 'react-icons/ai';
import { FaUserFriends, FaUserAlt } from 'react-icons/fa';
import { IoIosKeypad} from 'react-icons/io';

function App() {
  return (
    <div className="app">
      <div className={"main-container"}>
        <Provider store={store}>
          <Router>
              <nav className={"nav-bar"}>
                <ul>
                  <li>
                    <Link to="/"><IoIosKeypad/> Inicio</Link>
                  </li>
                  <li>
                    <Link to="/nuevo"><AiOutlineFileAdd/> Nuevo</Link>
                  </li>
                  <li>
                    <Link to="/consulta"><AiOutlineProfile/> Consulta</Link>
                  </li>
                  <li>
                    <Link to="/proveedores"><FaUserFriends/> Proveedores</Link>
                  </li>
                  <li>
                    <Link to="/administrador"><FaUserAlt/> Administrador</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/nuevo" component={Nuevo} />
                <Route path="/consulta" component={Consulta} />
                <Route path="/proveedores" component={Proveedores} />
                <Route path="/administrador" component={Administrador} />
              </Switch>
          </Router>
        </Provider>
      </div>
    </div>
  );
}

export default App;
