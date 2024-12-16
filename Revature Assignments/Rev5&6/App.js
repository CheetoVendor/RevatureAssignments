import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import EventDemoComponent from './EventsDemoComponent';
import StateDemoComponent from './StateDemoComponent';
import PostComponent from './PostComponent';
import ListandKeysComponent from './components/listandkeys/ListandKeysComponent';
import AxiosGetDemo from './components/axiosdemo/AxiosGetDemo';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoList from './todolist/ToDoList';
<<<<<<< HEAD
import AxiosPost from './components/axiospost/AxiosPost';
=======
>>>>>>> 35baf4ca7e2dc516a592856f69a251a0dd1a258f
function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <Routes>
        <Route path='/hello' element={<Hello />} />
        <Route path='/sdc' element={<StateDemoComponent />} />
        <Route path='/posts' element={<AxiosGetDemo />} />
        <Route path='/postview' element={<PostComponent />} />
        <Route path='/todolist' element={<ToDoList />} />
<<<<<<< HEAD
        <Route path='/addpost' element={<AxiosPost />} />
=======
>>>>>>> 35baf4ca7e2dc516a592856f69a251a0dd1a258f
      </Routes>
    </Router>
  );
}

export default App;