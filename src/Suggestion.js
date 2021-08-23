export default function Suggestion() {
    const ProfileAnchorReference = "#";
    const ProfileImageSrc = "./Media/Images/Perfis/Buenos Aires.jpg";
    const ProfileName = "buenos.aires";
    const ProfileComment = "Segue você"
    return (
        <li>
            <div>
                <a href={ProfileAnchorReference}><img src={ProfileImageSrc} /></a>
                <div>
                    <a href={ProfileAnchorReference} class="title black">{ProfileName}</a> 
                    <p class="small-text dark-gray"> {ProfileComment} </p>
                </div>
            </div>
            <button class="blue">Seguir</button>
        </li>
    );
}