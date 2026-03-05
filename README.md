## What is JSX, and why is it used?

- JSX stands for JavaScript XML. It is a syntax that allows developers to write HTML-like code inside JavaScript. This makes it easier to create and design user interfaces in React. Browsers cannot understand JSX directly. Therefore, it needs to be converted into regular JavaScript. This conversion is done using Babel. Babel is an open-source JavaScript compiler that transforms modern JavaScript (such as ES6) into a version that can run in older browsers or environments.

## What is the difference between State and Props?

- State is used to store dynamic data inside a component. It belongs to the component itself and can be changed or updated using functions like setState or useState. The component controls and manages its own state, and when the state changes, the component re-renders.

- Props are used to pass data from a parent component to a child component. Props are read-only, meaning they cannot be changed directly by the child component. The parent component controls the data, and the child component only receives and uses it.

## What is the useState hook, and how does it work?

- State is used to store data inside a component. When the state changes, the component re-renders automatically to update the UI. State works with two values:
  Current value – the present state value
  Update function – a function used to change the state value
  Ex:

```
import { useState } from "react";

const Counter=()=> {
  const [count, setCount] = useState(0);

  const handlClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handlClick}>Increase</button>
    </div>
  );
}

export default Counter;
```
