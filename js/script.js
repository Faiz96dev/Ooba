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
});

var http = new XMLHttpRequest();
var url = "get_data.php";
var params = "orem=ipsum&name=binny";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {
  //Call a function when the state changes.
  if (http.readyState == 4 && http.status == 200) {
    alert(http.responseText);
  }
};
http.send(params);

$(document).ready(function() {
  $("#mySidebar").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1200);
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
