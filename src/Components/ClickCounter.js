import WithCounter from "./withCounter";

const ClickCounter = ({ count, incrementCount }) => {
  return <button onClick={incrementCount}>Button Click {count} times</button>;
};
export default WithCounter(ClickCounter);
