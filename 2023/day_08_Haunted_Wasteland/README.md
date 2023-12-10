## Day 01 -  

Your puzzle answer was  `00000`.

###  Part Two 

Your puzzle answer was  `00000`.


--- Giorno 8: Terreno infestato ---
State ancora cavalcando un cammello attraverso l'Isola del Deserto quando notate una tempesta di sabbia che si avvicina rapidamente. Quando vi voltate per avvertire l'elfo, lei scompare davanti ai vostri occhi! A dire il vero, aveva appena finito di avvertirvi dei fantasmi pochi minuti prima.

Una delle borse del cammello è etichettata come "mappe": di sicuro è piena di documenti (il vostro input per il puzzle) su come navigare nel deserto. Almeno, siete abbastanza sicuri che si tratti di questo: uno dei documenti contiene un elenco di istruzioni destra/sinistra, mentre il resto dei documenti sembra descrivere una sorta di rete di nodi etichettati.

Sembra che si debbano usare le istruzioni destra/sinistra per navigare nella rete. Forse se si fa seguire al cammello le stesse istruzioni, si può sfuggire alla terra infestata!

Dopo aver esaminato le mappe per un po', si notano due nodi: AAA e ZZZ. Si ha l'impressione che AAA sia il punto in cui ci si trova ora e che si debbano seguire le istruzioni destra/sinistra fino a raggiungere ZZZ.

Questo formato definisce ogni nodo della rete individualmente. Ad esempio:

RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)
Partendo da AAA, è necessario cercare l'elemento successivo in base all'istruzione sinistra/destra successiva nell'input. In questo esempio, si parte da AAA e si va a destra (R) scegliendo l'elemento destro di AAA, CCC. Quindi, L significa scegliere l'elemento sinistro di CCC, ZZZ. Seguendo le istruzioni sinistra/destra, si raggiunge ZZZ in 2 passi.

Naturalmente, è possibile che non si trovi subito ZZZ. Se si esauriscono le istruzioni destra/sinistra, ripetere l'intera sequenza di istruzioni se necessario: RL in realtà significa RLRLRLRLRLRLRLRL... e così via. Per esempio, ecco una situazione che richiede 6 passi per raggiungere ZZZ:

LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)
Partendo da AAA, seguite le istruzioni sinistra/destra. Quanti passi sono necessari per raggiungere ZZZ?




-- SOLUTION --

https://toolset.mrw.it/testo/rimuovi-linee-duplicate.html
analizzando solo i primi tre caratteri di ogni linea
mi dice che non ci sono duplicati
non sono in ordine alfabetico

ordiando i soli node in ordine decrescente (primi tre caratteri) si può stabilire
se si termina con ZZZ oppure no


