import React from "react";
import { Route, Switch } from "react-router-dom";

import { default as Header } from "./Layout/Header/HeaderContainer";
import Landing from "./Layout/Landing";
import NotFound from "./Layout/NotFound";
import { default as SideBar } from "./Layout/SideBar/SideBarContainer";
import { default as QuestionsPanel } from "./questions/containers/FilterQuestionsPanel";
import AdminHome from "./Layout/AdminHome";
import { default as Question } from "./questions/containers/QuestionContainer";
import { default as Users } from "./users/container/UserContainer";

const Routes = () => {
  const showAdminSideBar = () => {
    const isAdmin = new RegExp("/admin-dashboard/", "i");
    if (isAdmin.exec(window.location.pathname)) {
      return (
        <div className="col-2">
          <SideBar />
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            {showAdminSideBar()}
            <div className="col">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route
                  exact
                  path="/admin-dashboard/new-question"
                  component={Question}
                />
                <Route
                  exact
                  path="/admin-dashboard/questions/:id"
                  component={Question}
                />
                <Route
                  exact
                  path="/admin-dashboard/question-panel"
                  component={QuestionsPanel}
                />
                <Route
                  exact
                  path="/admin-dashboard/admin-home"
                  component={AdminHome}
                />
                <Route
                  exact
                  path="/admin-dashboard/add-user"
                  component={Users}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;
