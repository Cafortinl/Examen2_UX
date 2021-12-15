import './App.css';
import User from './components/user/user.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Post from './components/post/post.jsx';
import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

function App() {
  return (
    <div className="mainDiv">
      <Navbar />
      <User />
      {
        postsData.map((post) => {
          console.log(post.name);
          <h1>{post.name}</h1>
        })
      }
    </div>
  );
}

export default App;
