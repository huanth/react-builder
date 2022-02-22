import React, { useEffect } from "react";
import { Router,Switch, Route, Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddBuilder from "./Builder/AddBuilder/Add";
import { history } from "../helpers/history";
import { clearMessage } from "../actions/message";

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
    });
  }, [dispatch]);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Router history={history}>
      <div className="container">
        <h1>Home</h1>
        <Link to={"/form-builder/add-builder"} className="nav-link">
          <button className="btn btn-primary btn-block">
            <span>Add Builder</span>
          </button>
        </Link>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/form-builder/add-builder" component={AddBuilder} />
          </Switch>
          </div>
      </div>
    </Router>
  );
};

export default Home;