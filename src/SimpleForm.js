import React, { useState, useRef, useCallback, useEffect } from 'react';
import SearchBar from './SearchBar';

const HeavyComponent = ({ onClick, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>Some stuff here</p>
      <button className="button" onClick={onClick}>
        Done!
      </button>
    </>
  );
};

const HeavyComponentMemo = React.memo(HeavyComponent, (before, after) => {
  return before.title === after.title;
});

function SimpleForm() {
  const [input, setInput] = useState();
  const ref = useRef();

  useEffect(() => {
    ref.current = () => {
      console.log(input);
    };
  });

  const onClick = useCallback(() => {
    ref.current?.();
  }, []);

  return (
    <div className="App">
      <h1>Stale Closure Solution</h1>

      <>
        <SearchBar value={input} onChange={(value) => setInput(value)} />
        <HeavyComponentMemo title="Stale Closure" onClick={onClick} />
      </>
    </div>
  );
}

export default SimpleForm;