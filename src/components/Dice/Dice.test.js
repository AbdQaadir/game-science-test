import { shallow } from "enzyme";
import Dice from "./Dice";

const value = "";
describe("Dice Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dice value={value} />);
  });

  it("should have an image element", () => {
    const imageEl = wrapper.find("img");

    expect(imageEl.exists()).toBe(true);
  });
});
