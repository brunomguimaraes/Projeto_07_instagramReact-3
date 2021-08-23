import SetTextToJSX from "../serverInfo/setTextToJSX";

export default function PostTitle(props) {
    return (
        <li>
            <p>
                <a href={props.profile.reference}><strong>{props.profile.name}</strong></a> < SetTextToJSX text= {props.media.text}/>
            </p>
        </li>
    );
}