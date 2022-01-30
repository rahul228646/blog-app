import './App.css';
import {useState, useEffect} from 'react';
import Topbar from './Components/Topbar'
import SinglePost from "./pages/SinglePost";
import Home from './pages/Home'
import BlogTopic from "./pages/BlogTopic";
import TextEditor from "./Components/TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Login from "./pages/Login"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:4000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <Router>
    <div className="App">
      <Topbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/singlepost" element={<SinglePost/>}/>
      <Route exact path="/blog" element={ <BlogTopic/>}/>
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;


