export default function PostMedia(props) {
    if (props.media.type === "image") {
        return (
            <div class="post-media">
                <img src= {`./Media/Images/Posts/${props.media.main}`} />
            </div>
        );
    } else {
        return (
            <div class="post-media">
                <video autoplay loop muted>
                    <source src={`./Media/Videos/Videos/${props.media.main}.mp4`} type="video/mp4" />
                    <source src={`./Media/Videos/Videos/${props.media.main}.ogg`} type="video/ogg" />
                    Seu navegador não suporta vídeos.
                </video>
            </div>
        );
    }
}