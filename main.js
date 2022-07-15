$(document).ready(function () {

  $('#fullpage').fullpage({
    //options 
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    navigation: true,
    navigationposition: 'right',
    afterLoad: function() {
      var activeIndex = $('#fullpage').find(".active").index();
      $('nav ul li').eq(activeIndex).addClass('active').siblings().removeClass('active');
    }
  });
  
});

//slide 1

$(function () {
  $('.fadein img:gt(0)').hide();
  setInterval(function () {
    $('.fadein :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein');
  }, 5000);
});

$(function () {
  $('.fadein2 img:gt(0)').hide();
  setInterval(function () {
    $('.fadein2 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein2');
  }, 5000);
});


// mail

$(document).ready(function () {
  emailjs.init("NfhKll6IzYAvHh2Uq");

  $('input[name=submit]').click(function () {

    var templateParams = {

      name: $('input[name=name]').val(),
      phone: $('input[name=phone]').val(),
      email: $('input[name=email]').val(),
      message: $('textarea[name=message]').val()
    };


    emailjs.send('service_q334s2l', 'template_dyjpgjj', templateParams)

      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });

  });

});








// cursor
// $(document).ready(function () {
//   $(document).mousemove(function (e) {
//     var mouseX = e.pageX;
//     var mouseY = e.pageY;
//     $('.cursor').show().css({
//       left: mouseX + "px",
//       top: mouseY + "px"
//     })
//   });
// });