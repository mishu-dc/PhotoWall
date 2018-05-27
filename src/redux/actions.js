


//This function is knows as function creator. It just returns a java script object

//Remove Post
export function removePost(index){
    return {
        type:'REMOVE_POST',
        index
    }
}

export function addPost(post){
    return {
        type:'ADD_POST',
        post
    }
}

export function addComment(comment, postId){
    return {
        type:'ADD_COMMENT',
        comment,
        postId
    }
}
