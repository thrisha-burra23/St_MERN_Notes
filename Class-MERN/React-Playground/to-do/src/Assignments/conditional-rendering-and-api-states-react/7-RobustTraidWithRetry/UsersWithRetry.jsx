
import { useState,useEffect } from "react";
import Button from "../../../UI/Button";

const UsersWithRetry=()=>{


  // data array
  const [users, setUsers] = useState([]);
  // loading flag
  const [loading, setLoad] = useState(true);
  // error message
  const [error, setErr] = useState("");
  // trigger key to force re-run
  const [reloadKey, setReloadKey] = useState(0);
  const [empty,setEmpty]=useState(false);

  useEffect(() => {
    // named function for clarity
    async function loadUsers() {
      try {
        setLoad(true);
        setErr("");
        setEmpty(false)
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to load users");
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoad(false);
      }
    }
    loadUsers();
  }, [reloadKey]); // re-run when reloadKey changes

  // error first
  if (error)
    return (
      <div>
        <p style={{color:'red'}}>Error: {error}</p>
        {/* retry by bumping the key */}
        <Button onClick={() => setReloadKey(k => k + 1)}>Retry</Button>
      </div>
    );

  // loading next
  if (loading) return <p>Loading...</p>;

  // empty state
  if (users.length === 0) return (
    <div>
        <p>Empty Data</p>
          <Button onClick={() => setReloadKey(k => k + 1)}>Refetch</Button>
    </div>
  );


  const handleEmpty=()=>{
    console.log("setEmpty Clicked")
    setEmpty(true);
    setUsers([])
    
  }
  // success view
  return (
    <div>
      <Button onClick={() => setReloadKey(k => k + 1)}>Refetch</Button>
      <Button onClick={handleEmpty}>Empty</Button>

      <ul>
        {users.map(u => <li key={u.id}>{u.name} — {u.email}</li>)}
      </ul>
    </div>
  );


}

export default UsersWithRetry;