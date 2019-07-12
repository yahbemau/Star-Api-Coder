import getData from '../utils/api'
import {setStorage, getStorage, startStorage} from '../utils/storage'
var url = "https://swapi.co/api/people/"
var nextPage = null
var num = 0;


function peopleController() {
  console.log('cargamos personajes')
  $('.main-title').text('cargamos la seccion personajes..');
  if (!getStorage()) {
    console.log(false);
    getData(url, handleData);
  } else {
    console.log(true);
    showNames(getStorage());
  }

}


function showNames(info){
  console.log('Hola');
  console.log(info);
  for (var i = 0; i < info.length; i++) {
    console.log(info[i].name)
    num++
    var tr = document.createElement('tr');
    // tr.id = 'row' + i;
    var id = document.createElement('td');
    var td = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var btn = document.createElement('button');
    $(btn).addClass('btn btn-success align-middle text-white');
    $(id).text(num);
    $(td).text(info[i].name);
    $(td2).text(translateGender(info[i].gender));
    $(td3).text(info[i].height);
    $(td4).text(info[i].mass);
    $(td5).text(translateColor(info[i].eye_color));
    $(btn).text('Guardar');
    $(tr).append(id);
    $(tr).append(td);
    $(tr).append(td2);
    $(tr).append(td3);
    $(tr).append(td4);
    $(tr).append(td5);
    $(tr).append(btn);
    $('.tBody').append(tr);
  }
  localStorage.setItem('Counter', num);
}

function handleData(data){
  setStorage(data.results);
  showNames(data.results);
  if(data.next){
    nextPage = data.next
  }else{
    nextPage = null
  }
}



$('.main').on('click', '#btn-more', function(){
  getData(nextPage, handleData)
})


function translateColor(eye_color){
  if(eye_color === 'black' ){
    return 'negro'
  } else if(eye_color === 'blue'){
    return 'azul'
  } else if(eye_color === 'red'){
    return 'rojo'
  } else if(eye_color === 'brown'){
    return 'marron'
  } else if(eye_color === 'blue-gray'){
    return 'celeste'
  } else if(eye_color === 'yellow'){
    return 'amarillo'
  }else {
    return 'undefined'
  }
}

function translateGender(gender){
  if(gender === 'male'){
    return 'Hombre'
  }else if(gender === 'female'){
    return 'Mujer'
  }else{
    return 'undefined'
  }
}






export default peopleController
