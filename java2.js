const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const zivotinja = urlParams.get("u");

if (zivotinja == "pas") 
  {
    document.getElementById("Naslov").innerHTML = "Pas";
    document.getElementById("Pasus").innerHTML = "Pas je četveronožna domaća životinja, član porodice Canidae, koja se često uzgaja kao kućni ljubimac ili koristi za različite svrhe kao što su čuvanje, lovački poslovi ili pomoć u invalidskim kolicima. Pas je poznat po svojoj odanosti, inteligenciji i raznolikim rasama koje se razlikuju po veličini, izgledu i temperamentu.";
  } 
  else if (zivotinja == "macka") 
  {
    document.getElementById("Naslov").innerHTML = "Macka";
    document.getElementById("Pasus").innerHTML = "Mačka je mala, četveronožna domaća životinja, član porodice Felidae, poznata po svojoj neovisnoj naravi, elegantnom izgledu i sposobnosti lova. Mačke su često uzgajane kao kućni ljubimci zbog svoje sposobnosti da pružaju društvo i užitak, a isto tako su poznate po tome što mogu biti vrlo neovisne.";
  } 
  else if (zivotinja == "magarac") 
  {
    document.getElementById("Naslov").innerHTML = "Magarac";
    document.getElementById("Pasus").innerHTML = "Magarac je četvoronožna domaća životinja srodna konju, član porodice Equidae. Poznat je po svojoj izdržljivosti, tvrdoglavosti i sposobnosti nošenja tereta na teško pristupačnim terenima. Magarci se često koriste kao radne životinje, posebno za vuču tereta u ruralnim područjima. Takođe se koriste kao kućni ljubimci i u rekreacijske svrhe, poput jahanja ili vožnje u zapregama.";
  } 
  else if (zivotinja == "konj") 
  {
    document.getElementById("Naslov").innerHTML = "Konj";
    document.getElementById("Pasus").innerHTML = "Konj je velika kopitasta životinja, član porodice Equidae, poznat po svojoj snazi, gracioznosti i korisnosti u različitim ljudskim aktivnostima poput jahanja, vuče tereta i sportskih natjecanja. Konji su često uzgajani kao radne životinje, sportski partneri ili kućni ljubimci, te su poznati po svojoj inteligenciji, osjetljivosti i sposobnosti razvijanja bliskih veza s ljudima.";
  } 
  else if (zivotinja == "svinja")
  {
    document.getElementById("Naslov").innerHTML = "Svinja";
    document.getElementById("Pasus").innerHTML = "Svinja je domaća životinja sa četiri noge, članica porodice Suidae, koja se uzgaja zbog mesa (svinjetina), kože i drugih proizvoda. Uglavnom su srednje veličine, imaju snažno telo, kratke noge i karakterističan oblik njuške. Poznate su po inteligenciji, društvenom ponašanju i sposobnosti prilagođavanja različitim uslovima života.";
  }