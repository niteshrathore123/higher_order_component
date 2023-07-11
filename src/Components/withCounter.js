import { useState } from "react";

const WithCounter = (WrappedComp) => {
  const NewComp = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };
    return <WrappedComp count={count} incrementCount={incrementCount} />;
  };
  return NewComp;
};
export default WithCounter;
