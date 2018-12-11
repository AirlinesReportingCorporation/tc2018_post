//css imports
import '../css/main.scss';

//js dependency imports
import $ from 'jquery';
import Vue from 'vue';
import owlCarousel from 'owl.carousel';
import TypeIt from 'typeit';
import L from 'leaflet';
import featherlight from 'featherlight';

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

function mapInit() {

  $(document).ready(function() {
    var mymap = L.map('mapid', {
      scrollWheelZoom: false
    }).setView([38.953, -77.456], 10);

    var marker = L.marker([39.084, -77.475], {
      riseOnHover: true
    }).addTo(mymap);

    var dulles = L.marker([38.953, -77.456], {
      riseOnHover: true
    }).addTo(mymap);

    var rr = L.marker([38.851294, -77.040282], {
      riseOnHover: true
    }).addTo(mymap);

    marker.bindTooltip("<strong>Lansdowne Resort and Spa</strong><br/>TravelConnect 2019<br/>", {
      permanent: true
    }).openTooltip();

    dulles.bindTooltip("<strong>Washington Dulles International Airport</strong><br/>IAD<br/>", {
      permanent: true
    }).openTooltip();

    rr.bindTooltip("<strong>Ronald Reagan Washington National Airport</strong><br/>DCA<br/>", {
      permanent: true
    }).openTooltip();

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 15,
      id: 'mapbox.streets',
      scrollWheelZoom: false,
      accessToken: 'pk.eyJ1IjoiaWZhamFyZG8iLCJhIjoiY2o4MGJ5dHl3MjBpbzMzczBwd3EyeWV6ZiJ9.9LHEjhURIT4WFRpfc-rQRA'
    }).addTo(mymap);

  });


}

function statsInit() {
  var stats = $('.stats').length;
  var delay = 200;

  for (var i = 1; i <= stats; i++) {
    var e = '.stats' + i;
    var f = '.stats-title' + i;
    var g = '.stats-subtitle' + i;
    var h = '.stats-image' + i;

    $(h).addClass("fadeInDown");

    new TypeIt(e, {
      speed: 200,
      cursor: false,
      startDelay: i * delay
    })

    new TypeIt(f, {
      speed: 100,
      cursor: false,
      startDelay: i * delay
    })

    new TypeIt(g, {
      speed: 50,
      cursor: false,
      startDelay: i * delay
    })
  }
}

var list = [];

list.push($("#stats").offset().top);
list.push($("#highlights").offset().top);
list.push($("#awards").offset().top);
list.push($("#quotes").offset().top);
list.push($("#social").offset().top);
list.push($("#contact").offset().top);

//form pop-up message set-up
var a = "<div class='fl-title'><div class='animated bounce'><img src='/globalassets/home2/thank-you/carrier.png'></div></div>";

var b = "<div class='fl-title'><div class='animated bounce'><img src='/globalassets/home2/thank-you/distribution.png'></div></div>";

var c = "<div class='fl-title'><div class='animated bounce'><img src='/globalassets/home2/thank-you/EMDs.png'></div></div>";

var e = "<div class='submission'><h3>Thank you for your interest in becoming a sponsor! <h3/>We look forward to working with you at TravelConnect 2019.</div>";

var f = "<div class='submission'><h3>Thank you for your interest in becoming a speaker! <h3/>We will contact you when we begin the content selection process for TravelConnect 2019.</div>";

var g = "<div class='submission'><h3>You are now connected! <h3/>We’ll keep you informed on the latest TravelConnect 2019 updates.</div>";

var tcVid = "<iframe width='' height='100%' src='https://www.youtube.com/embed/a9Kk3P1HUtw?rel=0&amp;showinfo=0&autoplay=1' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";

e = b + e;
f = a + f;
g = c + g;

$.featherlight.defaults.root = $(".featherlight-holder");

//set popup for TravelConnect Video


//get param function
$(document).ready(function() {

  if (getUrlParameter("sponsors") == "true") {
    $.featherlight($(e), {});
  }

  if (getUrlParameter("connect") == "true") {
    $.featherlight($(g), {});
  }

  if (getUrlParameter("speakers") == "true") {
    $.featherlight($(f), {});
  }

  $(".tc-video").click(function() {
    $.featherlight($(tcVid), {
      root: ".featherlight-video-holder"
    });
  });
});

$(".veriticalNavItem").hover(function() {
  $(this).find(".navItemText").show();
});

$(".veriticalNavItem").mouseleave(function() {
  $(this).find(".navItemText").hide();
});

$(".veriticalNavItem").click(function() {
  var scrollTo = $(this).data("id");
  console.log(scrollTo);
  $('html, body').animate({
    scrollTop: $("#" + scrollTo).offset().top
  }, 700);
});


statsInit();
mapInit();
