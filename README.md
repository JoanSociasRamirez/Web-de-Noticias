# Web-de-Noticias
Pàgina web de noticies sobre surf carregades des de json.
Creada per a l'assignatura de Llenguatge de Marques DAM1 per Joan Socias.

## Rawgit
https://rawgit.com/ToniMeco/Web-de-Noticias/master/index.html

## Objectiu final:
Realitzar una aplicació web de notícies que, en fer scroll fins abaix, recarregui més notícies amb html, jQuery i Bootstrap.


## Especificacions del client realitzades:

La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure.

Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure.
* En el meu cas la publicitat en els dispositius mòvils estarà fixa adalt i desapareixerà en fer scroll.

Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime).

Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu.

## Tasques realitzades:

Presenta news.html amb 3 notícies (ja escrites al html, no carregar amb js) i emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js.
* En el meu cas hi ha 4 noticies precarregades i 3 json amb 2 noticies cada un.

Codifica news.js en jQuery per fer: "botó carregar més notícies" i "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json)

Inclou rss.xml (especificat al tema 6)

Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html (seguir no té sentit, aquesta tasca s'automatitza amb codi de servidor).

La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de youtube responsive.

Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina.

A més s'han afegit un <i>footer</i> amb enllaços d'interès i un <i>menu navbar</i> que en fer scroll queda fixe adalt.
Afegida una branch minify per la seva respectiva versió minify.

## Maquetació
Horizontal
![alt Horitzonal](https://rawgit.com/ToniMeco/Web-de-Noticias/master/img/disseny/maquetacioD.png)
Mòvil
![alt Mòvil](https://rawgit.com/ToniMeco/Web-de-Noticias/master/img/disseny/maquetacioM.png)
