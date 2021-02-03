import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import ByRegion from "../views/ByRegion";
import { act, render, cleanup, waitFor } from "@testing-library/react";
import axios from "axios";

configure({ adapter: new Adapter() });
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/LivefrontChallengeMeganPekarek#/",
  }),
}));

const regions = {
  meals: [
    {
      strArea: "Canadian",
    },
    {
      strArea: "British",
    },
    {
      strArea: "Irish",
    },
  ],
};

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({ data: regions }));
});
afterEach(cleanup);

describe("ByRegion", () => {
  it("displays proper elements before content loads", () => {
    const byRegion = shallow(<ByRegion />);

    expect(byRegion.find("PageHeader")).toHaveLength(1);
    expect(byRegion.find(".app__cardsWrapper")).toHaveLength(1);
    expect(byRegion.find(".app__cardsContainer")).toHaveLength(1);
    expect(byRegion.find("TextCardLoader")).toHaveLength(16);
  });
  it("displays proper elements after content loads", async () => {
    const byRegion = shallow(<ByRegion />);

    expect(byRegion.find("PageHeader")).toHaveLength(1);
    expect(byRegion.find(".app__cardsWrapper")).toHaveLength(1);
    expect(byRegion.find(".app__cardsContainer")).toHaveLength(1);

    await act(async () => {
      const { getByText } = render(<ByRegion />);
      await waitFor(() => getByText("Canadian"));
      getByText("British");
      getByText("Irish");
    });
  });
});
