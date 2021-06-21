$(document).ready(function () {
  "use strict";

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".myNavbra").addClass("fixed-navbar");
      $("#floating").css("opacity", "0.8");
    } else {
      $(".myNavbra").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".counter").length) {
    $(".counter").counterUp({
      time: 1000,
    });
  }

  $(".Mysidebar li.sideMenueParent").click(function () {
    $(this).children("ul").slideToggle();
    $(this).toggleClass("iMenue");
  });

  $('.firstSideMenue').slideDown().parent('.sideMenueParent').addClass("iMenue");

  $(".Mysidebar").perfectScrollbar({
    suppressScrollX: !0,
    wheelPropagation: !0,
  });

  $(".notification-box").perfectScrollbar({
    suppressScrollX: !0,
    wheelPropagation: !0,
  });

  // $(".notification-box").perfectScrollbar({
  //   suppressScrollX: !0,
  //   wheelPropagation: !0,
  // });

  if($('.notification').length){
    $('.notification').click(function(){
      $('.notification-box').toggleClass('notification-active');
      // document.querySelector(".bg-sidenavOpen").style.display = "block";
      // document.body.classList.add("openMenuActive");

      // console.log("hi");
    })
  }

  if($('.persong-img').length){
    $('.persong-img').click(function(){
      $('.person-img-info').toggleClass('notification-active');
      // document.querySelector(".bg-sidenavOpen").style.display = "block";
      // document.body.classList.add("openMenuActive");

      // console.log("hi");
    })
  }

 //Only needed for the filename of export files.
    //Normally set in the title tag of your page.
    document.title='Simple DataTable';
    // DataTable initialisation
    $('.example').DataTable(
      {
        "dom": '<"dt-buttons"Bf><"clear">lirtp',
        "paging": true,
        "autoWidth": true,
        "buttons": [
          'colvis',
          'copyHtml5',
          'csvHtml5',
          'excelHtml5',
          'pdfHtml5',
          'print'
        ]
      }
    );


  if($('.customSelect').length){
    $('.customSelect').niceSelect();
  }

  if($('.dateInput').length){
    $( ".dateInput" ).datepicker();  
  }


});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-300px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}
