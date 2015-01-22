
    var   adres="";
var pl=null;

	$("#wybierz").change(function () {
      
	 $(".vjs-ass-button").trigger("click");
	 $(".vjs-ass-button").remove();
	  
    adres = $("#wybierz").val();

	sn=adres.substring(adres.lastIndexOf("/")+1, adres.lastIndexOf(".mp4")-6);
	
    napisy='subs/'+sn;
	
	srt='subs/srt/'+sn;
	
	
     videojs('player0', {
	  
	   sources :[{ type: "video/mp4", src: adres}],
  
        controls: true,
        nativeControlsForTouch: false,
        width: 640,
        height: 360,
        plugins: {
       /*   ass: {
            'src': ["subs/"+napisy],
            'delay': -0.45,
          }*/
        },
        techOrder: ["html5","flash"],
       
        poster: false
      }).ready(function(){
	 
	 
	   var pl = this;
	    
	  // pl.pause();
	   
	    pl.src({ type: "video/mp4", src: adres});
	
	 pl.ass({ src: napisy, delay:-0.45 });
	
	
	 
	  
	   pl.load();
	   pl.play();
	//   pl.pause();
    
 //   setTimeout(function(){pl.currentTime(0.1);pl.pause();},100);
  
	  
	 //  pl.bigPlayButton.show();
	   
	  //  pl.pause();
		   pl.on("play", function()  //function to play the video again//
        {  
          //  vid.posterImage.hide(); //hides your poster//
         //   vid.controlBar.show(); //shows your controls//
            pl.bigPlayButton.hide(); //hides your play button//
        });
		
			   pl.on("pause", function()  //function to play the video again//
        {  
          //  vid.posterImage.hide(); //hides your poster//
         //   vid.controlBar.show(); //shows your controls//
            pl.bigPlayButton.show(); //hides your play button//
        });
	
	$("#dl").html("<br/>Możesz równiesz pobrać:<br/>");
	$("#dl").append("<a class ='dlb' href="+srt+".srt"+">napisy</a>");
	$("#dl").append("<br/>");
	$("#dl").append("<a class ='dlb' href="+adres+">wideo</a>");
});
	
	
	    
});