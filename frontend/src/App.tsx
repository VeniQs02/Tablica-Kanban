import './App.css';
import Users from './model/Users.js';
import UserAdd from './model/UserAdd.js';

function App() {



  return (
      <>

        <div className="App">
          <UserAdd/>
          <Users/>
        </div>
      </>
  );
}

export default App;
