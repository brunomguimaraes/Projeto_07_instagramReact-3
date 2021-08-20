export default function PostLikes() {
    ImageAnchorReference = "#";
    ImageSrc = "Images/Perfis/Roma.jpg"
    ProfileAnchorReference = "#";
    ProfileName = "roma";
    OtherPeopleAnchorReference = "#";
    OtherPeopleNumber = 5;
    
    return (
        <li>
        <div>
            <a href={ImageAnchorReference}>
                <img src= {ImageSrc}/>
            </a>
            <p> 
                Curtido por <a href={ProfileAnchorReference}><strong> {ProfileName} </strong></a> 
                e <a href={OtherPeopleAnchorReference}><strong> outras {OtherPeopleNumber} pessoas </strong></a> 
            </p> 
        </div>
    </li>
    );
}