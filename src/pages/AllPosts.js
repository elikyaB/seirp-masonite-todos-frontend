import React from "react"
import Post from "../components/post"

const AllPosts = (props) => {
    // for each post in the array, render a post component
    return props.posts.map((post) => {
        return <Post key={post.id} post={post}/>
    })
}

export default AllPosts;