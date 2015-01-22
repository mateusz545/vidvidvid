
    var   ident=encodeURIComponent($("#player0").attr("src"));
 /*   $(document).ready(function() {


$('audio,video').mediaelementplayer({
	//mode: 'shim',

	success: function(player, node) {
		$('#' + node.id + '-mode').html('mode: ' + player.pluginType);
		
	}
	
});
            
    });*/

var mp4link,webmlink;
var player = new MediaElementPlayer('#player0', {
    type: ['video/mp4', 'video/webm'],
    success: function (mediaElement, domObject) {
	mp4=$.get('http://ytdl-kopy6t.rhcloud.com/?orig='+ident+'&id=22',function(vlink){mp4link=vlink});
	webm=$.get('http://ytdl-kopy6t.rhcloud.com/?orig='+ident+'&id=43',function(vlink){webmlink=vlink});
	
	
	$.when(mp4,webm).done(function() {

  
     


        var sources = [
            { src: mp4link, type: 'video/mp4' },
            { src: webmlink, type: 'video/webm' }
        ];

        mediaElement.setSrc(sources);
        mediaElement.load();
        mediaElement.play();
		});
    }
});
