import Story from "./Story.js";
import Post from "./Post.js";
import UserProfile from "./UserProfile.js";
import InstagramSuggestions from "./InstagramSuggestions.js";
import Copyrights from "./Copyrights.js";

export default function Container() {
    return (
        <div class="container">
            <div>
                <div class="stories">
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <button>
                        <ion-icon name="chevron-forward-circle" />
                    </button>
                </div>        
                <main>
                    <Post />
                    <Post />
                    <Post />
                </main>
            </div>
            <section class="sidebar">
                <UserProfile />
                <InstagramSuggestions />
                <Copyrights />
            </section>
        </div>
    );
}