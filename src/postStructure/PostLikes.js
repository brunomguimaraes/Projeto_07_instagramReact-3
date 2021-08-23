export default function PostLikes(props) {
    const ImageAnchorReference = "#";
    const ImageSrc = "./Media/Images/Perfis/Roma.jpg"
    const ProfileAnchorReference = "#";
    const ProfileName = "roma";
    const OtherPeopleAnchorReference = "#";
    const OtherPeopleNumber = 5;

    return (
        <li>
            <div>
                <a href={props.likes[0].reference}>
                    <img src= {`./Media/Images/Perfis/${props.likes[0].image}`}/>
                </a>
                <p> 
                    Curtido por <a href={props.likes[0].reference}><strong> {props.likes[0].name} </strong> </a> 
                    e <a href="#"><strong> outras {props.likes.length - 1} pessoas </strong></a> 
                </p> 
            </div>
        </li>
    );
}