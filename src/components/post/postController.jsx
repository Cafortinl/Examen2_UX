import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import Post from './post.jsx';
import './style.css';

function PostController({username}) {
    const [postName, setPostName] = useState('');
    const [postContent, setPostContent] = useState('');
    const firestore = useFirestore();
    const posts = collection(firestore, 'posts');
    const { status, data: postsData } = useFirestoreCollectionData(posts);
    const [showAll, setShowAll] = useState(true);

    if (status === 'loading') {
      return 'Loading posts...';
    }

    async function addPost() {
        addDoc(posts, {createdBy: username, name: postName, content: postContent, likedBy: []});
    }

    function printPosts() {
        if (!showAll) {
            let tempArr = postsData.filter((post) => {
                if (post.likedBy.includes(username))
                    return post;
            })
    
            return (
                tempArr.map((post) => (
                    <Post {...post} currentUser={username}/>
                ))
            );
        }

        return (
            postsData.map((post) => (
                <Post {...post} currentUser={username}/>
            ))
        );
        
    }

    return (
        <div>
            <div className="container py-3 h-100">
            <form>
            <h5>Create a post</h5>
            <br/>
            <div className="form-outline mb-4">
                <input type="text" id="form4Example1" className="form-control" value={postName} onChange={(e) => setPostName(e.target.value)}/>
                <label className="form-label" for="form4Example1">Title</label>
            </div>

            <div className="form-outline mb-4">
                <textarea className="form-control" id="form4Example3" rows="4" value={postContent} onChange={(e) => setPostContent(e.target.value)}></textarea>
                <label className="form-label" for="form4Example3">Post</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Publish</button>
            </form>
            </div>
            <br/>
            <div className="centeredDiv">
            <div className="btn-group">
            <input
                type="radio"
                className="btn-check"
                name="options"
                id="option1"
                autoComplete="off"
                defaultChecked
                onClick={() => setShowAll(true)}
            />
            <label className="btn btn-primary" htmlFor="option1">Show all</label>

            <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" onClick={() => setShowAll(false)}/>
            <label className="btn btn-primary" htmlFor="option2">Show liked</label>

            </div>
            </div>
            <div>
                {
                    printPosts()
                }
            </div>
        </div>
    );
}
export default PostController;