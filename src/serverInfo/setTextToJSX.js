export default function SetTextToJSX(props) {
    const characters = Array.from(props.text);
    const brokenText = [];
    let nextChar;
    let activeText = ""
    let hashtagMentionIndicator = false;
    characters.forEach((char,index) => {
        if (["#","@"].includes(char)) {
            hashtagMentionIndicator = true;
        } 
        activeText += char
        if (index < characters.length - 1) {
            nextChar = characters[index+1]
        } else {
            nextChar = false
        }
        if (!nextChar || ["#","@"].includes(nextChar) || (nextChar === " " && hashtagMentionIndicator === true)) {
            brokenText.push(activeText);
            hashtagMentionIndicator = false;
            activeText = "";
        }
    });
    const textInJSX = brokenText.map(fragment => {
        if (["#","@"].includes(fragment[0])) {
            return <a href="#" class = "blue"> {fragment} </a>
        } else {
            return <span>{fragment}</span>
        }
    });
    return textInJSX;
}