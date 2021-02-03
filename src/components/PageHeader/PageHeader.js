import "./PageHeader.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../images/myMealLogo.svg";
import BackArrow from "../../images/backArrow.svg";

function PageHeader(props) {
  let loc = useLocation();
  let [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    if (loc.pathname === "/") {
      setActiveFilter("categories");
    } else if (loc.pathname === "/by-ingredient") {
      setActiveFilter("ingredients");
    } else if (loc.pathname === "/by-region") {
      setActiveFilter("regions");
    }
  }, [loc.pathname]);

  const goToFilter = (filter) => {
    props.history.push(filter);
  };

  const goBack = () => {
    props.history.goBack();
  };

  const subheader = props.subheader ? (
    <span className="page__subHeaderText">{props.subheader}</span>
  ) : (
    <React.Fragment>
      <button
        className={`page__filterOption ${
          activeFilter === "categories" ? "page__filterActive" : ""
        }`}
        onClick={() => goToFilter("/")}
      >
        By Category
      </button>
      <button
        className={`page__filterOption ${
          activeFilter === "ingredients" ? "page__filterActive" : ""
        }`}
        onClick={() => goToFilter("/by-ingredient")}
      >
        By Ingredient
      </button>
      <button
        className={`page__filterOption ${
          activeFilter === "regions" ? "page__filterActive" : ""
        }`}
        onClick={() => goToFilter("/by-region")}
      >
        By Region
      </button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="page__headerWrapper">
        {loc.pathname.includes("/recipes") && (
          <button className="page__backArrow app__backArrow" onClick={goBack}>
            <img className="app__backArrowImg" src={BackArrow} alt="go back" />
          </button>
        )}
        <header className="page__headerText">
          MY <img className="page__headerLogo" src={Logo} alt="my meal logo" />{" "}
          MEAL
        </header>
        <div className="page__filtersWrapper">{subheader}</div>
      </div>
    </React.Fragment>
  );
}

export default PageHeader;
