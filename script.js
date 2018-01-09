function onLoadContainer() {
  //debugger;

 


};
var cache = new Object();
//{'':$('<div class="item">').appendTo("#content-container").load('home.html')};

/** Hash-change, simple cache function */
$(function() {
    //debugger;
    //cache[''] = $('<div class="item">').appendTo("#content-container").load('home.html');
    $(window).hashchange(function() {

      //alert("hashchange");

      var url = window.location.hash.replace('#', '');
      if(url == "") {
        url = "home.html";
      }
      
      $("#content-container").children(":visible").hide();
      
      if ( cache[url] ) {  
        //debugger;
        cache[url].show();
      } else {
          cache[url] = $('<div class="item">').appendTo("#content-container").load(url, function() {
          $("#content-container").ready(function() {
            onLoadContainer();
          });

        });

      }
    });

    $(window).hashchange();

});