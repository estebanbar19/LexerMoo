$.getJSON("js/lang.json", function(json){
    //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
    if(!localStorage.getItem("lang")){
      localStorage.setItem("lang", "Es");
    }
    var lang = localStorage.getItem("lang");
    var doc = json;
    $('.lang').each(function(index, element){
      $(this).text(doc[lang][$(this).attr('key')]);
    });//Each
  
    $('.translate').click(function(){
      localStorage.setItem("lang", $(this).attr('id')) ;
      var lang = $(this).attr('id');
      var doc = json;
        $('.lang').each(function(index, element){
          $(this).text(doc[lang][$(this).attr('key')]);
        }); //Each
    }); //Funcion click
  
      $('#Es').click(function(){
          $('#btn', window.parent.document).val('Ejecutar');
      });
      $('#En').click(function(){
          $('#btn', window.parent.document).val('Run');
      });
      $('#Fr').click(function(){
          $('#btn', window.parent.document).val('Courir');
      });
      $('#中国').click(function(){
          $('#btn', window.parent.document).val('跑');
      });
      $('#De').click(function(){
        $('#btn', window.parent.document).val('Lauf');
      });
      $('#Po').click(function(){
        $('#btn', window.parent.document).val('Corre');
      });
  });//Get json AJAX
  