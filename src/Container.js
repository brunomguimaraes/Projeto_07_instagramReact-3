import stories from "./Stories.js";
import posts from "./Posts.js";
import UserProfile from "./UserProfile.js";
import InstagramSuggestions from "./InstagramSuggestions.js";
import Copyrights from "./Copyrights.js";

export default function Container() {
    return (
        <div class="container">
            <div>
                <div class="stories">
                    {stories}
                    <button>
                        <ion-icon name="chevron-forward-circle" />
                    </button>
                </div>        
                <main>
                    {posts}
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