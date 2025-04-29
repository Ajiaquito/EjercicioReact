import { useState } from "react"
import App from "./Post"
function PostList(){
    
    const handleDelete = (id) =>{
        console.log("Deleted...", id)
        setPosts(posts.filter(post=>post.id !==id))
    }

    const [posts, setPosts] = useState([
        {"id": 1, "edad": 5, "nombre": "Juan"},
        {"id": 2, "edad": 7, "nombre": "María"},
        {"id": 3, "edad": 8, "nombre": "Ana"},
        {"id": 4, "edad": 9, "nombre": "Carlos"}
    ]);
    

    return(
        posts.map((post, index)=><App key={index} post={post} onDelete={handleDelete}/>)
    )
}
export default PostList