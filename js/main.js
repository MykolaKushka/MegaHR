
// navigation START
let parentnav = document.querySelectorAll('.parentnav')
let linkdown = document.querySelectorAll('.parentnav > a')
for (let i = 0; i < linkdown.length; i++) {
  linkdown[i].onclick = function (e) {
    e.preventDefault()
    if (parentnav[i].classList.contains('active')) {
      parentnav[i].classList.remove('active')
    } else {
      for (let i = 0; i < parentnav.length; i++) {
        parentnav[i].classList.remove('active')
      }
      parentnav[i].classList.add('active')
    }
  }
}
// navigation STOP



$(document).ready(function () {

  // bar START
  $('#nav-toggle').click(function () {
    $(this).toggleClass('active');
    $('body').css('overflow','inherit');
    if ($('aside').hasClass('active')) {
      $('aside').removeClass('active');
    }
    else {
      $('aside').addClass('active');
      $('body').css('overflow','hidden');
    }

    if ($('.pagefon').hasClass('active')) {
      $('.pagefon').removeClass('active');
    }
    else {
      $('.pagefon').addClass('active');
    }

    $('.pagefon').click(function () {
      $('#nav-toggle').removeClass('active');
      $('aside').removeClass('active');
      $('.pagefon').removeClass('active');
      $('body').css('overflow','inherit');
    });
    
  });
  // bar STOP


  $('.myDetails-item').click(function () {
      $('.myDetails-item').removeClass('myfocus');
      $(this).addClass('myfocus');
  });


  // sortable start
  let fieldsortable = document.querySelectorAll('#sortable .field-sortable');
  for (let i = 0; i < fieldsortable.length; i++) {
    $(fieldsortable[i]).mouseover(function () {
      $(this).parent().addClass('hoversort');
    }
    );
    $(fieldsortable[i]).mouseleave(function () {
      $(this).parent().removeClass('hoversort');
    }
    );
  }
  // sortable stop

});


var mcustomscrollbar = document.querySelector( 'script[src="js/jquery.mCustomScrollbar.concat.min.js"]' );
if (window.innerWidth < 1201) {
  mcustomscrollbar.parentNode.removeChild(mcustomscrollbar)
}


