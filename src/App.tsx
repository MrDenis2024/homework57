import {useState} from 'react';
import './App.css';
import {User} from './types';
import Users from './components/Users/Users';
import UserForm from './components/UserForm/UserForm';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <div className='row mt-2 justify-content-around'>
      <div className='col-3'>
        <UserForm  onSubmit={addUser} />
      </div>
      <div className='col-3'>
        <Users users={users} />
      </div>
    </div>
  );
};

export default App;
