!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(i,a){for(var r,s,c=0,u=[];c<i.length;c++)s=i[c],o[s]&&u.push.apply(u,o[s]),o[s]=0;for(r in a)t[r]=a[r];for(n&&n(i,a);u.length;)u.shift().call(null,e)};var i={},o={1:0};return e.e=function(t,n){if(0===o[t])return n.call(null,e);if(void 0!==o[t])o[t].push(n);else{o[t]=[n];var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.src=e.p+"js/"+t+".js",i.appendChild(a)}},e.m=t,e.c=i,e.p="",e(0)}([function(t,e,n){n(19),n(1),n(6),n(3)(function(t){n(10)})},function(t,e,n){!function(t,e,n,i,o,a,r){t.GoogleAnalyticsObject=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,a=e.createElement(n),r=e.getElementsByTagName(n)[0],a.async=1,a.src=i,r.parentNode.insertBefore(a,r)}(window,document,"script","//www.google-analytics.com/analytics.js","ga");var i=window.ga;i("create","UA-46921629-1","webpack.github.io"),i("send","pageview"),t.exports=function(){return window.ga.apply(window.ga,arguments)}},function(t,e){t.exports=function(t,e){var n=new XMLHttpRequest;n.open("GET","//github-wiki.herokuapp.com/webpack/docs/"+t,!0),n.onreadystatechange=function(){return 4===n.readyState?200!==n.status?e(new Error("Statuscode is "+n.status)):e(null,n.responseText):void 0},n.send(null)}},function(t,e){/*!
	 * contentloaded.js
	 *
	 * Author: Diego Perini (diego.perini at gmail.com)
	 * Summary: cross-browser wrapper for DOMContentLoaded
	 * Updated: 20101020
	 * License: MIT
	 * Version: 1.2
	 *
	 * URL:
	 * http://javascript.nwbox.com/ContentLoaded/
	 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	 *
	 */
function n(t,e){var n=!1,i=!0,o=t.document,a=o.documentElement,r=o.addEventListener?"addEventListener":"attachEvent",s=o.addEventListener?"removeEventListener":"detachEvent",c=o.addEventListener?"":"on",u=function(i){("readystatechange"!=i.type||"complete"==o.readyState)&&(("load"==i.type?t:o)[s](c+i.type,u,!1),!n&&(n=!0)&&e.call(t,i.type||i))},l=function(){try{a.doScroll("left")}catch(t){return void setTimeout(l,50)}u("poll")};if("complete"==o.readyState)e.call(t,"lazy");else{if(o.createEventObject&&a.doScroll){try{i=!t.frameElement}catch(h){}i&&l()}o[r](c+"DOMContentLoaded",u,!1),o[r](c+"readystatechange",u,!1),t[r](c+"load",u,!1)}}t.exports=function(t){n(window,t)}},function(t,e){t.exports=function(t){return t?t.toLowerCase().replace(/[^a-z0-9\.]/g," "):t}},,function(t,e){window.disqus_shortname="webpack";var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="//"+window.disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(n),e.update=function i(t){return"undefined"==typeof DISQUS?void setTimeout(function(){i(t)},1e3):void DISQUS.reset({reload:!0,config:function(){this.page.identifier=t,this.page.url=location+"",this.page.title=document.title}})}},,,,function(t,e,n){function i(t){return t.metaKey||t.shiftKey||t.altKey||t.ctrlKey}function o(){document.body.addEventListener("click",function(t){if("A"===t.target.tagName&&!i(t)&&1===t.which&&p.test(t.target.getAttribute("href"))){var e=t.target.getAttribute("href");p.lastIndex=0;var n=p.exec(e)[1];document.title=h(n),v=n,history.pushState(null,null,e),l(n,!1),t.preventDefault()}},!1)}function a(){if(document.querySelectorAll)for(var t=document.querySelectorAll('a[href$=".html"]'),e=0;e<t.length;e++){var n=t[e],i=n.getAttribute("href");if(n.classList&&p.test(i)){p.lastIndex=0;var o=p.exec(i)[1];v===o^n.classList.contains("active")&&n.classList.toggle("active")}}}function r(t){var e=/\/([a-z0-9\-\.]+)\.html$/i.exec(location.pathname);if(e){var n=e[1];(n!==v||t)&&(v=n,l(n,t))}}function s(){var t=n(1),e=window.location.protocol+"//"+window.location.hostname+window.location.pathname+window.location.search;t("set","location",e),t("set","title",document.title),t("send","pageview")}function c(){var t=n(6);t.update(v)}function u(t,e){Array.prototype.forEach.call(g,function(e){e.setAttribute("href",w.replace(/XXX/g,t))}),_.innerHTML=h(t),m.innerHTML=e}function l(t,e){var i=y.get(t);return i?(u(t,i),e||(window.location.hash||window.scrollTo(0,0),s(),c()),void a()):(!e&&document.body.classList&&document.body.classList.add("loading"),d(t,function(i,r){function l(n){y.set(t,n),document.body.classList&&document.body.classList.remove("loading"),u(t,n),e||(window.location.hash||window.scrollTo(0,0),s(),c()),e&&o(),a()}if(i){if(e)return void(document.body.classList&&document.body.classList.remove("loading"));window.location.reload()}else n.e(0,function(t){var e=[t(8)];(function(t){l(t(r))}).apply(null,e)})}),void n.e(0,function(){[n(8)]}))}var h=n(4),d=n(2),f=n(22),p=/^([a-z0-9\-\.]+)\.html$/i,m=document.getElementById("wiki"),_=document.getElementById("wikititle"),g=document.getElementsByClassName("wikieditlink"),y=f({max:10,maxAge:3e5}),v="";window.addEventListener("popstate",function(){r(!1)}),a(),r(!0);var w="https://github.com/webpack/docs/wiki/XXX/_edit"},,,,,,,,,function(t,e){},,,function(t,e){!function(){function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function n(){return 1}function i(t){return this instanceof i?("number"==typeof t&&(t={max:t}),t||(t={}),this._max=t.max,(!this._max||"number"!=typeof this._max||this._max<=0)&&(this._max=1/0),this._lengthCalculator=t.length||n,"function"!=typeof this._lengthCalculator&&(this._lengthCalculator=n),this._allowStale=t.stale||!1,this._maxAge=t.maxAge||null,this._dispose=t.dispose,void this.reset()):new i(t)}function o(t,e,n){var i=t._cache[e];return i&&(a(t,i)?(u(t,i),t._allowStale||(i=void 0)):n&&r(t,i),i&&(i=i.value)),i}function a(t,e){if(!e||!e.maxAge&&!t._maxAge)return!1;var n=!1,i=Date.now()-e.now;return n=e.maxAge?i>e.maxAge:t._maxAge&&i>t._maxAge}function r(t,e){c(t,e),e.lu=t._mru++,t._lruList[e.lu]=e}function s(t){for(;t._lru<t._mru&&t._length>t._max;)u(t,t._lruList[t._lru])}function c(t,e){for(delete t._lruList[e.lu];t._lru<t._mru&&!t._lruList[t._lru];)t._lru++}function u(t,e){e&&(t._dispose&&t._dispose(e.key,e.value),t._length-=e.length,t._itemCount--,delete t._cache[e.key],c(t,e))}function l(t,e,n,i,o,a){this.key=t,this.value=e,this.lu=n,this.length=i,this.now=o,a&&(this.maxAge=a)}"object"==typeof t&&t.exports?t.exports=i:this.LRUCache=i,Object.defineProperty(i.prototype,"max",{set:function(t){(!t||"number"!=typeof t||0>=t)&&(t=1/0),this._max=t,this._length>this._max&&s(this)},get:function(){return this._max},enumerable:!0}),Object.defineProperty(i.prototype,"lengthCalculator",{set:function(t){if("function"!=typeof t){this._lengthCalculator=n,this._length=this._itemCount;for(var e in this._cache)this._cache[e].length=1}else{this._lengthCalculator=t,this._length=0;for(var e in this._cache)this._cache[e].length=this._lengthCalculator(this._cache[e].value),this._length+=this._cache[e].length}this._length>this._max&&s(this)},get:function(){return this._lengthCalculator},enumerable:!0}),Object.defineProperty(i.prototype,"length",{get:function(){return this._length},enumerable:!0}),Object.defineProperty(i.prototype,"itemCount",{get:function(){return this._itemCount},enumerable:!0}),i.prototype.forEach=function(t,e){e=e||this;for(var n=0,i=this._itemCount,o=this._mru-1;o>=0&&i>n;o--)if(this._lruList[o]){n++;var r=this._lruList[o];a(this,r)&&(u(this,r),this._allowStale||(r=void 0)),r&&t.call(e,r.value,r.key,this)}},i.prototype.keys=function(){for(var t=new Array(this._itemCount),e=0,n=this._mru-1;n>=0&&e<this._itemCount;n--)if(this._lruList[n]){var i=this._lruList[n];t[e++]=i.key}return t},i.prototype.values=function(){for(var t=new Array(this._itemCount),e=0,n=this._mru-1;n>=0&&e<this._itemCount;n--)if(this._lruList[n]){var i=this._lruList[n];t[e++]=i.value}return t},i.prototype.reset=function(){if(this._dispose&&this._cache)for(var t in this._cache)this._dispose(t,this._cache[t].value);this._cache=Object.create(null),this._lruList=Object.create(null),this._mru=0,this._lru=0,this._length=0,this._itemCount=0},i.prototype.dump=function(){return this._cache},i.prototype.dumpLru=function(){return this._lruList},i.prototype.set=function(t,n,i){i=i||this._maxAge;var o=i?Date.now():0;if(e(this._cache,t))return this._dispose&&this._dispose(t,this._cache[t].value),this._cache[t].now=o,this._cache[t].maxAge=i,this._cache[t].value=n,this.get(t),!0;var a=this._lengthCalculator(n),r=new l(t,n,this._mru++,a,o,i);return r.length>this._max?(this._dispose&&this._dispose(t,n),!1):(this._length+=r.length,this._lruList[r.lu]=this._cache[t]=r,this._itemCount++,this._length>this._max&&s(this),!0)},i.prototype.has=function(t){if(!e(this._cache,t))return!1;var n=this._cache[t];return a(this,n)?!1:!0},i.prototype.get=function(t){return o(this,t,!0)},i.prototype.peek=function(t){return o(this,t,!1)},i.prototype.pop=function(){var t=this._lruList[this._lru];return u(this,t),t||null},i.prototype.del=function(t){u(this,this._cache[t])}}()}]);