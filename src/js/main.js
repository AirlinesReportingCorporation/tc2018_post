//css imports
import '../css/main.scss';

//js dependency imports
import $ from 'jquery';
import Vue from 'vue';
import owlCarousel from 'owl.carousel';
import TypeIt from 'typeit';

function statsInit(){
  var stats = $('.stats').length;
  var delay = 200;

  for(var i = 1; i <= stats; i++){
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

statsInit();
