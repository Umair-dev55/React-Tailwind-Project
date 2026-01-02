import Basics from "./Components/Basic";
import Array from "./Array";
import Counter from "./Components/Counter";
import BatchUpdate from "./Components/BatchUpdate";
import Object from "./Components/Object";
import Prev from "./Components/Prev";

const App = () => {
  return (
    <div className="">
      <Prev/>
      <Object />
      <Array />
      <Counter />
      <Basics />
      <BatchUpdate />
    </div>
  );
};

export default App;
