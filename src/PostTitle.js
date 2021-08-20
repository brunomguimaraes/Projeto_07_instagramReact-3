export default function PostTile() {
    ProfileAnchorReference = "#";
    ProfileName = "pisa";
    TitleText = "Minha maravilha da Idade Média!";
    HashtagRerefence = "#";
    HashtagName = "#NewProfilePic";

    return (
        <li>
            <p>
                <a href={ProfileAnchorReference}><strong>{ProfileName}</strong></a> {TitleText} <a href={HashtagRerefence} class = "blue">{HashtagName}</a>
            </p>
        </li>
    );
}