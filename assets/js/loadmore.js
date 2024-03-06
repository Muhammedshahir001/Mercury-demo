$(document).ready(function(){
  $(".hide-blog").slice(0, 3).show();
  if($(".hide-blog:hidden").length == 0) {
    $("#loadMore").css("display","none");
  }
  else {
    if($(".hide-blog").length > 3){
      $("#loadMore").css("display","inline-block");
    }
    else if($(".hide-blog").length <= 3){
      $("#loadMore").css("display","none");
    }
  }
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".hide-blog:hidden").slice(0, 3).slideDown();
    if($(".hide-blog:hidden").length == 0) {
      $("#loadMore").css("display","none");
    }
    else {
      if($(".hide-blog").length > 3){
        $("#loadMore").css("display","inline-block");
      }
      else if($(".hide-blog").length <= 3){
        $("#loadMore").css("display","none");
      }
    }
  });
})