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
    </div>
  );
}

export default App;
