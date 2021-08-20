export default function PostHeader() {
    ProfileImageSrc = "Images/Perfis/Pisa.jpg";
    ProfileAnchorRefence = "#";
    ProfileName = "pisa";
    return (
        <div class="post-header">
            <div>
                <a href={ProfileAnchorRefence}><img src={ProfileImageSrc} /></a>
                <a href={ProfileAnchorRefence}>
                    <strong>{ProfileName}</strong>
                </a>
            </div>
            <button>
                <ion-icon name="ellipsis-horizontal" />
            </button>
        </div>
    );
}