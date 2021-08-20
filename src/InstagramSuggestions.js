import Suggestion from "./Suggestion.js"

export default function InstagramSuggestions() {
    return (
        <ul class="suggestions">
            <li>
                <p class="dark-gray">Sugestões para você </p>
                <a class="black" href="#">Ver tudo</a>
            </li>
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
        </ul>
    );
}