import {Routes,Route, BrowserRouter} from 'react-router-dom'
//pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog'; //show the blog details.
import Error from './pages/Error';
import User from './pages/User';

import './App.css'
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
     
   

     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:title" element={<Blog/>}/>
        <Route path='*' element={<Error/>}></Route>
        <Route path='/user' element={<User/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
