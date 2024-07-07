import React, { useState } from './lib/teact/teact';

export const App = () => {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>This button is rendered by teact! Clicks: {count}</button>;
}
