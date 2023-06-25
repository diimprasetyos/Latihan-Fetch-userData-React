import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const  [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json('success');
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.length > 0 &&(
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}, {user.email}</li>
          ))}
          
        </ul>
      )}
    </div>
  );
}

export default App;
