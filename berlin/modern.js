$(document).ready(function(){






  $('a.next').on('click',function(ev){
    ev.preventDefault();
    
    var fragment = this.href;
    var title = $('#title').text();
    window.history.pushState({fragment: fragment, title: title}, fragment, fragment);
    $('#fragment').text(fragment);
    
    
  });



  $('html').removeClass('no-js').addClass('js ready');

});


$(window).on('popstate', function(ev){
	var data = ev.state || {data: 'no state'};
	$('#fragment').text(data.fragment);
	$('#title').text(data.title);
});