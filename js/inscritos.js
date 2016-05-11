$(document).ready(function(){


  var atletas = [],
      url = '/js/inscritos.json';

  $.getJSON(url, function (response) {

    for ( var i = 0; i < response.inscritos.length ; i++ ) {

        EVENT =  '<tr >'+
                    '    <td >'+ response.inscritos[i].name + '</td >'+
                    '    <td >'+ response.inscritos[i].email + '</td>'+
                    '    <td >'+ response.inscritos[i].state + '</td>'+
                    '</tr >';
        atletas.push(EVENT);
    }

    for ( var j = 0; j < atletas.length; j++ ) {
      $("#atletas-list").append(atletas[j]);
    }

  });

})
