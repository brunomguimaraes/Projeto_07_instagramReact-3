export default function UserProfile() {
    ProfileAnchorReference = "#";
    ProfileImageSrc = "Images/Perfis/Turista - Perfil.jpg";
    ProfileTitle = "eu.so.quero.viajar";
    ProfileName = "Zé Turista";
    return (
        <div class="user-profile">
            <a href={ProfileAnchorReference}>
                <img src={ProfileImageSrc} />
            </a>
            <div>
                <a href={ProfileAnchorReference}>
                    <strong class="title black"> {ProfileTitle}</strong>
                </a>
                <p class= "dark-gray">{ProfileName}</p>
            </div>
        </div>
    );
}