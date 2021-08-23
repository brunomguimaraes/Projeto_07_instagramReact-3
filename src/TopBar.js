function MobileTopBar() {
    return (
        <div class="desktop-logo mobile-top-bar">
            <ion-icon class="logo-instagram" name="logo-instagram" />
            <a href="#">
                <img src="./Media/Images/logo.png" />
            </a>
            <a href="#">
                <ion-icon class= "icon-mobile" name="paper-plane-outline" />
            </a>
        </div>
    );
}

function RightSideButtons() {
    const buttonsProperties = [
        {name: "paper-plane-outline", reference: "#"},
        {name: "compass-outline", reference: "#"},
        {name: "heart-outline", reference: "#"},
        {name: "person-outline", reference: "#"}
    ];
    const buttons = buttonsProperties.map(({name, reference}) => 
    <a href={reference}>
        <ion-icon name={name} />
    </a>
    );
    return (
        <div class="right-side-buttons">
            {buttons}
        </div>
    );
}

export default function TopBar() {
    return (
        <header>
            <MobileTopBar />
            <input type="text"placeholder="Pesquisar" />

            <RightSideButtons />
        </header>
    );
}