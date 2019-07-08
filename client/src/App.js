import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header/Header'
import Users from './Users/Users'
import AddNewUser from './Users/AddNewUser'

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/users/add" component={AddNewUser} />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
