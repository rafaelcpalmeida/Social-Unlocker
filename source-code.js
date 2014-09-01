var none = [".fb-root","#FBJC_overlay","#FBJC_modal",".pluginConnectButton","#spu-bg",".socialiframetrack_facebook","#hstp_interstitial","#FBCOMM_overlay","#FBCOMM_modal","#TB_overlay","#TB_window","#hstp-bg-overlay","#spu-main","#hstp-bg-overlay",".hstp-bg-overlay",".spu-main",".hstp-bg-overlay","#fbpop","#fbbg",".onp-sociallocker-overlap-locker-box", ".onp-sociallocker-overlap-box", ".onp-sociallocker-blurring-mode"];
var blank = [".wpvltr_like_to_keep_reading","#fblikebg","#fblikepop","#arevicofancy-overlay","#arevicofancy-wrap","#spu-main",".onp-sociallocker-content",".ui-locker-content", "#vervideo",".onp-sociallcker-content",".onp-sociallocker-call"];
for (var each in none)
{
  $(none[each]).css("display","none");
}
for (var each in blank)
{
  $(blank[each]).css("display","");
}
$("onp-sociallocker-blur-area").removeAttr('style');
try
{
  var classList = document.getElementById('top').className.split(/\s+/);
  if (classList.length>0) {
    for (var i = 0; i < classList.length; i++) {
      if( classList[i].match(/[0-9]/g) ) {
        var number = classList[i].replace(/[^0-9]/g, '' );
        $.cookie("wpll"+number, true);
      }
    }
  }
}
catch(err)
{ }
try
{
  var classList = document.getElementById('page').className.split(/\s+/);
  if (classList.length>0) {
    for (var i = 0; i < classList.length; i++) {
      if( classList[i].match(/[0-9]/g) ) {
        var number = classList[i].replace(/[^0-9]/g, '' );
        $.cookie("wpll"+number, true);
      }
    }
  }
}
catch(err)
{ }
try
{
  var classList = document.getElementById('postid').className.split(/\s+/);
  if (classList.length>0) {
    for (var i = 0; i < classList.length; i++) {
      if( classList[i].match(/[0-9]/g) ) {
        var number = classList[i].replace(/[^0-9]/g, '' );
        $.cookie("wpll"+number, true);
      }
    }
  }
}
catch(err)
{ }
try
{
  if ($("body").has("[class^='postid']"))
  {
    var classList =$('body').attr('class').split(/\s+/);
    $.each( classList, function(index, item){
      if(item.match(/[0-9]/g) ) {
        var number = item.replace(/[^0-9]/g, '' );
        $.cookie("wpll"+number, true);
      }
    });
  }
}
catch(err)
{ }
try
{
  if ($("div").has("[id^='lbtn']"))
  {
    var classList =$("[id^='lbtn']").attr('id');
    $.cookie(classList, true);
  }
}
catch(err)
{ }
try
{
  if ($("div").has("[class^='video']"))
  {
    var vid = $(".youtubeblocker").attr('data-videoid');
    if (vid=="Z5nqqV6_eJo") {
      var vid = $("[id^='bolt-']").attr('id').match(/\d+/);
      var newVid = $("#bolt-"+vid+"-player").clone(true);
      $(".youtubeblocker").after(newVid);
      $(".youtubeblocker").css("display","none");
    }
    else
    {
      $(".youtubeblocker").after("<object type='application/x-shockwave-flash' id='" + vid + "' name='" + vid + "' data='http://www.youtube.com/v/" + vid + "?autoplay=1' width='620' height='349' style='visibility: visible;'></object>");
      $(".youtubeblocker").css("display","none");
    }
  }
}
catch(err)
{ }
alert("Success! If you don't see the content, please refresh the page.");
