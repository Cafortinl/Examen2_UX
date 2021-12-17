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
            <div className="container py-3 h-100">
            <div className="card">
            <h5 className="card-header">Post by {createdBy}</h5>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                {content}
                </p>
                <a href="#" className="btn btn-primary" onClick={likePost}>{likedBy.length} 👍</a>
                <a href="#" className="btn btn-danger" onClick={deletePost}>Delete post 	🗑️</a>
            </div>
            </div>
            </div>
        );
    }

    return (
        <div className="container py-3 h-100">
        <div className="card">
        <h5 className="card-header">Post by {createdBy}</h5>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
            {content}
            </p>
            <a href="#" className="btn btn-primary" onClick={likePost}>{likedBy.length} 👍</a>
        </div>
        </div>
        </div>
    );
    
}
export default Post;