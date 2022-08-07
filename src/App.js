import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components/Footer";
import Home from './screens/Home.js';
import Donate from './screens/Donate';
import VolApply from './screens/volApply';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/donate" >
          <Donate />
        </Route>
        <Route path="/volApply" >
          <VolApply />
        </Route>
        <Route path="/Home" >
          <Home />
        </Route>
        <Route path="*" >
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}
export default App;
