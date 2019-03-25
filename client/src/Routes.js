import React from "react";
import { Route } from "react-router-dom";

import { default as Header } from "./Layout/Header/HeaderContainer";
import Landing from "./Layout/Landing";
import { default as Question } from "./questions/containers/QuestionContainer";
import { default as SideBar } from "./Layout/SideBar/SideBarContainer";
import { default as QuestionsPanel } from "./questions/components/FilterQuestionsPanel";
import AdminHome from "./Layout/AdminHome";
import NotFound from "./Layout/NotFound";

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
              <Route exact path="/" component={Landing} />
              <Route
                exact
                path="/admin-dashboard/new-question"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;
