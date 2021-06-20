import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "Views/Home/Home";

function ProtectedRoute(props: any) {
  return (
    <Switch>
      <Route path={`{props.match?.path}home`} component={Home} />
    </Switch>
  );
}

export default ProtectedRoute;
