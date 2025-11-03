import Toggle from "./ConditionalRendering-AND/Toggle.jsx";
import LoginGate from "./EitherOrRendering-ternary/LoginGate.jsx";
import PostContainer from "./EarlyReturns-Loding-Error-Empty-Data/PostContainer.jsx";

function App() {
  return (
    <>
      <div>
        <Toggle />
        <hr />
        <LoginGate />
        <hr />
        <PostContainer/>
      </div>
    </>
  );
}

export default App;
