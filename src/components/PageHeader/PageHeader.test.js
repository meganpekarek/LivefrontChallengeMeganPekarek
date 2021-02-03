import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import PageHeader from "./PageHeader";

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/LivefrontChallengeMeganPekarek#/",
  }),
}));

describe("PageHeader", () => {
  it("renders filter categories when no subheader prop is passed", () => {
    const pageHeader = shallow(<PageHeader />);

    expect(
      pageHeader.contains(
        <header className="page__headerText">
          MY{" "}
          <img
            className="page__headerLogo"
            src="myMealLogo.svg"
            alt="my meal logo"
          />{" "}
          MEAL
        </header>
      )
    ).toEqual(true);
    expect(pageHeader.find(".page__filterOption")).toHaveLength(3);
    expect(pageHeader.find(".page__backArrow")).toHaveLength(0);
  });

  it("renders with subheader when subheader prop is passed", () => {
    const pageHeader = shallow(<PageHeader subheader="testSubheader" />);

    expect(
      pageHeader.contains(
        <header className="page__headerText">
          MY{" "}
          <img
            className="page__headerLogo"
            src="myMealLogo.svg"
            alt="my meal logo"
          />{" "}
          MEAL
        </header>
      )
    ).toEqual(true);
    expect(pageHeader.find(".page__filterOption").text()).toEqual(
      "testSubheader"
    );
  });
});
