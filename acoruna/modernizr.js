/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-details-emoji-flexbox-hidden-svg-time-addtest-setclasses-testprop-teststyles !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),x.push((r?"":"no-")+a.join("-"))}}function o(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?T.className.baseVal=t:T.className=t)}function s(e,t){if("object"==typeof e)for(var n in e)_(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e,t){return e-1===t||e===t||e+1===t}function d(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function c(e,n,i,r){var o,s,l,d,f="modernizr",c=a("div"),p=u();if(parseInt(i,10))for(;i--;)l=a("div"),l.id=r?r[i]:f+(i+1),c.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+f,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",d=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),s=n(c,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=d,T.offsetHeight):c.parentNode.removeChild(c),!!s}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+p(t[r])+":"+i+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,r,o){function s(){u&&(delete P.style,delete P.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var l=h(e,r);if(!i(l,"undefined"))return l}for(var u,c,p,m,v,g=["modernizr","tspan","samp"];!P.style&&g.length;)u=!0,P.modElem=a(g.shift()),P.style=P.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],v=P.style[m],d(m,"-")&&(m=f(m)),P.style[m]!==n){if(o||i(r,"undefined"))return s(),"pfx"==t?m:!0;try{P.style[m]=r}catch(y){}if(P.style[m]!=v)return s(),"pfx"==t?m:!0}return s(),!1}function v(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?v(r,n||t):r);return!1}function y(e,t,n,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?m(a,t,r,o):(a=(e+" "+j.join(s+" ")+s).split(" "),g(a,t,n))}function w(e,t,i){return y(e,n,n,t,i)}var x=[],C=[],S={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var _,T=t.documentElement,b="svg"===T.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;_=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),S._l={},S.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=s}),Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("hidden","hidden"in a("a")),Modernizr.addTest("time","valueAsDate"in a("time")),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var t=e.devicePixelRatio||1,n=12*t,i=a("canvas"),r=i.getContext("2d");return r.fillStyle="#f00",r.textBaseline="top",r.font="32px Arial",r.fillText("🐨",0,0),0!==r.getImageData(n,n,1,1).data[0]});var z=S.testStyles=c;z("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),i=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",i==n)}),z("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],i=t.childNodes[1],r=t.childNodes[0],o=parseInt((i.offsetWidth-i.clientWidth)/2,10),s=r.clientWidth/100,a=r.clientHeight/100,d=parseInt(50*Math.max(s,a),10),f=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",l(d,f)||l(d,f-o))},3),z("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],i=t.childNodes[1],r=t.childNodes[0],o=parseInt((i.offsetWidth-i.clientWidth)/2,10),s=r.clientWidth/100,a=r.clientHeight/100,d=parseInt(50*Math.min(s,a),10),f=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvminunit",l(d,f)||l(d,f-o))},3),z("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),i=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",i==n)});var N={elem:a("modernizr")};Modernizr._q.push(function(){delete N.elem});var P={style:N.elem.style};Modernizr._q.unshift(function(){delete P.style});var I=(S.testProp=function(e,t,i){return m([e],n,t,i)},"Moz O ms Webkit"),E=S._config.usePrefixes?I.split(" "):[];S._cssomPrefixes=E;var j=S._config.usePrefixes?I.toLowerCase().split(" "):[];S._domPrefixes=j,S.testAllProps=y,S.testAllProps=w,Modernizr.addTest("flexbox",w("flexBasis","1px",!0)),Modernizr.addTest("details",function(){var e,t=a("details");return"open"in t?(z("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e):!1}),r(),o(x),delete S.addTest,delete S.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);