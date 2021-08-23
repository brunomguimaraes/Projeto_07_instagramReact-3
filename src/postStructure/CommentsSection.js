import SetTextToJSX from "../serverInfo/setTextToJSX";


function SeeAllComments(props) {
    return (
        <li class="dark-gray">
            <button>Ver todos os {props.numberOfComments} comentários</button> 
        </li>
    );
}

function Comment(props) {
    return (
        <li>
            <p><a href={props.commentInfo.reference}><strong>{props.commentInfo.name}</strong></a> < SetTextToJSX text= {props.commentInfo.text}/></p>
            <button><ion-icon name="heart-outline"></ion-icon> </button>                               
        </li>
    );
}

export default function CommentsSection(props) {
    return (
        <ul class="post-footer comments-section">
            <SeeAllComments numberOfComments = {props.comments.length} />
            <Comment commentInfo = {props.comments[0]} />
            <Comment commentInfo = {props.comments[1]} />
        </ul>
    );
}
