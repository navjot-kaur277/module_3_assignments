import { useState } from 'react';

function Counter() {
  // 1. Initialize state variable 'count' with 0
  const [count, setCount] = useState(0);

  // Function to handle the click
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* 2. Display number in an h3 tag */}
      <h3>{count}</h3>
      
      {/* 3. Button that increments the number */}
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;