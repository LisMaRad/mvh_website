import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch('https://mvhellmonsoedt.000webhostapp.com/wp-json/wp/v2/posts');
      if(!response.ok) {
        // oups! something went wrong
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
