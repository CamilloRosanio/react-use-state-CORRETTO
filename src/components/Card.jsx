export default function Card({
    highlight,
    title,
    description
}) {
    return (
        // Se la card ha il valore HIGHLIGHT su TRUE non aggiungo altre classi, altrimenti la nascondo con la classe apposita HIDDEN (anche se comunque esiste lo stesso)
        <div className={"labelCard" + (highlight ? "" : " hidden")}>
            <h3>{title || ""}</h3>
            <p>{description || ""}</p>
        </div>
    );
}