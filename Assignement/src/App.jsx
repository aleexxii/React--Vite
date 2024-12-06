import { useState, useCallback } from "react";
import UserList from "./components/UserList";
import Counter from "./components/counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const userData = [
    { name: "Leanne Graham", email: "leannegraham@abc.com" },
    { name: "Ervin Howell", email: "ervinhowell@abc.com" },
  ];

  return (
    <>
      <div>
        <UserList users={userData} />
      </div>

      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
