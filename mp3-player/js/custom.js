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

        var audio = $("#music")
        var time = audio.currentTime;
        console.log(time)
      }
 
}

    
function updatebar(x) {
  $position = x - $progress.offset().left;
  $percentage = (100 * $position) / $progress_bar.width();
  if ($percentage > 100) {
    $percentage = 100;
  }
  if ($percentage < 0) {
    $percentage = 0;
  }
  $progress.css("width", $percentage + "%");
  $video[0].currentTime = ($video[0].duration * $percentage) / 100;
}

