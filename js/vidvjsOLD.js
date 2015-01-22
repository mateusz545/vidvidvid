
    var   adres="";
var pl=null;

	$("#wybierz").change(function () {
      
	 $(".vjs-ass-button").trigger("click");
	 $(".vjs-ass-button").remove();
	  
    adres = $("#wybierz").val();
	
    napisy='subs/'+adres.substring(adres.lastIndexOf("/")+1, adres.lastIndexOf(".mp4")-6);
	
	
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
	    
	   pl.pause();
	   
	    pl.src({ type: "video/mp4", src: adres});
	 pl.ass({ src: napisy, delay:-0.45 });
	 
	  
	   pl.load();
	
	
});
	
	
	    
});