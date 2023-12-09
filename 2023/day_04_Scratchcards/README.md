## Day 01 -  

Your puzzle answer was  `26426`.

###  Part Two 

Your puzzle answer was  `00000`.


--- Giorno 4: Gratta e vinci ---
La gondola ti porta su. Stranamente, però, il terreno non sembra venire con te; non stai scalando una montagna. Mentre il cerchio di Snow Island si allontana sotto di te, un'intera nuova massa continentale appare all'improvviso sopra di te! La gondola ti porta sulla superficie della nuova isola e si lancia verso la stazione.

Quando esci dalla cabinovia, la prima cosa che noti è che l'aria qui è molto più calda di quanto non fosse a Snow Island. È anche abbastanza umido . È qui che si trova la fonte d'acqua?

La cosa successiva che noti è un Elfo seduto sul pavimento dall'altra parte della stazione in quella che sembra essere una pila di carte quadrate colorate.

"Oh, ciao!" L'Elfo corre eccitato verso di te. "Come posso essere utile?" Chiedi informazioni sulle fonti d'acqua.

"Non ne sono sicuro; uso solo la cabinovia. Sembra qualcosa che avremmo, però - questa è Island Island , dopo tutto! Scommetto che il giardiniere lo saprebbe. È su un'altra isola, però - ehm , il tipo piccolo circondato dall'acqua, non quello galleggiante. Dobbiamo davvero trovare uno schema di denominazione migliore. Ti faccio sapere una cosa: se puoi aiutarmi con qualcosa di veloce, ti presterò la mia barca e potrai andare vai dal giardiniere. Ho ricevuto in regalo tutti questi gratta e vinci , ma non riesco a capire cosa ho vinto."

L'Elfo ti conduce alla pila di carte colorate. Lì scopri dozzine di gratta e vinci, tutti con la copertura opaca già grattata via. Prendendone una, sembra che ogni carta abbia due elenchi di numeri separati da una barra verticale ( |): un elenco di numeri vincenti e poi un elenco di numeri che hai . Organizzi le informazioni in una tabella (l'input del tuo puzzle).

Per quanto l'Elfo è riuscito a capire, devi capire quale dei tuoi numeri appare nell'elenco dei numeri vincenti . La prima corrispondenza fa valere un punto alla carta e ogni corrispondenza successiva alla prima raddoppia il valore in punti di quella carta.

Per esempio:

Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
Nell'esempio sopra, la carta 1 ha cinque numeri vincenti ( 41, 48, 83, 86, e 17) e otto numeri che hai ( 83, 86, 6, 31, 17, 9, 48, e 53). Dei numeri che hai, quattro ( 48, 83, 17, e 86) sono numeri vincenti! Ciò significa che la carta 1 vale 8punti (1 per la prima partita, poi raddoppiata tre volte per ciascuna delle tre partite successive alla prima).

La carta 2 ha due numeri vincenti ( 32e 61), quindi vale 2punti.
La carta 3 ha due numeri vincenti ( 1e 21), quindi vale 2punti.
La carta 4 ha un numero vincente ( 84), quindi vale 1un punto.
La carta 5 non ha numeri vincenti, quindi non vale punti.
La carta 6 non ha numeri vincenti, quindi non vale punti.
Quindi, in questo esempio, la pila di gratta e vinci dell'Elfo vale 13punti.

Accomodati nella grande pila di carte colorate. Quanti punti valgono in totale?


--- Day 4: Scratchcards ---
The gondola takes you up. Strangely, though, the ground doesn't seem to be coming with you; you're not climbing a mountain. As the circle of Snow Island recedes below you, an entire new landmass suddenly appears above you! The gondola carries you to the surface of the new island and lurches into the station.

As you exit the gondola, the first thing you notice is that the air here is much warmer than it was on Snow Island. It's also quite humid. Is this where the water source is?

The next thing you notice is an Elf sitting on the floor across the station in what seems to be a pile of colorful square cards.

"Oh! Hello!" The Elf excitedly runs over to you. "How may I be of service?" You ask about water sources.

"I'm not sure; I just operate the gondola lift. That does sound like something we'd have, though - this is Island Island, after all! I bet the gardener would know. He's on a different island, though - er, the small kind surrounded by water, not the floating kind. We really need to come up with a better naming scheme. Tell you what: if you can help me with something quick, I'll let you borrow my boat and you can go visit the gardener. I got all these scratchcards as a gift, but I can't figure out what I've won."

The Elf leads you over to the pile of colorful cards. There, you discover dozens of scratchcards, all with their opaque covering already scratched off. Picking one up, it looks like each card has two lists of numbers separated by a vertical bar (|): a list of winning numbers and then a list of numbers you have. You organize the information into a table (your puzzle input).

As far as the Elf has been able to figure out, you have to figure out which of the numbers you have appear in the list of winning numbers. The first match makes the card worth one point and each match after the first doubles the point value of that card.

For example:

Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
In the above example, card 1 has five winning numbers (41, 48, 83, 86, and 17) and eight numbers you have (83, 86, 6, 31, 17, 9, 48, and 53). Of the numbers you have, four of them (48, 83, 17, and 86) are winning numbers! That means card 1 is worth 8 points (1 for the first match, then doubled three times for each of the three matches after the first).

Card 2 has two winning numbers (32 and 61), so it is worth 2 points.
Card 3 has two winning numbers (1 and 21), so it is worth 2 points.
Card 4 has one winning number (84), so it is worth 1 point.
Card 5 has no winning numbers, so it is worth no points.
Card 6 has no winning numbers, so it is worth no points.
So, in this example, the Elf's pile of scratchcards is worth 13 points.

Take a seat in the large pile of colorful cards. How many points are they worth in total?

