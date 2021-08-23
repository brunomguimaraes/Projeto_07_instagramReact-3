export default function InteractiveIcons() {
    const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    const leftButtons = icons.map(name => 
        <button>
            <ion-icon name={name} />
        </button>
    );
    return (
        <li class="interactive-icons">
            <div>
                {leftButtons}
            </div>
            <button>
                <ion-icon name="bookmark-outline" />
            </button>
        </li>
    );
}