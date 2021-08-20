import MobileTopBar from "./MobileTopBar.js";
import RightSideButtons from "./RightSideButtons.js";

export default function TopBar() {
    return (
        <header>
            <MobileTopBar />
            <input type="text"placeholder="Pesquisar" />
            <RightSideButtons />
        </header>
    );
}