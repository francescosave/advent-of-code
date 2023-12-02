## Day 01 -  

Your puzzle answer was  `2416`.

###  Part Two 

Your puzzle answer was  `63307`.


--- Day 2: Cube Conundrum ---
You're launched high into the atmosphere! The apex of your trajectory just barely reaches the surface of a large island floating in the sky. You gently land in a fluffy pile of leaves. It's quite cold, but you don't see much snow. An Elf runs over to greet you.

The Elf explains that you've arrived at Snow Island and apologizes for the lack of snow. He'll be happy to explain the situation, but it's a bit of a walk, so you have some time. They don't get many visitors up here; would you like to play a game in the meantime?

As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.

To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.

You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

For example, the record of a few games might look like this:

Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.

The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get 8.

Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?


--- Giorno 2: enigma del cubo ---
Siete stati lanciati in alto nell'atmosfera! L'apice della traiettoria raggiunge appena la superficie di una grande isola che galleggia nel cielo. Si atterra dolcemente in un soffice mucchio di foglie. Fa abbastanza freddo, ma non si vede molta neve. Un elfo corre a salutarvi.

L'elfo spiega che siete arrivati sull'Isola della Neve e si scusa per la mancanza di neve. Sarà lieto di spiegarvi la situazione, ma si tratta di una passeggiata, quindi avete un po' di tempo. Non ricevono molti visitatori quassù; vi piacerebbe fare un gioco nel frattempo?

Mentre camminate, l'elfo vi mostra un sacchettino e alcuni cubi di colore rosso, verde o blu. Ogni volta che giocherete a questo gioco, l'elfo nasconderà nel sacchetto un numero segreto di cubetti di ogni colore e il vostro obiettivo sarà quello di scoprire le informazioni sul numero di cubetti.

Per ottenere le informazioni, una volta che il sacchetto è stato caricato con i cubi, l'Elfo si infilerà nel sacchetto, prenderà una manciata di cubi a caso, ve li mostrerà e poi li rimetterà nel sacchetto. Lo farà un paio di volte a partita.

Si giocano diverse partite e si registrano le informazioni di ogni partita (l'input del puzzle). Ogni partita è elencata con il suo numero identificativo (come l'11 della partita 11: ...) seguito da un elenco di sottoinsiemi di cubi che sono stati rivelati dal sacchetto (come 3 rossi, 5 verdi, 4 blu).

Per esempio, il record di alcune partite potrebbe essere così:

Partita 1: 3 blu, 4 rosso; 1 rosso, 2 verde, 6 blu; 2 verde
Partita 2: 1 blu, 2 verdi; 3 verdi, 4 blu, 1 rosso; 1 verde, 1 blu
Partita 3: 8 verde, 6 blu, 20 rosso; 5 blu, 4 rosso, 13 verde; 5 verde, 1 rosso
Partita 4: 1 verde, 3 rosso, 6 blu; 3 verde, 6 rosso; 3 verde, 15 blu, 14 rosso
Partita 5: 6 rosso, 1 blu, 3 verde; 2 blu, 1 rosso, 2 verde
Nel gioco 1, tre serie di cubi vengono rivelate dal sacchetto (e poi rimesse a posto). La prima serie è composta da 3 cubi blu e 4 cubi rossi; la seconda serie è composta da 1 cubo rosso, 2 cubi verdi e 6 cubi blu; la terza serie è composta da soli 2 cubi verdi.

L'Elfo vorrebbe sapere quali giochi sarebbero stati possibili se il sacchetto avesse contenuto solo 12 cubi rossi, 13 cubi verdi e 14 cubi blu.

Nell'esempio precedente, i giochi 1, 2 e 5 sarebbero stati possibili se il sacchetto fosse stato caricato con quella configurazione. Tuttavia, la partita 3 sarebbe stata impossibile perché a un certo punto l'Elfo ha mostrato 20 cubi rossi in una volta; allo stesso modo, anche la partita 4 sarebbe stata impossibile perché l'Elfo ha mostrato 15 cubi blu in una volta. Se si sommano gli ID delle partite che sarebbero state possibili, si ottiene 8.

Determinare quali giochi sarebbero stati possibili se il sacchetto fosse stato caricato solo con 12 cubi rossi, 13 cubi verdi e 14 cubi blu. Qual è la somma degli ID di questi giochi?