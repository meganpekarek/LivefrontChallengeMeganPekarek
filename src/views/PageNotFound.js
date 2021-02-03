import "../App.css";
import React from "react";
import PageHeader from "../components/PageHeader";

function PageNotFound(props) {
  return (
    <React.Fragment>
      <PageHeader history={props.history} />
      <div className="pageNotFound__Wrapper">
        <div className="pageNotFound__Text">Page Not Found!</div>
      </div>
    </React.Fragment>
  );
}

export default PageNotFound;
