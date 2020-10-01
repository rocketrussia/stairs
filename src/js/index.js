var $splitter = $(".h1");
$splitter.each(function (i, e) {
  var $e = $(e);
  var name = $e.text().split(" ");
  var firstname = name.splice(0, 1);
  var last = "";
  for (var i = 0; i < name.length; ++i)
    last += name[i] + " ";
  $e.html("<span>" + firstname + "</span>" + last);
});
//accordion
$(document).ready(function () {
  $(".accordion_container > a").on("click", function (e) {
    e.preventDefault()
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".accordion_content").slideUp(200);
    } else {
      $(this).addClass("active");
      $(this).siblings(".accordion_content").slideDown(200);
    }
  });
});
//slider price
$("#priceFromFilterSlider").slider({
  animate: "slow",
  range: true,
  values: [10, 65],
  slide: function (event, ui) {
    $("#countStart").val(ui.values[0])
    $("#countFinish").val(ui.values[1]);
  }
});
$("#countStart").val($("#priceFromFilterSlider").slider("values", 0))
$("#countFinish").val($("#priceFromFilterSlider").slider("values", 1))

//timer 9-1, вычитать из нужного месяца единицу
$('#defaultCountdown').countdown({
  until: new Date(2020, 12 - 1, 21),
  format: 'dHM'
});

$(document).ready(function () {
  $('.mainGalery__box').magnificPopup({
    delegate: 'a',
    type: 'image'
  });
});
$('.mainGalery__box').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.catalog__item__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
});


  $( ".dropdown, .mainNav__subMenu" ).mouseout(function() {
    $(".mainNav__subMenu").removeClass("active");
  });
  $( ".dropdown, .mainNav__subMenu" ).mouseover(function() {
    $(".mainNav__subMenu").addClass("active");
  });

  $('.catalog__item__slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  