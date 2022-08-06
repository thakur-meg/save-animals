import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Home from './screens/Home.js';
import Donate from './screens/Donate';
import volApply from './screens/volApply';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" >
          <Home />
        </Route>
        <Route path="/donate" >
          <Donate />
        </Route>
        <Route path="/volApply" >
          <volApply />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}
export default App;
