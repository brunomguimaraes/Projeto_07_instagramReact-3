export default function Story() {
    const Href = "#";
    ProfileImageScr = "Images/Perfis/Berlin.jpg";
    ProfileName = "berlim"

    return (
        <a href={Href}>
            <div>
                <img src="Images/stories_1.jpg" />
                <img class = "perfil-stories" src={ProfileImageScr} />
            </div>
            <p>{ProfileName}</p>
        </a>
    );
}