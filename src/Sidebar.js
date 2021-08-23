import serverUserInfo from "./serverInfo/ServerUserInfo.js";

function UserProfile() {
    return (
        <div class="user-profile">
            <a href={serverUserInfo.reference}>
                <img src={`./Media/Images/Perfis/${serverUserInfo.image}`} alt = {serverUserInfo.alt} />
            </a>
            <div>
                <a href={serverUserInfo.reference}>
                    <strong class="title black"> {serverUserInfo.login}</strong>
                </a>
                <p class= "dark-gray">{serverUserInfo.name}</p>
            </div>
        </div>
    );
}

function suggestion(element) {
    return (
        <li>
            <div>
                <a href={element.reference}>
                    <img src={`./Media/Images/Perfis/${element.image}`} alt = {serverUserInfo.alt} />
                </a>
                <div>
                    <a href={element.reference} class="title black">{element.name}</a> 
                    <p class="small-text dark-gray"> {element.comment} </p>
                </div>
            </div>
            <button class="blue">Seguir</button>
        </li>
    );
}

function InstagramSuggestions() {
    return (
        <ul class="suggestions">
            <li>
                <p class="dark-gray">Sugestões para você </p>
                <a class="black" href="#">Ver tudo</a>
            </li>
            {serverUserInfo.suggestions.map(element => suggestion(element))}
        </ul>
    );
}

function Copyrights() {
    return (
        <div class="copyrights light-gray">
            <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
            <p>
                © 2021 INSTAGRAM DO FACEBOOK
            </p>
        </div>
    );
}

export default function Sidebar() {
    return(
        <section class="sidebar">
            <UserProfile />
            <InstagramSuggestions />
            <Copyrights />
        </section>
    );
}