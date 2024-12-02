import { useState } from "react";
import languages from '../data/languages';

import Label from "./Label";
import Card from "./Card";



function Main() {

    /* Tramite DESTRUCTURING e usando lo USESTATE, dchiaro un nuovo Array composto di valori HIGHLIGHT e di una FUNCTION che li imposta.
    Uso il MAP sull'Array in questione per impostare tanti valori su FALSE quanti sono gli elementi dell'Array originale.*/
    const [highlight, setHighlight] = useState(languages.map(() => false));
    console.log(useState(languages.map(() => false)));

    // Al click del bottone imposto su FALSE tutti i valori eccetto l'elemento con INDEX su cui ho cliccato
    const labelHandler = (index) => {

        // Creo un nuovo Array interno alla Function e imposto tutti i valori iniziali come FALSE rimappando il mio Array creato in precedenza
        const updatedHighlight = highlight.map(() => false);

        // Al click su una Label (che avrà un INDEX) imposto il valore TRUE sull'elemento che ha lo stesso INDEX nel mio Array clonato
        updatedHighlight[index] = !highlight[index];

        // Aggiorno tramite USE-STATE il primo Array che ho creato con i nuovi valori dove sarà presente quello aggiornato grazie al click (TRUE)
        setHighlight(updatedHighlight);
    };

    return (
        <>
            <main>
                <div className='container'>

                    {/* TAG LABELS */}
                    <div className='labelsContainer'>

                        {/* Creo una Label per ciascun elemento del mio Array di riferimento e tramite PROPS passo il valore HIGHLIGHT (chiamato da me così per questo caso)
                        che prendo dal mio Array creato apposta all'inizio.*/}
                        {languages.map((item, index) => (
                            <Label
                                key={item.id}
                                index={index}
                                title={item.title}
                                // Il valore sotto viene preso dal mio array iniziale che si aggiorna ad ogni Click
                                highlight={highlight[index]}
                                // Passo come PROP la funzione che cambia i valori dell'Array degli HIGHLIGHT
                                labelHandler={labelHandler}
                            />
                        ))}
                    </div>

                    {/* CARD */}
                    {/* Se l'Array di HIGHLIGHT include un TRUE stampo la CARD tramite INDEX corrispondente */}
                    {highlight.includes(true) ? (
                        languages.map((item, index) => (
                            <Card
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                // Anche alla CARD passo il valore dell'HIGHLIGHTcorrispondente (booleano)
                                highlight={highlight[index]}
                            />
                        ))) : (
                        <Card
                            // Altrimenti stampo il messaggio di DEFAULT
                            highlight={true} title="Nessun linguaggio selezionato"
                        />
                    )}
                </div>
            </main>
        </>
    )
}

export default Main