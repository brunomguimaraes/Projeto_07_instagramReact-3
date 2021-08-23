import stories from "./Stories.js";
import posts from "./Posts.js";
import Sidebar from "./Sidebar.js";

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
            <Sidebar />
        </div>
    );
}