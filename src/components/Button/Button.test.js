import { shallow } from "enzyme";
import Button from "./Button";

const title = "Roll Dice";
const fetchDice = jest.fn();
describe("Button", () => {
  const wrapper = shallow(<Button title={title} fetchDice={fetchDice} />);
  it("renders the button and simulate clicks", () => {
    const button = wrapper.find("#roll-dice");
    expect(button.exists()).toBe(true);

    button.simulate("click");
    expect(fetchDice).toHaveBeenCalled();
  });

  it("has the text Roll Dice", () => {
    const buttonText = wrapper.find("#roll-dice").text();
    expect(buttonText).toBe(title);
  });
});
