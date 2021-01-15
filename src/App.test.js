import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("error text should be present and empty", () => {
    const errorText = wrapper.find(".error").text();
    expect(errorText).toBe("");
  });
});
