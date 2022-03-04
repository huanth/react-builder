import React, { useEffect } from "react";
import { Router, Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
      <>
        <div className="container">
          <h1>Home</h1>
          <Link to={`/form-builder/add-builder?userId=${currentUser._id ? currentUser._id : 'test_id_123'}`} className="nav-link">
            <button className="btn btn-primary btn-block">
              <span>Add Builder</span>
            </button>
          </Link>
        </div>
      </>
      <>
        <div className="container">
          <h2>List Builder Form</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Form Builder 1</td>
                <td>
                  <Link to={"/form-builder/1"} className="nav-link">
                    <button className="btn btn-primary btn-block">
                      <span>Edit</span>
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </Router>
  );
};

export default Home;
