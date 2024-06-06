import {useState} from 'react';
import './App.css';
import {User} from './types';
import Users from './components/Users/Users';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Den', active: true, email: 'den@mail.ru', role: 'admin'},
    {id: '2', name: 'Den', active: false, email: 'den@mail.ru', role: 'admin'}
  ]);

  return (
    <div className='row mt-2 justify-content-between'>
      <div className='col-6'>

      </div>
      <div className='col-3'>
        <Users users={users} />
      </div>
    </div>
  );
};

export default App;
