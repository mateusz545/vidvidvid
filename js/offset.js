
(function(){"use strict";var a=function(a){var b,c,d;return b=this.constructor,b.__super__={duration:b.prototype.duration,currentTime:b.prototype.currentTime,bufferedPercent:b.prototype.bufferedPercent,remainingTime:b.prototype.remainingTime},c=a.start||0,d=a.end||0,b.prototype.duration=function(){return d>0?d-c:b.__super__.duration.apply(this,arguments)-c},b.prototype.currentTime=function(a){return void 0!==a?b.__super__.currentTime.call(this,a+c)-c:b.__super__.currentTime.apply(this,arguments)-c},b.prototype.remainingTime=function(){var a=this.currentTime();return c>a&&(a=0),this.duration()-a},b.prototype.startOffset=function(){return c},b.prototype.endOffset=function(){return d>0?d:this.duration()},this.on("timeupdate",function(){var a=this.currentTime();0>a&&(this.currentTime(0),this.play()),d>0&&a>d-c&&(this.currentTime(d-c),this.pause())}),this};a.VERSION="0.0.0",window.vjsoffset=a,window.videojs.plugin("offset",a)}).call(this);