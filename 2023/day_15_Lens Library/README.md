## Day 01 -  

Your puzzle answer was  `00000`.

###  Part Two 

Your puzzle answer was  `00000`.


--- Giorno 7: Carte Cammello ---
Il tuo viaggio tutto compreso risulta essere un viaggio di sola andata di cinque minuti in un dirigibile . (Almeno è un dirigibile fantastico !) Ti lascia ai margini di un vasto deserto e ridiscende a Island Island.

"Hai portato i pezzi?"

Ti volti e vedi un Elfo completamente coperto di abiti bianchi, che indossa occhiali e cavalca un grande cammello .

"Hai portato i pezzi?" chiede di nuovo, questa volta più forte. Non sei sicuro di quali parti stia cercando; sei qui per capire perché la sabbia si è fermata.

"I pezzi! Per la sabbia, sì! Vieni con me, te lo mostrerò." Ti invita a salire sul cammello.

Dopo aver attraversato un po' le sabbie dell'Isola Deserta, puoi vedere quelle che sembrano rocce molto grandi che coprono metà dell'orizzonte. L'Elfo spiega che le rocce si trovano lungo tutta la parte dell'Isola Deserta che si trova direttamente sopra l'Isola Isola, rendendo difficile persino arrivarci. Normalmente usano grandi macchine per spostare le rocce e filtrare la sabbia, ma le macchine si sono guastate perché Desert Island ha recentemente smesso di ricevere le parti di cui hanno bisogno per riparare le macchine.

Hai già pensato che sarà tuo compito capire perché le parti si sono fermate quando lei ti chiederà se puoi aiutarla. Accetti automaticamente.

Dato che il viaggio durerà alcuni giorni, si offre di insegnarvi il gioco delle Carte del Cammello . Camel Cards è in qualche modo simile al poker , tranne che è progettato per essere più facile da giocare mentre si cavalca un cammello.

In Camel Cards ottieni un elenco di mani e il tuo obiettivo è ordinarle in base alla forza di ciascuna mano. Una mano è composta da cinque carte etichettate come A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, o 2. La forza relativa di ciascuna carta segue questo ordine, dove Aè la più alta ed 2è la più bassa.

Ogni mano è esattamente di un tipo . Dal più forte al più debole, sono:

Five of a kind , dove tutte e cinque le carte hanno la stessa etichetta:AAAAA
Four of a kind , dove quattro carte hanno la stessa etichetta e una carta ha un'etichetta diversa:AA8AA
Full , dove tre carte hanno la stessa etichetta e le restanti due carte condividono un'etichetta diversa:23332
Tris , dove tre carte hanno la stessa etichetta e le restanti due carte sono ciascuna diversa da qualsiasi altra carta nella mano:TTT98
Doppia coppia , dove due carte condividono un'etichetta, altre due carte condividono una seconda etichetta e la carta rimanente ha una terza etichetta:23432
Una coppia , dove due carte condividono un'etichetta e le altre tre carte hanno un'etichetta diversa dalla coppia e tra loro:A23A4
Carta alta , dove le etichette di tutte le carte sono distinte:23456
Le mani sono ordinate principalmente in base al tipo; ad esempio, ogni full è più forte di qualsiasi tris .

Se due mani hanno lo stesso tipo, entra in vigore una seconda regola di ordinamento. Inizia confrontando la prima carta di ogni mano . Se queste carte sono diverse, la mano con la prima carta più forte è considerata più forte. Se però la prima carta di ogni mano ha la stessa etichetta , allora passa a considerare la seconda carta di ogni mano . Se differiscono, vince la mano con la seconda carta più alta; altrimenti si continua con la terza carta di ogni mano, poi con la quarta, poi con la quinta.

Quindi, 33332e 2AAAAsono entrambe mani di poker , ma 33332è più forte perché la sua prima carta è più forte. Allo stesso modo, 77888e 77788sono entrambi un full , ma 77888è più forte perché la sua terza carta è più forte (ed entrambe le mani hanno la stessa prima e seconda carta).

Per giocare a Camel Cards, ti viene fornito un elenco di mani e la loro offerta corrispondente (il tuo input nel puzzle). Per esempio:

32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483
Questo esempio mostra cinque mani; ogni mano è seguita dal suo importo di offerta . Ogni mano vince un importo pari alla sua offerta moltiplicata per il suo valore , dove la mano più debole ottiene il grado 1, la seconda mano più debole ottiene il grado 2 e così via fino alla mano più forte. Dato che in questo esempio ci sono cinque mani, la mano più forte avrà valore 5 e la sua puntata sarà moltiplicata per 5.

Quindi, il primo passo è mettere le mani in ordine di forza:

32T3Kè l'unica coppia e le altre mani sono tutte di tipo più forte, quindi ottiene il rango 1 .
KK677e KTJJTsono entrambe due coppie . Le loro prime carte hanno entrambe la stessa etichetta, ma la seconda carta KK677è più forte ( Kvs T), quindi KTJJTottiene il rango 2 e KK677il rango 3 .
T55J5e QQQJAsono entrambi tris . QQQJAha una prima carta più forte, quindi ottiene il rango 5 e T55J5poi il rango 4 .
Ora puoi determinare le vincite totali di questo set di mani sommando il risultato della moltiplicazione della puntata di ciascuna mano per il suo valore ( 765* 1 + 220* 2 + 28* 3 + 684* 4 + 483* 5). Quindi le vincite totali in questo esempio sono 6440.

Trova il valore di ogni mano nel tuo set. Qual è la vincita totale?


