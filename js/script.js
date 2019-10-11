var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$(document).ready(function() {
  var button = $("#button-up");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on("click", function() {
    $("body, html").animate(
      {
        scrollTop: 0
      },
      800
    );
    return false;
  });
  $("#mySidebar").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 600);
  });
});

$(function(){
  $('img[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });
});


function openNav() {
  document.getElementById("mySidebar").style.width = "210px";
  document.getElementById("main").style.marginLeft = "210px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
$(document).ready(function() {
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});

function sendData() {
  const client_name = document.getElementById("name").value;
  const client_phone = document.getElementById("phone").value;
  console.log(client_name, client_phone);
}
$.ajax({
  type: "POST",
  data: {
    phone: client_phone,
    name: client_name
  },
  url: "https://",
  success: function(data) {
    data = JSON.parse(data);
    consol.log(data);
  },
  error: function(xhr, status, error) {
    console.log(xhr.statusText, xhr.responseText, status, error);
  }
});

