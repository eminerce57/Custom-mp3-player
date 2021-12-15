function play() {
  var audio = $("#music");

  $("#play").toggleClass("feather-play-circle");
  if (audio[0].paused) {
    audio[0].play();

    time();
  } else {
    audio[0].pause();
  }
}
function time() {

  var audio_time = document.getElementById("music");
  var time_split = audio_time.currentTime;
  var time = time_split.toString().split(".", 1);
  const time1 = time.map(Number);




time1.forEach(function (e) {

    console.log(e);
    $(".music-bar-width").css("width", e,"%")
});

}
