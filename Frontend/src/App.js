import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUsers from './Components/AddUsers';
import AllUsers from './Components/AllUsers';
import EditUsers from './Components/EditUser';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/allUsers' exact component={AllUsers} />
        <Route path='/addUser' exact component={AddUsers} />
        <Route path="/editUser/:id" exact component={EditUsers} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
