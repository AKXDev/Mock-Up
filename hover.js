$(document).ready(function() {

    /*Site Collection Menu Hover*/
    $('#sitecollectionnav ul li a').hover(
		function() {
		    $(this).stop().animate({
		        color: "#cccccc",
		        borderTopColor: 'rgba(142 , 0 , 0 , 1)'
		    }, 'slow');
		},
		function() {
		    $(this).stop().animate({
		        color: "#555555",
		        borderTopColor: 'rgba(142 , 0 , 0, 0)'
		    }, 'slow');
		});

    /* Main Navigation Hover */
		$('.menu_items').hover(
          function() {
              $(this).stop().animate({
                  color: "#8f0000",
                  backgroundColor: 'rgba(255, 255, 255, 1)'
              }, 'slow');
          },
          function() {
              $(this).stop().animate({
                  color: "#FFFFFF",
                  backgroundColor: 'rgba(142 , 0 , 0, 0)'
              }, 'fast');
          });
    /* Main Navigation Sub Headings Hover */
          $('.nav_headings ul li a').hover(
          function() {
              $(this).stop().animate({
                  color: "#FFFFFF",
                  backgroundColor: 'rgba(84, 84, 84, 1)'
              }, 'fast');
          },
          function() {
              $(this).stop().animate({
                  color: "#555555",
                  backgroundColor: 'rgba(84 , 84 , 84, 0)'
              }, 'fast');
          });
		
    /* Main Navigation Sub Sub Headings Hover */
          $('.list_double li a').hover(
          function() {
              $(this).stop().animate({
                  color: "#FFFFFF",
                  backgroundColor: 'rgba(84, 84, 84, 1)'
              }, 'fast');
          },
          function() {
              $(this).stop().animate({
                  color: "#555555",
                  backgroundColor: 'rgba(255, 255, 255, 0)'
              }, 'fast');
          });
     /* Main Navigation Sub Sub Headings Hover */
          var searchImage = new Image();
          var searchOriginal = $('#search_image').attr('src');
          searchImage.src = 'img/search_hover.png';
          $('.menu_items').hover(function(){
            $('#search_image').attr('src', searchImage.src).animate('slow');
          },
          function(){
            $('#search_image').attr('src', searchOriginal).animate('slow');
          });
          
      /* DropDown Boxes Hover */
          $('.front_page_selection select').hover(
          function() {
              $(this).stop().animate({
                  color: "#cccccc",
                  backgroundColor: 'rgba(84, 84, 84, 1)'
              }, 'fast');
          },
          function() {
              $(this).stop().animate({
                  color: "#ffffff",
                  backgroundColor: 'rgba(205, 205, 205, 1)'
              }, 'fast');
          });
      });
/* Slider */
      $(function() {
          $('#carousel').carouFredSel({
              width: '100%',
              items: {
                  visible: 3,
                  start: -1
              },
              scroll: {
                  items: 1,
                  duration: 1000,
                  timeoutDuration: 3000
              },
              auto: false,
              prev: '#prev',
              next: '#next',
              pagination: {
                  container: '#pager',
                  deviation: 1,
                  	anchorBuilder: function( nr ) {
                    return '<a href="#">' + $(this).find('h1').text() + '</a>';
                  }
              }

          });

            $('#slider #slider_item').each(function() {
            var $cfs = $(this);
            $cfs.carouFredSel({
                direction: 'up',
                circular: false,
                infinite: false,
                auto: false,
                scroll: {
                    queue: 'first'
            },
            items: {
            visible: 1,
            }
            });
            $cfs.hover(
                function() {
                    $cfs.trigger('next');
            },
                function() {
                    $cfs.trigger('prev');
            }
        );
    });
    $('input#newsletter').focusin(function(){
        this.value = '';
    });    
});