export default function Label({
    index,
    title,
    labelHandler,
    highlight,
}) {
    return (
        <button
            // Al click la Label triggera la funzione HANDLER descritta in MAIN
            onClick={() => labelHandler(index)}
            className={
                // Se il valore dall'Array HIGHLIGHT corrispondente è TRUE allora lo stampo con classe HIGHLIGHT
                "label " + (highlight ? "highlight" : "")
            }
        >
            {title}
        </button>
    );
}