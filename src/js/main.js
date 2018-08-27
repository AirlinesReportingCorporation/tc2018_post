//css imports
import '../css/main.scss';

//js dependency imports
import $ from 'jquery';
import Vue from 'vue';
import owlCarousel from 'owl.carousel';
import TypeIt from 'typeit';
import L from 'leaflet';

function mapInit() {

  $(document).ready(function() {
    var mymap = L.map('mapid', {
      scrollWheelZoom: false
    }).setView([38.980, -77.017], 10);

    var marker = L.marker([38.780, -77.017], {
      riseOnHover: true
    }).addTo(mymap);

    var dulles = L.marker([38.953, -77.456], {
      riseOnHover: true
    }).addTo(mymap);

    var bwi = L.marker([39.177, -76.668], {
      riseOnHover: true
    }).addTo(mymap);

    var rr = L.marker([38.851294, -77.040282], {
      riseOnHover: true
    }).addTo(mymap);

    marker.bindTooltip("<strong>Gaylord National Resort & Convention Center</strong><br/>TravelConnect 2018<br/>", {
      permanent: true
    }).openTooltip();

    dulles.bindTooltip("<strong>Washington Dulles International Airport</strong><br/>IAD<br/>", {
      permanent: true
    }).openTooltip();

    bwi.bindTooltip("<strong>Balitmore-Washington International Airport</strong><br/>BWI<br/>", {
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
