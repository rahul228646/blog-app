import './App.css';
import Topbar from './Components/Topbar'
import SinglePost from "./pages/SinglePost";
import Home from './pages/Home'
import BlogTopic from "./pages/BlogTopic";
import TextEditor from "./Components/TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Topbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/singlepost" element={<SinglePost/>}/>
      <Route exact path="/blog" element={ <BlogTopic/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
