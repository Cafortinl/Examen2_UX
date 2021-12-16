import React, {useState} from 'react';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useFirestore } from 'reactfire';

function Post({ NO_ID_FIELD, content, createdBy, likedBy, name, currentUser}) {
    const id = NO_ID_FIELD;
    const ref = doc(useFirestore(), 'posts', id);

    function deletePost() {
        deleteDoc(ref);
    }

    function likePost() {
        if (likedBy.includes(currentUser)) {
            var newArr = likedBy.filter((value) => {
                return value !== currentUser;
            })
            updateDoc(ref, {content, createdBy, likedBy: newArr, name});
        } else {
            updateDoc(ref, {content, createdBy, likedBy: [...likedBy, currentUser], name});
        }
    }

    if (createdBy === currentUser) {
        return (
            <div className="postDiv">
                <h2>{createdBy}</h2>
                <h3>{name}</h3>
                <p>{content}</p>
                <h5>{likedBy.length}</h5>
                <button onClick={likePost}>Like</button>
                <button onClick={deletePost}>Delete</button>
            </div>
        );
    }

    return (
        <div className="postDiv">
            <h2>{createdBy}</h2>
            <h3>{name}</h3>
            <p>{content}</p>
            <h5>{likedBy.length}</h5>
            <button onClick={likePost}>Like</button>
        </div>
    );
    
}
export default Post;