(function(e){e.fn.twentytwenty=function(t){var t=e.extend({default_offset_pct:.5,orientation:"horizontal",move_on_hover:false,is_wiggle:false,wiggle_timeout:1e3},t);return this.each(function(){function b(){function a(){if(r.hasClass("active")){clearInterval(f)}if(n>u){s=-1}if(n<-u){s=1}n+=o*s;pct=n+e;if(pct<0){pct=0}if(pct>1){pct=1}m(pct);if(n.toFixed(2)==0){i++}if(i>2){clearInterval(f)}}var e=t.default_offset_pct;var n=0;var i=0;var s=1;var o=.012;var u=.06;var f=setInterval(a,50)}var n=t.default_offset_pct;var r=e(this);var i=t.orientation;var s=i==="vertical"?"down":"left";var o=i==="vertical"?"up":"right";var u=t.move_on_hover;var a=t.is_wiggle;var f=t.wiggle_timeout;r.wrap("<div class='twentytwenty-wrapper twentytwenty-"+i+"'></div>");r.append("<div class='twentytwenty-overlay'></div>");var l=r.find("img:first");var c=r.find("img:last");r.append("<div class='twentytwenty-handle'></div>");var h=r.find(".twentytwenty-handle");h.append("<span class='twentytwenty-"+s+"-arrow'></span>");h.append("<span class='twentytwenty-"+o+"-arrow'></span>");r.addClass("twentytwenty-container");l.addClass("twentytwenty-before");c.addClass("twentytwenty-after");var p=r.find(".twentytwenty-overlay");p.append("<div class='twentytwenty-before-label'></div>");p.append("<div class='twentytwenty-after-label'></div>");var d=function(e){var t=l.width();var n=l.height();return{w:t+"px",h:n+"px",cw:e*t+"px",ch:e*n+"px"}};var v=function(e){if(i==="vertical"){l.css("clip","rect(0,"+e.w+","+e.ch+",0)")}else{l.css("clip","rect(0,"+e.cw+","+e.h+",0)")}r.css("height",e.h)};var m=function(e){var t=d(e);h.css(i==="vertical"?"top":"left",i==="vertical"?t.ch:t.cw);v(t)};e(window).on("resize.twentytwenty",function(e){m(n)});var g=0;var y=0;h.on("movestart",function(e){if((e.distX>e.distY&&e.distX<-e.distY||e.distX<e.distY&&e.distX>-e.distY)&&i!=="vertical"){e.preventDefault()}else if((e.distX<e.distY&&e.distX<-e.distY||e.distX>e.distY&&e.distX>-e.distY)&&i==="vertical"){e.preventDefault()}r.addClass("active");g=r.offset().left;offsetY=r.offset().top;y=l.width();imgHeight=l.height()});h.on("moveend",function(e){if(!u)r.removeClass("active")});h.on("move",function(e){if(r.hasClass("active")){n=i==="vertical"?(e.pageY-offsetY)/imgHeight:(e.pageX-g)/y;if(n<0){n=0}if(n>1){n=1}m(n)}});r.find("img").on("mousedown",function(e){e.preventDefault()});if(u){r.on("mouseenter",function(e){r.addClass("active");g=r.offset().left;offsetY=r.offset().top;y=l.width();imgHeight=l.height()});r.on("mouseleave",function(e){r.removeClass("active")});r.on("mousemove",function(e){if(r.hasClass("active")){n=i==="vertical"?(e.pageY-offsetY)/imgHeight:(e.pageX-g)/y;if(n<0){n=0}if(n>1){n=1}m(n)}})}e(window).trigger("resize.twentytwenty");if(a){setTimeout(b,f)}})}})(jQuery)