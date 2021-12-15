import React, { useState } from 'react';
import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import Post from './post.jsx';

function PostController({username}) {
    const [postName, setPostName] = useState('');
    const [postContent, setPostContent] = useState('');
    const firestore = useFirestore();
    const posts = collection(firestore, 'posts');
    const { status, data: postsData } = useFirestoreCollectionData(posts);

    if (status === 'loading') {
      return 'Loading posts...';
    }

    function addPost() {
        
    }

    //NO_ID_FIELD={post.NO_ID_FIELD} content={post.content} createdBy={post.createdBy} likedBy={post.likedBy} name={post.name}

    return (
        <div>
            <div className='createPostDiv'>
                <h3>Create new post</h3>
                <h4>Name</h4>
                <input
                    value={postName}
                    onChange={(e) => setPostName(e.target.value)}
                />
                <h4>Content</h4>
                <input
                    value={postContent}
                    className="contentInput"
                    onChange={(e) => setPostContent(e.target.value)}
                />
                <button onClick={addPost()}>Publish</button>
            </div>
            <br/>
            <div>
                {
                    postsData.map((post) => (
                        <Post {...post}/>
                    ))
                }
            </div>
        </div>
    );
}
export default PostController;