export default function Suggestion() {
    ProfileAnchorReference = "#";
    ProfileImageSrc = "Images/Perfis/Buenos Aires.jpg";
    ProfileName = "buenos.aires";
    ProfileComment = "Segue você"
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