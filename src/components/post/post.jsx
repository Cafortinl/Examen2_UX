import React, {useState} from 'react';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useFirestore } from 'reactfire';

function Post({ NO_ID_FIELD, content, createdBy, likedBy, name}) {
    const id = NO_ID_FIELD;
    const ref = doc(useFirestore(), 'posts', id);

    console.log('post: ' + name);

    function deletePost() {
        deleteDoc(ref);
    }

    function likePost(user) {
        updateDoc(ref, {content, createdBy, likedBy: likedBy.push(user), name});
    }

    return (
        <div>
            <h2>{createdBy}</h2>
            <h3>{name}</h3>
            <p>{content}</p>
            <h5>{likedBy.length}</h5>
        </div>
    );
}
export default Post;