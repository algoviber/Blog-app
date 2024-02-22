import './App.css';
import Header from './Header';
import Indexpage from './Pages/indexpage';
import Layout from './Layout';
import Post from './post';
import { Route, Routes } from "react-router-dom";
import Loginpage from './Pages/Loginpage';
import Registerpage from './Pages/Registerpage';
import { UserContextProvider } from './userContext';
import CreatePost from './Pages/CreatePost';
import Postpage from './Pages/Postpage';
import EditPost from './Pages/EditPost';


function App() {
  return (
    <UserContextProvider>
    <Routes>

<Route path="/" element={<Layout />}>
<Route index element={<Indexpage />} />

<Route path="/login" element={
  <Loginpage />
} />

<Route path="/register" element={
  <Registerpage />
} />

<Route path="/create" element={
  <CreatePost />
} />

<Route path='/post/:id' element={
  <Postpage />
}/>

<Route path='/edit/:id' element={
  <EditPost />
} />

</Route>




</Routes>
    </UserContextProvider>
    

  );
}

export default App;
