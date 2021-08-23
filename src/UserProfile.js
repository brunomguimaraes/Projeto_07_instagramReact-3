export default function UserProfile() {
    const ProfileAnchorReference = "#";
    const ProfileImageSrc = "./Media/Images/Perfis/Turista - Perfil.jpg";
    const ProfileTitle = "eu.so.quero.viajar";
    const ProfileName = "Zé Turista";
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