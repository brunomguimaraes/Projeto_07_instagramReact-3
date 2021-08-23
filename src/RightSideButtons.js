export default function RightSideButtons() {
    const buttonsProperties = [
        {name: "paper-plane-outline", reference: "#"},
        {name: "compass-outline", reference: "#"},
        {name: "heart-outline", reference: "#"},
        {name: "person-outline", reference: "#"}
    ]
    const buttons = buttonsProperties.map(({name, reference}) => 
    <a href={reference}>
        <ion-icon name={name} />
    </a>
    )
    return (
        <div class="right-side-buttons">
            {buttons}
        </div>
    );
}