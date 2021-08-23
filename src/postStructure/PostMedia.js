export default function PostMedia(props) {
    if (props.media.type === "image") {
        return (
            <div class="post-media">
                <img src= {`./Media/Images/Posts/${props.media.main}`} alt = {props.media.alt}/>
            </div>
        );
    } else {
        return (
            <div class="post-media">
                <video autoPlay loop muted>
                    <source src="./Media/Videos/Moscow Snow.mp4" type="video/mp4" />
                    <source src="./Media/Videos/Moscow Snow.ogg" type="video/ogg" />
                    Seu navegador não suporta vídeos.
                </video>
            </div>
        );
    }
}