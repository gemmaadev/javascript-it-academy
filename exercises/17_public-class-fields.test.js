import { jest } from "@jest/globals";

test("17_public-class-fields-1: public class fields help us avoid .bind-ing everything", () => {
  class FakeReactComponent {
    constructor(props) {
      this.props = props;
      this.setState = () => {}; // només per diversió
    }
  }

  class MyComponent extends FakeReactComponent {
    constructor(...args) {
      super(...args);
      // no volem haver de fer això...
      // this.handleClick = this.handleClick.bind(this); // trist :-(
    }
    // converteix això en un camp públic de classe perquè s'autolligui
    handleClick = ({ target: { value } }) => {
      this.props.onClick(value);
    };
    render() {
      // coses estranyes de JSX aquí
    }
    // això és només perquè puguem provar coses
    testClick(value) {
      const fakeEvent = { target: { value } };
      this.handleClick(fakeEvent);
    }
  }

  const onClick = jest.fn();
  const myComponent = new MyComponent({ onClick });
  myComponent.testClick("hello world");
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onClick).toHaveBeenCalledWith("hello world");
});
