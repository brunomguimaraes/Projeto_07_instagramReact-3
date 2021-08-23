export default function PostHeader(props) {
    return (
        <div class="post-header">
            <div>
                <a href={props.profile.reference}><img src={`./Media/Images/Perfis/${props.profile.image}`} /></a>
                <a href={props.profile.reference}>
                    <strong>{props.profile.name}</strong>
                </a>
            </div>
            <button>
                <ion-icon name="ellipsis-horizontal" />
            </button>
        </div>
    );
}