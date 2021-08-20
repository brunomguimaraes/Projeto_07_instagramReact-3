export default function Comment() {
    ProfileAnchorReference = "#";
    ProfileName = "agra";
    CommentText = "Sobre essa lista, algum adm pode adicionar o Taj Mahal no grupo?";

    return (
        <li>
            <p><a href={ProfileAnchorReference}><strong>{ProfileName}</strong></a> {CommentText}</p>
            <button><ion-icon name="heart-outline"></ion-icon> </button>                               
        </li>
    );
}