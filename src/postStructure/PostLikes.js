export default function PostLikes(props) {
    return (
        <li>
            <div>
                <a href={props.likes[0].reference}>
                    <img src= {`./Media/Images/Perfis/${props.likes[0].image}`} alt = {props.likes[0].alt}/>
                </a>
                <p> 
                    Curtido por <a href={props.likes[0].reference}><strong> {props.likes[0].name} </strong> </a> 
                    e <a href="#"><strong> outras {props.likes.length - 1} pessoas </strong></a> 
                </p> 
            </div>
        </li>
    );
}