import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import PageNotFound from "../views/PageNotFound";

configure({ adapter: new Adapter() });
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/LivefrontChallengeMeganPekarek#/",
  }),
}));

describe("PageNotFound", () => {
  it("displays proper elements", () => {
    const pageNotFound = shallow(<PageNotFound />);

    expect(pageNotFound.find("PageHeader")).toHaveLength(1);
    expect(pageNotFound.find(".pageNotFound__Wrapper")).toHaveLength(1);
    expect(pageNotFound.find(".pageNotFound__Text").text()).toEqual(
      "Page Not Found!"
    );
  });
});
