const gameLijst = [
    {
      name: 'Ratchet & Clank 3',
      developper: 'Insomniac Games',
      releaseYear: 2004,
      image: '../assets/ratchet & clank 3.jpg',
      genre: ['platformer', 'third-person shooter'],
      score: ['4.5/5']
    },
    {
        name: 'Factorio',
        developper: 'Wube Software',
        releaseYear: 2016,
        image: '../assets/Factorio.png',
        genre: ['Automation', 'Simulation','Action'],
        score: ['4.9/5']
      },
      {
        name: 'Hearts of Iron 4',
        developper: 'Paradox Development Studio',
        releaseYear: 2016,
        image: '../assets/hoi4.jpg',
        genre: ['Grand strategy wargame', 'Simulation', 'Strategy'],
        score: ['4.5/5']
      },
      {
        name: 'Company of Heroes 2',
        developper: 'Relic Entertainment',
        releaseYear: 2013,
        image: '../assets/company of heroes.jpeg',
        genre: ['Real-time strategy', 'Strategy'],
        score: ['4.2/5']
      },
      {
        name: 'Europa Universalis 4',
        developper: 'Paradox Development Studio',
        releaseYear: 2013,
        image: '../assets/eu4.jfif',
        genre: ['Grand strategy wargame', 'Simulation','Strategy'],
        score: ['4.5/5']
      },
      {
        name: 'Total war: Rome 2',
        developper: 'Creative Assembly',
        releaseYear: 2013,
        image: '../assets/rome total war.jpg',
        genre: ['Real-time strategy', 'Turn-based strategy'],
        score: ['4.4/5']
      },
      {
        name: 'Napoleon:Total war',
        developper: 'Creative Assembly',
        releaseYear: 2010,
        image: '../assets/napoleon total war.jpg',
        genre: ['Real-time strategy', 'Turn-based strategy'],
        score: ['4.1/5']
      },
      {
        name: 'Modern Warfare 2',
        developper: 'Infinity Ward',
        releaseYear: 2009,
        image: '../assets/mw2.png',
        genre: ['First-person shooter', 'Action'],
        score: ['4.7/5']
      },
      {
        name: 'MAG',
        developper: 'Zipper Interactive',
        releaseYear: 2010,
        image: '../assets/MAGgame.jpg',
        genre: ['First-person shooter', 'MMO'],
        score: ['4.9/5']
      },
      {
        name: 'Doorkickers 2',
        developper: 'KillHouse Games',
        releaseYear: 2020,
        image: '../assets/doorkickers 2.webp',
        genre: ['Action', 'Strategy', 'Simulation'],
        score: ['4.8/5']
      },
      {
        name: 'Enlisted',
        developper: 'Darkflow Software',
        releaseYear: 2021,
        image: '../assets/enlisted.jpg',
        genre: ['First-person shooter', 'Simulation'],
        score: ['4.1/5']
      },
      {
        name: 'Club Penguin',
        developper: 'RocketSnail Games',
        releaseYear: 2005,
        image: '../assets/club penguin.jpg',
        genre: ['MMORPG', 'Platformer'],
        score: ['4.7/5']
      },
      {
        name: 'Enemy Territory: Quake Wars',
        developper: 'Splash Damage',
        releaseYear: 2007,
        image: '../assets/enemy-territory-quake-wars.jpg',
        genre: ['First-person shooter', 'Real-time strategy'],
        score: ['4.4/5']
      },
  ]

  var display = document.createElement("div");
  display.className = "display";
  document.body.append(display);
  
  
  for (let i = 0; i < gameLijst.length; i++) {
      var card = document.createElement("div");
      card.className = "card";
      display.appendChild(card);
  
      var image = document.createElement("div");
      image.className = "image";
      card.appendChild(image);
      var imageImg = document.createElement("img");
      imageImg.setAttribute("src", gameLijst[i].image);
      image.appendChild(imageImg);
  
      var name = document.createElement("div");
      name1.className = "name";
      card.appendChild(name1);
      var nameText = document.createTextNode(gameLijst[i].name);
      name1.appendChild(nameText);
  
      var genre = document.createElement("div");
      genre.className = "genre";
      card.appendChild(genre);
      for (let x = 0; x < gameLijst[i].genre.length; x++) {
          var genreType = document.createElement("div");
          genreType.className = "genreType";
          genre.append(genreType);
          var genreTypeText = document.createTextNode(gameLijst[i].genre[x])
          genreType.append(genreTypeText);
      }
  
      var developper = document.createElement("div");
      developper.className = "developper";
      card.appendChild(developper);
      var developperText = document.createTextNode(gameLijst[i].developper);
      developper.appendChild(developperText);
  
      var uitgaveJaar = document.createElement("div");
      uitgaveJaar.className = "releaseYear";
      card.append(uitgaveJaar);
      var releaseYearText = document.createTextNode("releaseYear: " + gameLijst[i].releaseYear);
      uitgaveJaar.appendChild(releaseYearText);
  
      var score = document.createElement("div");
      score.className = "score";
      card.appendChild(score);
      var scoreText = document.createTextNode(gameLijst[i].score);
      score.appendChild(scoreText);
  
      
  }
  