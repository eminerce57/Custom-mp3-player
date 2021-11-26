$(".container").each(function () {

 
    


// if ($video_container.parents(".video-header").length) {
    //   $video_container.parents(".video-header").addClass("playing");

})


function play(){
var audio = $("#music")
    $("#play").toggleClass("feather-play-circle")


 
    if (audio[0].paused) {
        audio[0].play();
      
  updatebar();
      
      } else {
        audio[0].pause();
      }
 
}



function updatebar(x) {
    var audio = $("#music")
    var progress =$(".music-bar-width");
    var progress_bar =$(".music-bar");
    $position = x - progress.offset().left;
    $percentage = (100 * $position) / progress_bar.width();
    if ($percentage > 100) {
      $percentage = 100;
    }
    if ($percentage < 0) {
      $percentage = 0;
    }
   ;
    audio[0].currentTime = (audio[0].duration * $percentage) / 100;
     progress.css("width", $percentage + "%")
  }