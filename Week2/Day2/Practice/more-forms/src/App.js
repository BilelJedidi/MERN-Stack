import react, { useState } from "react"
import './App.css';

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
  return (
    <div className="App">
<form onSubmit={() => {}}>
          <div>
            <label>First Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          {firstName.length < 2 && firstName.length > 0 ? (
            <p>First Name must be at least 2 characters</p>
          ) : null}
          <div>
            <label>Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
          </div>
          {lastName.length < 2 && lastName.length > 0 ? (
            <p>Last Name must be at least 2 characters</p>
          ) : null}
          <div>
            <label>Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          {email.length < 5 ? <p>Email must be at least 5 characters</p> : null}
          <div>
            <label>Password</label>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </div>
          {password.length < 8 ? (
            <p>Password must be at least 8 characters</p>
          ) : null}
          <div>
            <label>Confirm Password</label>
            <input type="text" onChange={(e) => setConfirmPw(e.target.value)} />
          </div>
          {confirmPw !== password ? <p>Passwords must match</p> : null}
        </form>
    </div>
  );
}

export default App;
