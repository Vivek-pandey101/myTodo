import Home from "./component/Home";
import MyState from "./context/MyState";

function App() {
  return (
    <MyState>
      <div>
        <Home />
      </div>
    </MyState>
  );
}

export default App;

