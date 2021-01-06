(()=>{var e={540:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,'#comment-holder{font-size:14px}#comment-holder #top-ra{margin:0;padding:0;list-style:none}.comment .thread-chrome{list-style:none}.comment .thread-chrome.thread-collapsed{display:none}.comment .comment-replies{margin:1rem 0}.comment .comment-replies .avatar-image-container{margin-bottom:0}.comment .comment-replies .continue{margin-left:3rem}.comment .comment-block{margin-left:3rem;background-color:var(--bg-1);padding:1rem;border-radius:.3rem}.comment .comment-block .comment-header{margin-bottom:.5rem}.comment .comment-block .comment-header .user{font-weight:500;margin-right:.3rem;font-style:normal}.comment .comment-block .comment-header .user.icon.blog-author{display:inline-block;width:1em;height:1em;background:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="%2372abfe"><g><rect fill="none" height="24" width="24"/></g><g><path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z"/></g></svg>\') no-repeat scroll center transparent}.comment .comment-block .comment-header .datetime{font-style:italic}.comment .comment-block .comment-header .datetime a{color:var(--bg-7) !important;text-decoration:none !important}.comment .comment-block .comment-reply{margin-right:.3rem}.comment .comment-content{word-break:break-word}.comment .comment-content em{white-space:pre;background-color:var(--thead);color:var(--secondary);display:block;padding:1rem;overflow:auto;margin:.5rem -1rem;font-style:normal;font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}.comment .avatar-image-container{position:sticky;top:5rem;float:left;width:39px;height:39px;background-color:var(--bg-7);padding:2px;border-radius:10rem;margin-bottom:2.4rem}.comment .avatar-image-container img{border-radius:10rem}.comment .thread-toggle{margin-left:3rem;padding:1rem 0;display:block}.comment .thread-toggle .thread-arrow{width:1em;height:1em;display:inline-block}.comment .thread-toggle.thread-expanded .thread-arrow{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVR42mNgwAfKy8v/48I4FeA0AacVDFQBAP9wJkE/KhUMAAAAAElFTkSuQmCC) no-repeat scroll center transparent}.comment .thread-toggle.thread-collapsed .thread-arrow{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAJUlEQVR42mNgAILy8vL/DLgASBKnApgkVgXIkhgKiNKJ005s4gDLbCZBiSxfygAAAABJRU5ErkJggg==") no-repeat scroll center transparent}.comment .comment-replybox-single{margin:1rem 0}#comment-post-message{position:absolute;width:0;height:0;overflow:hidden}',""]);const l=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{"use strict";var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function a(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var m=a(d),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==m?(l[m].references++,l[m].updater(u)):l.push({identifier:d,updater:g(u,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var l=n.nc;l&&(o.nonce=l)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function m(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var l=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(l,a[t]):e.appendChild(l)}}function u(e,t,n){var o=n.css,r=n.media,l=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,f=0;function g(e,t){var n,o,r;if(t.singleton){var l=f++;n=h||(h=c(t)),o=m.bind(null,n,l,!1),r=m.bind(null,n,l,!0)}else n=c(t),o=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);l[r].references--}for(var c=i(e,t),s=0;s<n.length;s++){var d=a(n[s]);0===l[d].references&&(l[d].updater(),l.splice(d,1))}n=c}}}},557:e=>{e.exports=function(e){var t=[].forEach,n=[].some,o=document.body,r=!0,l=" ";function a(n,o){var r,c,s,d=o.appendChild((r=n,c=document.createElement("li"),s=document.createElement("a"),e.listItemClass&&c.setAttribute("class",e.listItemClass),e.onClick&&(s.onclick=e.onClick),e.includeHtml&&r.childNodes.length?t.call(r.childNodes,(function(e){s.appendChild(e.cloneNode(!0))})):s.textContent=r.textContent,s.setAttribute("href",e.basePath+"#"+r.id),s.setAttribute("class",e.linkClass+l+"node-name--"+r.nodeName+l+e.extraLinkClasses),c.appendChild(s),c));if(n.children.length){var m=i(n.isCollapsed);n.children.forEach((function(e){a(e,m)})),d.appendChild(m)}}function i(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),r=e.listClass+l+e.extraListClasses;return t&&(r+=l+e.collapsibleClass,r+=l+e.isCollapsedClass),o.setAttribute("class",r),o}function c(t){var n=0;return t!==document.querySelector(e.contentSelector&&null!=t)&&(n=t.offsetTop,e.hasInnerContainers&&(n+=c(t.offsetParent))),n}function s(t){return-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(l+e.isCollapsedClass).join(""),s(t.parentNode.parentNode)):t}return{enableTocAnimation:function(){r=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(r=!1)},render:function(e,t){var n=i(!1);t.forEach((function(e){a(e,n)}));var o=document.querySelector(e);if(null!==o)return o.firstChild&&o.removeChild(o.firstChild),0===t.length?o:o.appendChild(n)},updateToc:function(a){var i;i=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop,e.positionFixedSelector&&function(){var t;t=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=l+e.positionFixedClass):n.className=n.className.split(l+e.positionFixedClass).join("")}();var d,m=a;if(r&&null!==document.querySelector(e.tocSelector)&&m.length>0){n.call(m,(function(t,n){return c(t)>i+e.headingsOffset+10?(d=m[0===n?n:n-1],!0):n===m.length-1?(d=m[m.length-1],!0):void 0}));var u=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);t.call(u,(function(t){t.className=t.className.split(l+e.activeLinkClass).join("")}));var h=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);t.call(h,(function(t){t.className=t.className.split(l+e.activeListItemClass).join("")}));var f=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+d.nodeName+'[href="'+e.basePath+"#"+d.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g,"\\$1")+'"]');-1===f.className.indexOf(e.activeLinkClass)&&(f.className+=l+e.activeLinkClass);var g=f.parentNode;g&&-1===g.className.indexOf(e.activeListItemClass)&&(g.className+=l+e.activeListItemClass);var p=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);t.call(p,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=l+e.isCollapsedClass)})),f.nextSibling&&-1!==f.nextSibling.className.indexOf(e.isCollapsedClass)&&(f.nextSibling.className=f.nextSibling.className.split(l+e.isCollapsedClass).join("")),s(f.parentNode.parentNode)}}}}},340:e=>{e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1}},866:function(e,t,n){var o,r,l;r=[],void 0===(l="function"==typeof(o=function(e){"use strict";var t,o,r,l=n(340),a={},i={},c=n(557),s=n(620),d=n(693),m=!!(e&&e.document&&e.document.querySelector&&e.addEventListener);if("undefined"!=typeof window||m){var u=Object.prototype.hasOwnProperty;return i.destroy=function(){if(!a.skipRendering)try{document.querySelector(a.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+a.tocSelector)}a.scrollContainer&&document.querySelector(a.scrollContainer)?(document.querySelector(a.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(a.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(a.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1))},i.init=function(e){if(m&&(a=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)u.call(n,o)&&(e[o]=n[o])}return e}(l,e||{}),this.options=a,this.state={},a.scrollSmooth&&(a.duration=a.scrollSmoothDuration,a.offset=a.scrollSmoothOffset,i.scrollSmooth=n(764).initSmoothScrolling(a)),t=c(a),o=s(a),this._buildHtml=t,this._parseContent=o,i.destroy(),null!==(r=o.selectHeadings(a.contentSelector,a.headingSelector)))){var f=o.nestHeadingsArray(r).nest;a.skipRendering||t.render(a.tocSelector,f),this._scrollListener=h((function(e){t.updateToc(r),!a.disableTocScrollSync&&d(a);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(r),a.scrollEndCallback&&a.scrollEndCallback(e))}),a.throttleTimeout),this._scrollListener(),a.scrollContainer&&document.querySelector(a.scrollContainer)?(document.querySelector(a.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(a.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var g=null;return this._clickListener=h((function(e){a.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(r),g&&clearTimeout(g),g=setTimeout((function(){t.enableTocAnimation()}),a.scrollSmoothDuration)}),a.throttleTimeout),a.scrollContainer&&document.querySelector(a.scrollContainer)?document.querySelector(a.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},i.refresh=function(e){i.destroy(),i.init(e||this.options)},e.tocbot=i,i}function h(e,t,n){var o,r;return t||(t=250),function(){var l=n||this,a=+new Date,i=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout((function(){o=a,e.apply(l,i)}),t)):(o=a,e.apply(l,i))}}}(void 0!==n.g?n.g:this.window||this.global))?o.apply(t,r):o)||(e.exports=l)},620:e=>{e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function o(e){return+e.nodeName.split("H").join("")}function r(t){if(!(t instanceof window.HTMLElement))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;var n={id:t.id,children:[],nodeName:t.nodeName,headingLevel:o(t),textContent:e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim()};return e.includeHtml&&(n.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(n,t):n}return{nestHeadingsArray:function(o){return t.call(o,(function(t,o){var l=r(o);return l&&function(t,o){for(var l=r(t),a=l.headingLevel,i=o,c=n(i),s=a-(c?c.headingLevel:0);s>0;)(c=n(i))&&void 0!==c.children&&(i=c.children),s--;a>=e.collapseDepth&&(l.isCollapsed=!0),i.push(l)}(l,t.nest),t}),{nest:[]})},selectHeadings:function(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return document.querySelector(t).querySelectorAll(o)}catch(e){return console.warn("Element not found: "+t),null}}}}},764:(e,t)=>{t.initSmoothScrolling=function(e){document.documentElement.style;var t=e.duration,n=e.offset,o=location.hash?r(location.href):location.href;function r(e){return e.slice(0,e.lastIndexOf("#"))}document.body.addEventListener("click",(function(l){var a;"a"!==(a=l.target).tagName.toLowerCase()||!(a.hash.length>0||"#"===a.href.charAt(a.href.length-1))||r(a.href)!==o&&r(a.href)+"#"!==o||l.target.className.indexOf("no-smooth-scroll")>-1||"#"===l.target.href.charAt(l.target.href.length-2)&&"!"===l.target.href.charAt(l.target.href.length-1)||-1===l.target.className.indexOf(e.linkClass)||function(e,t){var n,o,r=window.pageYOffset,l={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},a=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),i="string"==typeof e?l.offset+(e?a&&a.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,c="function"==typeof l.duration?l.duration(i):l.duration;function s(e){o=e-n,window.scrollTo(0,l.easing(o,r,i,c)),o<c?requestAnimationFrame(s):(window.scrollTo(0,r+i),"function"==typeof l.callback&&l.callback())}requestAnimationFrame((function(e){n=e,s(e)}))}(l.target.hash,{duration:t,offset:n,callback:function(){var e,t;e=l.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}})}),!1)}},693:e=>{e.exports=function(e){var t=document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var n=t.querySelector("."+e.activeListItemClass);n&&(t.scrollTop=n.offsetTop)}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),o=n(540);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=n(866);document.querySelector(".post-body").querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((e=>{if(!e.classList.contains("nolink")){let t=e.textContent.replace(/\s/g,"-").toLowerCase().replace(/(?=\W)[^-]/g,"");e.id&&(t=e.id);let n=document.createElement("a");n.setAttribute("href","#"+t),n.setAttribute("aria-hidden",!0),n.classList.add("heading-link"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em"  width="1em" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>',e.setAttribute("id",t),e.appendChild(n)}})),document.querySelector("#toc")&&r.init({tocSelector:"#toc",contentSelector:".post-body",headingSelector:"h2,h3,h4,h5,h6",hasInnerContainers:!1,ignoreSelector:".nolink",scrollSmooth:!1}),function(){var e=document.getElementById("recents");if(e){var t=blogLabel.split(","),n=t[Math.floor(Math.random()*t.length)];function o(e,t){var n=e.split("/");return`https://${n[2]}/${n[3]}/${n[4]}/${n[5]}/${n[6]}/${t}/${n[8]}`}async function r(t,n){await fetch(t).then((e=>e.json())).then((t=>{"create"===n?function(t){if(t){var n="";t.forEach((e=>{if(e.id!==postId){var t=`<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAD0lEQVR42mMs6z7znwEIABFSAs6H0PwsAAAAAElFTkSuQmCC' alt='${e.title}' class='w-100 lazyload' data-srcset='https://fiik346.github.io/img/noimage2by1.svg'/>`,r="";e.images&&(t=(r=e.images[0].url).includes("bp.blogspot.com")?`<img src='${o(r,"w2-h1-c")}' alt='${e.title}' class='w-100 lazyload' data-srcset='${o(r,"w480-h240-p-k-no-nu")} 400w,${o(r,"w640-h320-p-k-no-nu")} 600w, ${o(r,"w980-h490-p-k-no-nu")} 900w' data-sizes='auto'/>`:`<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAD0lEQVR42mMs6z7znwEIABFSAs6H0PwsAAAAAElFTkSuQmCC' alt='${e.title}' class='w-100 lazyload' data-srcset='${r}' data-sizes='auto'/>`);var l=`<div class='col'><div class="recent"><div class="mb-3 thumbnail"><a href="${e.url}">${t}</a></div><div><h4 class="post-title recent-title"><a href="${e.url}">${e.title}</a></h4></div></div></div>`;n+=l}}));var r=document.createElement("div");r.className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4",r.innerHTML=n,e.append(r)}}(t.items):"list"===n&&function(e){var t=document.querySelector(".post-body"),n=t.querySelectorAll(".post-body > *"),o="";e.forEach((e=>{e.id!==postId&&(o+=`<li class='list-item'><a href='${e.url}'>${e.title}</a></li>`)}));var r=document.createElement("div");r.className="recents-inarticle my-4";var l=document.createElement("h6");l.className="nolink m-0 title p-4",l.innerText="Maybe You Might Like?",r.appendChild(l);var a=document.createElement("ul");a.className="m-0 p-4 list",a.innerHTML=o,r.appendChild(a),e&&t.insertBefore(r,t.childNodes[Math.floor(n.length/2)])}(t.items)})).catch((t=>{e.innerHTML=`<h3>${t.code}</h3><p>${t.message}</p>`}))}r(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?labels=${n}&maxResults=4&fetchBodies=false&fetchImages=false&key=${apiKey}`,"list"),r(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?labels=${blogLabel}&maxResults=6&fetchBodies=false&fetchImages=true&key=${apiKey}`,"create")}}(),function(){function e(e){return document.querySelector(e)}if((o=e("#comments")).dataset.embed){var t=document.querySelectorAll(".inline-thread"),n=e("#comment-editor-src").href,o=document.querySelectorAll("a.comment-reply");function r(e){return`<iframe allowtransparency="allowtransparency" class="blogger-iframe-colorize blogger-comment-from-post" frameborder="0" height="295px" id="comment-editor" name="comment-editor" src="${n}${e?"&parrentId="+e:""}" width="100%" style="display: block;" data-resized="true"></iframe>`}t.forEach((e=>{var t=e.querySelector(".thread-toggle"),n=e.querySelector(".thread-chrome");e&&(t.querySelector("a").href="javascript:;",t.addEventListener("click",(e=>{t.classList.contains("thread-expanded")?(t.className="thread-toggle thread-collapsed",n.className="thread-chrome thread-collapsed"):(t.className="thread-toggle thread-expanded",n.className="thread-chrome thread-expanded")})))})),o.forEach((t=>{var n=t.dataset.commentId;t&&(t.href="javascript:;",t.addEventListener("click",(t=>{e("#comment-editor").remove(),n?(e("#c"+n+"-ce").innerHTML=r(n),e("#top-continue").classList.remove("hidden")):(e("#top-ce").innerHTML=r(),e("#top-continue").classList.add("hidden"))})))}))}null!==e("#top-continue")&&e("#top-continue").classList.add("hidden")}(),function(){const e=["img","Image"];var t,n,o=document.querySelector(".post-body").innerHTML;document.getElementById("readTime").innerHTML=(n=function(t){let n=0;const o=function(t){const n=e.join("|"),o=new RegExp(`<(${n})([\\w\\W]+?)[\\/]?>`,"g");return(t.match(o)||[]).length}(t);return n=o>10?o/2*15+3*(o-10):o/2*(1-o+24),n/60}(t=o)+function(e,t=275){const{count:n,time:o,formattedString:r}=function(e){const t=new RegExp("[぀-ヿ㐀-䶿一-鿿豈-﫿ｦ-ﾟ]","g"),n=(e.match(t)||[]).length;return{count:n,time:n/500,formattedString:e.replace(t,"")}}(e),l=function(e){const t=new RegExp("\\w+","g");return(e.match(t)||[]).length}(r);return{characterCount:n,otherLanguageTime:o,wordTime:l/t,wordCount:l}}(function(e){const t=new RegExp("<\\w+(\\s+(\"[^\"]*\"|\\'[^\\']*'|[^>])+)?>|<\\/\\w+>","gi");return e.replace(t,"")}(function(e){return e.replace(/^\s+/,"").replace(/\s+$/,"")}(t))).wordTime)<.5?"Kurang dari semenit membaca":n>=.5&&n<1.5?"1 menit membaca":`${Math.ceil(n)} menit membaca`}()})()})();