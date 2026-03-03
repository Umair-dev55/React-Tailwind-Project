import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/features/counterSlice";

function App() {
  const count = useSelector((e) => e.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
