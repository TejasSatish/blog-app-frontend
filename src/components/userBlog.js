
import NewBlog from "./newBlog"
import PostSidebar from "./postSidebar";

export default function UserBlog(){
    

    return(
        <div className="row">
            <PostSidebar></PostSidebar>
            <NewBlog></NewBlog>
        </div>
    )
}