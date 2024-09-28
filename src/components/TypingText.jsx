import { ReactTyped } from "react-typed";

const MyComponent = () => (
  <div>
    <ReactTyped strings={["i'm👌"]} typeSpeed={40} />
    <br />

    <ReactTyped
      strings={[
        "Junior Web Developer",
        "JavaScript Developer",
        "Laravel Developer",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
  </div>
);

export default MyComponent;