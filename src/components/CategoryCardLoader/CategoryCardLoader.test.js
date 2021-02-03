import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CategoryCardLoader from "./CategoryCardLoader";

configure({ adapter: new Adapter() });

describe("CategoryCardLoader", () => {
  it("displays correct elements while loading", () => {
    const categoryCardLoader = shallow(<CategoryCardLoader />);

    expect(
      categoryCardLoader.find(".categoryCardLoader__wrapper")
    ).toHaveLength(1);
    expect(
      categoryCardLoader.find(".categoryCardLoader__imgWrapper")
    ).toHaveLength(1);
    expect(categoryCardLoader.find(".categoryCardLoader__header")).toHaveLength(
      1
    );
  });
});
