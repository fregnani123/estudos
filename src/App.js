import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const count1 = useSelector(state => state.counter1.count);
  const count2 = useSelector(state => state.counter2.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Contador 1</p>
      <h1>Contador: {count1}</h1>
      <button onClick={() => dispatch(increment('counter1'))}>Incrementar</button>
      <button onClick={() => dispatch(decrement('counter1'))}>Decrementar</button>

      <p>Contador 2</p>
      <h1>Contador: {count2}</h1>
      <button onClick={() => dispatch(increment('counter2'))}>Incrementar</button>
      <button onClick={() => dispatch(decrement('counter2'))}>Decrementar</button>
    </div>
  );
}

export default App;
