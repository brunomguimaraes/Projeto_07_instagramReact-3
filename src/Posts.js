import PostHeader from "./postStructure/PostHeader.js";
import PostMedia from "./postStructure/PostMedia.js";
import InteractiveIcons from "./postStructure/InteractiveIcons.js";
import PostLikes from "./postStructure/PostLikes.js";
import PostTitle from "./postStructure/PostTitle.js";
import CommentsSection from "./postStructure/CommentsSection.js";
import SendingTime from "./postStructure/SendingTime.js";
import SendNewComment from "./postStructure/SendNewComment.js";
import serverPosts from "./serverInfo/ServerPosts.js";

function postStructure(props) {
    return (
        <div>
            <PostHeader profile= {props.profile} />
            <PostMedia media= {props.media}/>
            <ul class="post-footer main-section">
                <InteractiveIcons />
                <PostLikes likes = {props.likes}/>
                <PostTitle profile= {props.profile} media= {props.media} />
            </ul>
            <CommentsSection comments = {props.comments}/>
            <SendingTime timeSinceSent = {props.timeSinceSent}/>
            <SendNewComment />
        </div>
    )
}


const posts = serverPosts.map(post => postStructure(post))

export default posts