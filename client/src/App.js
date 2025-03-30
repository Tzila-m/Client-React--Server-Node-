import './App.css';
import { Routes, Route } from 'react-router-dom';
import GetAllPosts from './Components/Posts/GetAllPosts'
import GetAllTodos from './Components/Todos/GetAllTodos'
import GetAllUsers from './Components/Users/GetAllUsers'
import Main from './Components/Main';


function App() {
  return (
    <div>
        <Routes>
            <Route path ='/' element = {<Main/>}>
            <Route path ='/posts' element={<GetAllPosts/>}/>
            <Route path ='/todos' element={<GetAllTodos/>}/>
            <Route path ='/users' element={<GetAllUsers/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
