$(function(){"use strict";var e=$(".sven-container"),a=e.attr("data-freeze-prop")?parseBool(e.attr("data-freeze-prop")):!0,n=isMobile.phone,o=!0;n&&(o=!1),e.svenPlugin({autoStart:o,fullDuration:"default",preloadMethod:"tag",fileTimeout:8e3,audioTimeout:8e3,colors:["#E7464F","#CDAA20","#80993B","#07BABA","#9B2C9D"],showAnimationSummary:!1,freezeOnBlur:a,videoPlaybackChange:!1,onTeaserReady:function(){$(".loader-container").hide(),o||($(".splash-page").show(),$(".sven-footer").show()),$("#particles-js").appendTo(".sven-wrapper").hide()},onTeaserStart:function(){$(".controls-nav").css({visibility:"visible"}),$(".splash-page").hide(),$(".sven-footer").hide()},onBeforeScene:function(e,a,n,o){a.data().showParticles?$("#particles-js").show():$("#particles-js").hide()},onBeforeIn:function(e,a,n,o){a.data().showFooter?$(".sven-footer").show():$(".sven-footer").hide();var t=a.find(".content-container").children().not(".content-wrapper");t.length>0&&TweenMax.staggerFromTo(t,.5,{autoAlpha:0},{autoAlpha:1},.08)},onBeforeOut:function(e,a,n,o){var t=a.find(".content-container").children().not(".content-wrapper");t.length>0&&TweenMax.staggerTo(t,.25,{autoAlpha:0},.08)}});var t=$(".speed-label span"),s=[1,.5,.25,1,1.5,2],i=1,l=s.length;$(".speed-label").on("click",function(a){var n=s[i],o=isFloat(n)?n:n.toFixed(1);t.html(o+"x"),l-1>i?i+=1:i=0,e.svenPlugin.changeSpeed(n)}),$(".skip-button").on("click",function(a){e.svenPlugin.skipToLast()}),$(".movie-button, .play-button").on("click",function(a){e.svenPlugin.togglePlay()}),$(document).on("keydown",function(a){32===a.keyCode&&e.svenPlugin.togglePlay()}),$(".sound_button").on("click",function(a){e.svenPlugin.toggleSound()});var r=$(".movie-button i"),d=$(".sound_button i");if(e.on("STPlay",function(){r.removeClass("fa-play").removeClass("fa-repeat").addClass("fa-pause")}),e.on("STPause",function(){r.removeClass("fa-pause").removeClass("fa-repeat").addClass("fa-play")}),e.on("STEnd",function(){r.removeClass("fa-pause").removeClass("fa-play").addClass("fa-repeat")}),e.on("STMuted",function(){d.removeClass("fa-volume-up").addClass("fa-volume-off")}),e.on("STUnMuted",function(){d.removeClass("fa-volume-off").addClass("fa-volume-up")}),-1!=navigator.userAgent.indexOf("MSIE"))var c=/MSIE (\d+\.\d+);/;else var c=/Trident.*rv[ :]*(\d+\.\d+)/;if(c.test(navigator.userAgent)){var u=new Number(RegExp.$1);9>=u&&$("body").addClass("loader-ie9")}$("#particles-js").length&&particlesJS("particles-js",{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.2,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})});


var tday=new Array("sunday","monday","tuesday","wednesday","thursday","friday","saturday");
var tmonth=new Array("january","february","march","april","may","june","july","august","september","october","november","december");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin
if(nsec<=9) nsec="0"+nsec;

document.getElementById('date').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
document.getElementById('time').innerHTML=" "+nhour+":"+nmin+":"+nsec+"";
}


window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
