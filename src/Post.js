import PostHeader from "./PostHeader.js";
import PostMedia from "./PostMedia.js";
import InteractiveIcons from "./InteractiveIcons.js";
import PostLikes from "./PostLikes.js";
import PostTitle from "./PostTitle.js";
import SeeAllComments from "./SeeAllComments.js";
import Comment from "./Comment.js";
import SendingTime from "./SendingTime.js";
import SendNewComment from "./SendNewComment.js";

export default function Post() {
    return (
        <div>
            <PostHeader />
            <PostMedia />
            <ul class="post-footer">
                <InteractiveIcons />
                <PostLikes />
                <PostTitle />
                <SeeAllComments />
                <Comment />
                <Comment />
                <SendingTime />
            </ul>
            <SendNewComment />
        </div>
    );
}