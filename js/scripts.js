/*!
  [be]Lazy.js - v1.1.1 - 2013.12.27
  A lazy loading and multi-serving image script
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
var Blazy=function(c,h){function k(a){if(!h.querySelectorAll){var d=h.createStyleSheet();h.querySelectorAll=function(a,b,c,f,g){g=h.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(c=a.length;c--;){d.addRule(a[c],"k:v");for(f=g.length;f--;)g[f].currentStyle.k&&b.push(g[f]);d.removeRule(0)}return b}}a=a||{};b.src=a.src||"data-src";b.multi=a.multi||!1;b.error=a.error||!1;b.offset=a.offset||100;b.success=a.success||!1;b.selector=a.selector||".b-lazy";b.container=a.container?h.querySelectorAll(a.container):!1;b.errorClass=a.errorClass||"b-error";b.successClass=a.successClass||"b-loaded";q=b.src;f=t(u,20);r=t(v,50);v();m(b.multi,function(a){if(a.width>=c.screen.width)return q=a.src,!1});w()}function u(){for(var a=0;a<g;a++){var d=l[a],e=-1!==(" "+d.className+" ").indexOf(" "+b.successClass+" "),d=d.getBoundingClientRect(),c=x+b.offset;if(0<=d.left&&d.left<=y+b.offset&&(0<=d.top&&d.top<=c||d.bottom<=c&&d.bottom>=0-b.offset)||e)e||z(l[a]),l.splice(a,1),g-=1,a--}0===g&&k.prototype.destroy()}function z(a){if(0<a.offsetWidth&&0<a.offsetHeight){var d=a.getAttribute(q)||a.getAttribute(b.src);if(d){var e=new Image;m(b.multi,function(b){a.removeAttribute(b.src)});a.removeAttribute(b.src);e.onerror=function(){b.error&&b.error(a,"invalid");a.className=a.className+" "+b.errorClass};e.onload=function(){a.parent?a.parent.replaceChild(e,a):a.src=d;a.className=a.className+" "+b.successClass;b.success&&b.success(a)};e.src=d}else b.error&&b.error(a,"missing"),a.className=a.className+" "+b.errorClass}}function A(a){a=h.querySelectorAll(a);for(var b=g=a.length;b--;l.unshift(a[b]));}function v(){x=c.innerHeight||h.documentElement.clientHeight;y=c.innerWidth||h.documentElement.clientWidth}function w(){A(b.selector);s&&(s=!1,b.container&&m(b.container,function(a){n(a,"scroll",f)}),n(c,"scroll",f),n(c,"resize",f),n(c,"resize",r));u()}function n(a,b,e){a.attachEvent?a.attachEvent&&a.attachEvent("on"+b,e):a.addEventListener(b,e,!1)}function p(a,b,e){a.detachEvent?a.detachEvent&&a.detachEvent("on"+b,e):a.removeEventListener(b,e,!1)}function m(a,b){if(a&&b)for(var e=a.length,c=0;c<e&&!1!==b(a[c],c);c++);}function t(a,b){var c=0;return function(){var f=+new Date;f-c<b||(c=f,a.apply(this,arguments))}}var q,b={},y,x,s=!0,g=0,l=[],f,r;k.prototype.revalidate=function(){w()};k.prototype.load=function(a){z(a)};k.prototype.destroy=function(){s=!0;b.container&&m(b.container,function(a){p(a,"scroll",f)});p(c,"scroll",f);p(c,"resize",f);p(c,"resize",r);g=0;l.length=0};return k}(window,document);
/*!
    --------------------------------
    PXU Photoset Extended
    --------------------------------
    + https://github.com/PixelUnion/Extended-Tumblr-Photoset
    + http://pixelunion.net
    + Version 1.8.0
    + Copyright 2013 Pixel Union
    + Licensed under the MIT license
*/
(function(a){a.fn.pxuPhotoset=function(b,f){var e={lightbox:true,highRes:true,rounded:"corners",borderRadius:"5px",exif:true,captions:true,gutter:"10px",photoset:".photo-slideshow",photoWrap:".photo-data",photo:".pxu-photo"};var c=a.extend(e,b);if(c.lightbox){a(".tumblr-box").on("click",function(i){i.preventDefault();var h=a(this);var g=h.parents(c.photoset).attr("id");d(h,g)});var d=function(h,j){var g=h.parents(c.photoWrap).find(c.photo+" img").data("count");var i=[];a("#"+j).find(c.photoWrap).each(function(){var m=a(this).find(c.photo+" img");var l=m.data("width");var k=m.data("height");var n=m.attr("src");var o=m.data("highres");var p={width:l,height:k,low_res:n,high_res:o};i.push(p)});Tumblr.Lightbox.init(i,g)}}a(c.photoWrap).on("mouseenter",function(){a(this).find(".icons").css("visibility","visible")}).on("mouseleave",function(){a(this).find(".icons").css("visibility","hidden")});a("span.info").on("mouseenter",function(){var g=a(this);var h=g.children(".pxu-data");h.css("display","block").stop(true,false).animate({opacity:1},200)});a("span.info").on("mouseleave",function(){var g=a(this);var h=g.children(".pxu-data");h.stop(true,false).animate({opacity:0},200,function(){a(this).css("display","none")})});return this.each(function(){var r=a(this);var g=r.data("layout");var n=JSON.stringify(g).split("");var s=n.length;var w=r.find(c.photo+" img");for(l=0;l<w.length;l++){var k=w.eq(l);k.attr("data-count",l+1)}var t=[];for(l=1;l<=s;++l){var v=0;for(var h=0;h<l;++h){var u=parseInt(n[h],10);v+=u}var m=parseInt(n[l-1],10);t[l]=Array(l,m,v)}for(var l=1;l<=s;l++){var q;if(l===1){q=0}else{q=t[l-1][2]}r.find(c.photoWrap).slice(q,t[l][2]).addClass("count-"+t[l][1]).wrapAll('<div class="row clearit" />')}if(c.gutter){a(this).find(".row").css("margin-bottom",c.gutter);a(this).find(c.photoWrap+":not(:first-child) "+c.photo+" img").css("margin-left",c.gutter)}Array.min=function(i){return Math.min.apply(Math,i)};function j(A){var L=A.find(".row");var F=L.length;var E;var D;var H;var C;var p;for(var K=0;K<F;K++){currentRow=L.eq(K);images=currentRow.find(c.photoWrap+" img");photoCount=images.length;if(photoCount>1){var J=currentRow.find(c.photo+" img").map(function(){E=a(this);D=E.data("width");H=E.data("height");C=E.parent().width();p=(C/D)*H;E.data("new-height",p);return p}).get();var z=Array.min(J);currentRow.height(z-1).find(c.photo).height(z-1);for(l=0;l<photoCount;l++){var G=images.eq(l);var I=G.data("new-height");var i=z;if(I>i){var B=(I-i)/2;G.css("margin-top",-B)}}}}}j(r);a(window).resize(function(){j(r)});if(c.exif&&c.captions){r.find(c.photoWrap).each(function(){var F=a(this).find("img");var p;var z;if(F.hasClass("exif-yes")){var E=F.data("camera")||"-";var A=F.data("iso")||"-";var B=F.data("aperture")||"-";var i=F.data("exposure")||"-";var C=F.data("focal")||"-";p='<table class="exif"><tr><td colspan="2"><span class="label">Camera</span><br>'+E+'</td></tr><tr><td><span class="label">ISO</span><br>'+A+'</td><td><span class="label">Aperture</span><br>'+B+'</td></tr><tr><td><span class="label">Exposure</span><br>'+i+'</td><td><span class="label">Focal Length</span><br>'+C+"</td></tr></table>"}else{p=""}if(F.hasClass("caption-yes")){var D=F.data("caption");z='<p class="pxu-caption">'+D+"</p>"}else{z=""}if(z!==""||p!==""){a(this).find(".info").append('<div class="pxu-data">'+z+p+'<span class="arrow-down"></span></div>');if(p===""){a(this).find(".pxu-data").addClass("caption-only")}a(this).find("span.info").css("display","block")}})}else{if(c.exif){r.find(c.photoWrap).each(function(){var C=a(this).find("img");if(C.hasClass("exif-yes")){var p=C.data("camera")||"-";var i=C.data("iso")||"-";var D=C.data("aperture")||"-";var B=C.data("exposure")||"-";var A=C.data("focal")||"-";var z='<table class="exif"><tr><td colspan="2"><span class="label">Camera</span><br>'+p+'</td></tr><tr><td><span class="label">ISO</span><br>'+i+'</td><td><span class="label">Aperture</span><br>'+D+'</td></tr><tr><td><span class="label">Exposure</span><br>'+B+'</td><td><span class="label">Focal Length</span><br>'+A+'</td></tr></table><span class="arrow-down"></span>';a(this).find(".info").append('<div class="pxu-data">'+z+"</div>");a(this).find("span.info").css("display","block")}})}else{if(c.captions){r.find(c.photoWrap).each(function(){var i=a(this).find("img");if(i.hasClass("caption-yes")){var p=i.data("caption");var z='<p class="pxu-caption" style="margin:0;">'+p+"</p>";a(this).find(".info").append('<div class="pxu-data caption-only">'+z+'<span class="arrow-down"></span></div>');a(this).find("span.info").css("display","block")}})}}}if(c.highRes){r.find(c.photoWrap).each(function(){var i=a(this).find(c.photo+" img");var p=i.data("highres");i.attr("src",p)})}if(c.rounded=="corners"){var y=r.find(".row");if(s==1){y.find(c.photoWrap+":first-child "+c.photo).css({borderRadius:c.borderRadius+" 0 0 "+c.borderRadius});y.find(c.photoWrap+":last-child "+c.photo).css({borderRadius:"0 "+c.borderRadius+" "+c.borderRadius+" 0"})}else{for(var x=0;x<s;x++){var o;if(x===0){o=y.eq(x).find(c.photo).size();if(o==1){y.eq(x).find(c.photo).css({borderRadius:c.borderRadius+" "+c.borderRadius+" 0 0"})}else{y.eq(x).find(c.photoWrap+":first-child "+c.photo).css({borderRadius:c.borderRadius+" 0 0 0"});y.eq(x).find(c.photoWrap+":last-child "+c.photo).css({borderRadius:"0 "+c.borderRadius+" 0 0"})}}if(x==s-1){o=y.eq(x).find(c.photo).size();if(o==1){y.eq(x).find(c.photo).css({borderRadius:"0 0 "+c.borderRadius+" "+c.borderRadius})}else{y.eq(x).find(c.photoWrap+":first-child "+c.photo).css({borderRadius:"0 0 0 "+c.borderRadius});y.eq(x).find(c.photoWrap+":last-child "+c.photo).css({borderRadius:"0 0 "+c.borderRadius+" 0"})}}}}}if(c.rounded=="all"){r.find(c.photo).css({borderRadius:c.borderRadius})}if(!c.rounded){r.find(c.photo).css({borderRadius:0})}r.addClass("processed");if(typeof f=="function"){f.call(this)}})}})(jQuery);
// Toggle mobile navigation
$('#mobilenav').on('click', function (e) {
    e.preventDefault();
    $('#nav').toggle('fast');
    $(this).toggleClass('expanded');
    return false;
});
// Lazy load images + responsive img based on screen width
;(function() {
    // Initialize
    var bLazy = new Blazy({
        selector: 'img', // all images
        multi: [{
              width: 330, // max-width
              src: 'data-src-small'
         },
         {
              width: 800, // max-width
              src: 'data-src-medium'
         },
         {
              width: 2560, // max-width
              src: 'data-src-large'
         }]
    });
})();
// Responsive Photosets
//$('.photoset-grid').photosetGrid();
$('.photo-slideshow').pxuPhotoset({
    'ligthbox'  : true, // uses the default Tumblr lightbox, change to false to use your own
    'highRes'   : true, // will use high res images
    'gutter'    : '10px', // spacing between the images
    'photoset'  : '.photo-slideshow', // photoset wrapper
    'photoWrap' : '.photo-data', // photo data wrapper (includes photo, icons + exif)
    'photo'     : '.pxu-photo' // photo wrap (includes photo only)
});
// Add titles to photos, photosets, video, audio
$(".post").each(
    function(){
    var a=$(this).find(".post-inner > p > strong").first().text();
    if (a != ""){
        var b=$(this).find(".date > a").attr("href");
        $(this).find("div.post-inner").prepend("<h1><a href='"+b+"'>"+a+"</a></h1>"); 
        $(this).find(".post-inner > p").first().remove();
    }
});