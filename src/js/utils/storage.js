function startStorage(){
  if (!getStorage()) {
    var characters = [];
    var stringfiedCharacters = JSON.stringify(characters)
    localStorage.setItem('ListaPersonajes' ,stringfiedCharacters);
  } else {
    return false;
  }
}

function setStorage(c){
  for (var i = 0; i < c.length; i++) {
    var allCharacters = getStorage();
    allCharacters.push(c[i]);
    var stringfiedCharacters = JSON.stringify(allCharacters);
    localStorage.setItem('ListaPersonajes' , stringfiedCharacters);
  }
}

function getStorage(){
  if (localStorage.getItem('ListaPersonajes')) {
      var characters = JSON.parse(localStorage.getItem('ListaPersonajes'));
      return characters;
    } else {
      return null;
    }
}


export {setStorage, getStorage, startStorage}
