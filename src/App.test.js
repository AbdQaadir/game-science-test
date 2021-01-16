import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import Button from "./components/Button/Button";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render a button", () => {
    const Btn = wrapper.find(Button);
    expect(Btn.exists()).toBe(true);
  });
});
