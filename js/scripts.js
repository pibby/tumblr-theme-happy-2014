/*!
  [be]Lazy.js - v1.1.1 - 2013.12.27
  A lazy loading and multi-serving image script
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
var Blazy=function(c,h){function k(a){if(!h.querySelectorAll){var d=h.createStyleSheet();h.querySelectorAll=function(a,b,c,f,g){g=h.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(c=a.length;c--;){d.addRule(a[c],"k:v");for(f=g.length;f--;)g[f].currentStyle.k&&b.push(g[f]);d.removeRule(0)}return b}}a=a||{};b.src=a.src||"data-src";b.multi=a.multi||!1;b.error=a.error||!1;b.offset=a.offset||100;b.success=a.success||!1;b.selector=a.selector||".b-lazy";b.container=a.container?h.querySelectorAll(a.container):!1;b.errorClass=a.errorClass||"b-error";b.successClass=a.successClass||"b-loaded";q=b.src;f=t(u,20);r=t(v,50);v();m(b.multi,function(a){if(a.width>=c.screen.width)return q=a.src,!1});w()}function u(){for(var a=0;a<g;a++){var d=l[a],e=-1!==(" "+d.className+" ").indexOf(" "+b.successClass+" "),d=d.getBoundingClientRect(),c=x+b.offset;if(0<=d.left&&d.left<=y+b.offset&&(0<=d.top&&d.top<=c||d.bottom<=c&&d.bottom>=0-b.offset)||e)e||z(l[a]),l.splice(a,1),g-=1,a--}0===g&&k.prototype.destroy()}function z(a){if(0<a.offsetWidth&&0<a.offsetHeight){var d=a.getAttribute(q)||a.getAttribute(b.src);if(d){var e=new Image;m(b.multi,function(b){a.removeAttribute(b.src)});a.removeAttribute(b.src);e.onerror=function(){b.error&&b.error(a,"invalid");a.className=a.className+" "+b.errorClass};e.onload=function(){a.parent?a.parent.replaceChild(e,a):a.src=d;a.className=a.className+" "+b.successClass;b.success&&b.success(a)};e.src=d}else b.error&&b.error(a,"missing"),a.className=a.className+" "+b.errorClass}}function A(a){a=h.querySelectorAll(a);for(var b=g=a.length;b--;l.unshift(a[b]));}function v(){x=c.innerHeight||h.documentElement.clientHeight;y=c.innerWidth||h.documentElement.clientWidth}function w(){A(b.selector);s&&(s=!1,b.container&&m(b.container,function(a){n(a,"scroll",f)}),n(c,"scroll",f),n(c,"resize",f),n(c,"resize",r));u()}function n(a,b,e){a.attachEvent?a.attachEvent&&a.attachEvent("on"+b,e):a.addEventListener(b,e,!1)}function p(a,b,e){a.detachEvent?a.detachEvent&&a.detachEvent("on"+b,e):a.removeEventListener(b,e,!1)}function m(a,b){if(a&&b)for(var e=a.length,c=0;c<e&&!1!==b(a[c],c);c++);}function t(a,b){var c=0;return function(){var f=+new Date;f-c<b||(c=f,a.apply(this,arguments))}}var q,b={},y,x,s=!0,g=0,l=[],f,r;k.prototype.revalidate=function(){w()};k.prototype.load=function(a){z(a)};k.prototype.destroy=function(){s=!0;b.container&&m(b.container,function(a){p(a,"scroll",f)});p(c,"scroll",f);p(c,"resize",f);p(c,"resize",r);g=0;l.length=0};return k}(window,document);
/**
 * photoset-grid - v1.0.0
 * 2013-03-07
 * jQuery plugin to arrange images into a flexible grid
 * http://stylehatch.github.com/photoset-grid/
 *
 * Copyright 2013 Jonathan Moore - Style Hatch
 */
