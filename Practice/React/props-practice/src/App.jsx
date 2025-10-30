import ProductsList from "./ProductsList";
import ProfileCard from "./ProfileCard";
import MsgBox from "./MsgBox";

function App() {
  return (
    <>
    <MsgBox userName="Thrisha"  textColor="red"/>
      <ProfileCard
        name="Thrisha"
        title="Developer"
        bio="A developer who is ready to accept challenges everyday"
      />
      <ProfileCard
        name="Thrisha"
        title="Developer"
        bio="A developer who is ready to accept challenges everyday"
      />
      <ProfileCard
        name="Thrisha"
        title="Developer"
        bio="A developer who is ready to accept challenges everyday"
      />

      <ProductsList/>
    </>
  );
}

export default App;
