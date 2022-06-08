import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Header>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
        </Header>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
