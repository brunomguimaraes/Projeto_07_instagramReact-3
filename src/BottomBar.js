export default function BottomBar() {
    const icons = [
        "home",
        "search-outline",
        "add-circle-outline",
        "heart-outline",
        "person-outline"
    ];
    return (
        <footer>
            {icons.map(name => <ion-icon name={name} />)}
        </footer>
    );
}