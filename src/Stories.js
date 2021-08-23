import serverStories from "./serverInfo/ServerStories.js";

const stories = serverStories.map(({name, image, alt, reference}) => 
<a href={reference}>
    <div>
        <img src="./Media/Images/stories_1.jpg" alt = "Background for Active Stories"/>
        <img class = "perfil-stories" src={`./Media/Images/Perfis/${image}`} alt={alt}/>
    </div>
    <p>{name}</p>
</a>
);

export default stories;