(function(t,i,s,e){"use strict";function o(i,s){this.element=i,this.options=t.extend({},a,s),this._defaults=a,this._name=n,this.init()}var n="photosetGrid",a={width:"100%",gutter:"0px",highresLinks:!1,lowresWidth:500,rel:"",onInit:function(){},onComplete:function(){}};o.prototype={init:function(){this.options.onInit(),this._setupRows(this.element,this.options),this._setupColumns(this.element,this.options)},_callback:function(){this.options.onComplete()},_setupRows:function(i,s){if(s.layout)this.layout=s.layout;else if(t(i).attr("data-layout"))this.layout=t(i).attr("data-layout");else{for(var e="",o=1,n=0;t(i).find("img").length>n;n++)e+=""+o;this.layout=e}this.rows=this.layout.split("");for(var a in this.rows)this.rows[a]=parseInt(this.rows[a],10);var h=t(i).find("img"),r=0;t.each(this.rows,function(t,i){var s=r,e=r+i;h.slice(s,e).wrapAll('<div class="photoset-row cols-'+i+'"></div>'),r=e}),t(i).find(".photoset-row:not(:last-child)").css({"margin-bottom":s.gutter})},_setupColumns:function(s,e){var o=this,n=function(){function o(){var i=""+t(s).width();i!==t(s).attr("data-width")&&(n.each(function(){var i=t(this).find("img:eq(0)");t(this).find("img").each(function(){var s=t(this);s.height()<i.height()&&(i=t(this)),s.width()>e.lowresWidth&&s.attr("data-highres")&&s.attr("src",s.attr("data-highres"))});var s=i.height(),o=Math.floor(.025*s);t(this).height(s-o),t(this).find("img").each(function(){var i=.5*(s-t(this).height())+"px";t(this).css({"margin-top":i})})}),t(s).attr("data-width",i))}var n=t(s).find(".photoset-row"),a=t(s).find("img");e.highresLinks?(a.each(function(){var i;i=t(this).attr("data-highres")?t(this).attr("data-highres"):t(this).attr("src"),t(this).wrapAll('<a href="'+i+'" class="photoset-cell highres-link" />')}),e.rel&&a.parent().attr("rel",e.rel)):a.each(function(){t(this).wrapAll('<div class="photoset-cell" />')});var h=t(s).find(".photoset-cell"),r=t(s).find(".cols-1 .photoset-cell"),l=t(s).find(".cols-2 .photoset-cell"),c=t(s).find(".cols-3 .photoset-cell"),d=t(s).find(".cols-4 .photoset-cell"),f=t(s).find(".cols-5 .photoset-cell");t(s).css({width:e.width}),n.css({clear:"left",display:"block",overflow:"hidden"}),h.css({"float":"left",display:"block","line-height":"0","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.css({width:"100%",height:"auto"}),r.css({width:"100%"}),l.css({width:"50%"}),c.css({width:"33.3%"}),d.css({width:"25%"}),f.css({width:"20%"});var u=parseInt(e.gutter,10);t(s).find(".photoset-cell:not(:last-child)").css({"padding-right":u/2+"px"}),t(s).find(".photoset-cell:not(:first-child)").css({"padding-left":u/2+"px"}),o(),t(i).on("resize",function(){o()})};t(s).imagesLoaded(function(){n(),o._callback()})}},t.fn[n]=function(i){return this.each(function(){t.data(this,"plugin_"+n)||t.data(this,"plugin_"+n,new o(this,i))})};var h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.fn.imagesLoaded=function(i){function s(){var s=t(f),e=t(u);r&&(u.length?r.reject(c,s,e):r.resolve(c)),t.isFunction(i)&&i.call(a,c,s,e)}function o(t){n(t.target,"error"===t.type)}function n(i,e){i.src!==h&&-1===t.inArray(i,d)&&(d.push(i),e?u.push(i):f.push(i),t.data(i,"imagesLoaded",{isBroken:e,src:i.src}),l&&r.notifyWith(t(i),[e,c,t(f),t(u)]),c.length===d.length&&(setTimeout(s),c.unbind(".imagesLoaded",o)))}var a=this,r=t.isFunction(t.Deferred)?t.Deferred():0,l=t.isFunction(r.notify),c=a.find("img").add(a.filter("img")),d=[],f=[],u=[];return t.isPlainObject(i)&&t.each(i,function(t,s){"callback"===t?i=s:r&&r[t](s)}),c.length?c.bind("load.imagesLoaded error.imagesLoaded",o).each(function(i,s){var o=s.src,a=t.data(s,"imagesLoaded");return a&&a.src===o?(n(s,a.isBroken),e):s.complete&&s.naturalWidth!==e?(n(s,0===s.naturalWidth||0===s.naturalHeight),e):((s.readyState||s.complete)&&(s.src=h,s.src=o),e)}):s(),r?r.promise(a):a};var r,l,c,d=t.event,f={_:0},u=0;r=d.special.throttledresize={setup:function(){t(this).on("resize",r.handler)},teardown:function(){t(this).off("resize",r.handler)},handler:function(i,s){var e=this,o=arguments;l=!0,c||(setInterval(function(){u++,(u>r.threshold&&l||s)&&(i.type="throttledresize",d.dispatch.apply(e,o),l=!1,u=0),u>9&&(t(f).stop(),c=!1,u=0)},30),c=!0)},threshold:0}})(jQuery,window,document);
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
              width: 481, // max-width
              src: 'data-src-small'
         },
         {
              width: 801, // max-width
              src: 'data-src-medium'
         },
         {
              width: 2560, // max-width
              src: 'data-src-large'
         }]
    });
})();
// Responsive Photosets
$('.photoset-grid').photosetGrid({
  rel: $('.photoset-grid').attr('data-id'),
  gutter: '5px'
});
// Responsive Tumblr Videos
var videoWrappers = document.getElementsByClassName('post-video');
[].forEach.call( videoWrappers, function (el, i) {
	var width = el.getElementsByTagName('iframe')[0].width,
    height = el.getElementsByTagName('iframe')[0].height;
    el.style.paddingBottom = height / width * 100 + '%';
});