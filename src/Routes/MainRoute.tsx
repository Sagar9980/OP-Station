import { Route, Switch } from "react-router";
import SuperContainer from "Container/SuperContainer";

const MainRoute = () => {
  return (
    <Switch>
      <Route path="/" component={SuperContainer} />
    </Switch>
  );
};

export default MainRoute;
