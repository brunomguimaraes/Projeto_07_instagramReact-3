export default function SendNewComment() {
    return (
        <div class="new-comment-section">
            <button>
                <ion-icon name="happy-outline" />
            </button>
            <input type="text" placeholder="Adicione um comentário..." />
            <button> Publicar</button>
        </div>
    );
}