import serverStories from "./serverInfo/ServerStories.js"

const stories = serverStories.map(({name,image,reference}) => 
<a href={reference}>
    <div>
        <img src="./Media/Images/stories_1.jpg" />
        <img class = "perfil-stories" src={`./Media/Images/Perfis/${image}`} />
    </div>
    <p>{name}</p>
</a>
)

export default stories