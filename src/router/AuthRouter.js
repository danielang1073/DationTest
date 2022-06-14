import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { LoginScreen } from "../components/auth/LoginScreen";
import { SignUp } from "../components/signup/SignUp";

export const AuthRouter = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />

          <Route exact path="/auth/signup" component={SignUp} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};
