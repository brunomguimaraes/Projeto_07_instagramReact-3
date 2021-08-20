export default function PostHeader() {
    ImageAnchorReference = "#";
    ImageSrc = "Images/Perfis/Pisa.jpg";
    ProfileAnchorRefence = "#";
    ProfileName = "pisa";
    return (
        <div class="post-header">
            <div>
                <a href={ImageAnchorReference}><img src={ImageSrc} /></a>
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