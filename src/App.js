import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { ROUTES } from "./utility/constant";
import { Grid } from "@material-ui/core";
import ErrorBoundary from "./components/common/ErrorBoundary";

const AgGridTableComponent = lazy(() => import("./components/AgGridTable"));
const PageNotFound = lazy(() => import("./components/common/PageNotFound"));
const FormComponent = lazy(() => import("./components/Form"));

function App() {
  return (
    <>
      <Grid className="bodyContainer">
        <ErrorBoundary>
          <Header />
          <Grid className="mainContainer">
            <Router>
              <Suspense fallback={<Grid>Loding...</Grid>}>
                <Switch>
                  <Route exact path={ROUTES.home}>
                    <Redirect
                      to={ROUTES.employeeList}
                      component={AgGridTableComponent}
                    />
                  </Route>
                  <Route
                    exact
                    path={ROUTES.employeeList}
                    component={AgGridTableComponent}
                  />
                  <Route
                    exact
                    path={ROUTES.addEmployee}
                    component={FormComponent}
                  />
                  <Route
                    exact
                    path={ROUTES.editEmployee}
                    component={FormComponent}
                  />
                  <Route path={ROUTES.pageNotFound} component={PageNotFound} />
                </Switch>
              </Suspense>
            </Router>
          </Grid>
          <Footer />
        </ErrorBoundary>
      </Grid>
    </>
  );
}

export default App;
