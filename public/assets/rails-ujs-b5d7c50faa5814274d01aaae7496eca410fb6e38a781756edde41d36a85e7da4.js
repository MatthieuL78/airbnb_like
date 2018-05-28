(function(){var t=this;(function(){(function(){this.Rails={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:{selector:"button[data-remote]:not([form]), button[data-confirm]:not([form])",exclude:"form button"},inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",formDisableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",formEnableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]"}}).call(this)}).call(t);var S=t.Rails;(function(){(function(){S.cspNonce=function(){var t;return(t=document.querySelector("meta[name=csp-nonce]"))&&t.content}}).call(this),function(){var a,n;n=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector,S.matches=function(t,e){return null!=e.exclude?n.call(t,e.selector)&&!n.call(t,e.exclude):n.call(t,e)},a="_ujsData",S.getData=function(t,e){var n;return null!=(n=t[a])?n[e]:void 0},S.setData=function(t,e,n){return null==t[a]&&(t[a]={}),t[a][e]=n},S.$=function(t){return Array.prototype.slice.call(document.querySelectorAll(t))}}.call(this),function(){var n,a,r;n=S.$,r=S.csrfToken=function(){var t;return(t=document.querySelector("meta[name=csrf-token]"))&&t.content},a=S.csrfParam=function(){var t;return(t=document.querySelector("meta[name=csrf-param]"))&&t.content},S.CSRFProtection=function(t){var e;if(null!=(e=r()))return t.setRequestHeader("X-CSRF-Token",e)},S.refreshCSRFTokens=function(){var t,e;if(e=r(),t=a(),null!=e&&null!=t)return n('form input[name="'+t+'"]').forEach(function(t){return t.value=e})}}.call(this),function(){var r,e,o,n;o=S.matches,"function"!=typeof(r=window.CustomEvent)&&((r=function(t,e){var n;return(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}).prototype=window.Event.prototype,n=r.prototype.preventDefault,r.prototype.preventDefault=function(){var t;return t=n.call(this),this.cancelable&&!this.defaultPrevented&&Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),t}),e=S.fire=function(t,e,n){var a;return a=new r(e,{bubbles:!0,cancelable:!0,detail:n}),t.dispatchEvent(a),!a.defaultPrevented},S.stopEverything=function(t){return e(t.target,"ujs:everythingStopped"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()},S.delegate=function(t,n,e,a){return t.addEventListener(e,function(t){var e;for(e=t.target;e instanceof Element&&!o(e,n);)e=e.parentNode;if(e instanceof Element&&!1===a.call(e,t))return t.preventDefault(),t.stopPropagation()})}}.call(this),function(){var e,a,t,o,r,i;o=S.cspNonce,a=S.CSRFProtection,S.fire,e={"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript",script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},S.ajax=function(n){var a;return n=r(n),a=t(n,function(){var t,e;return e=i(null!=(t=a.response)?t:a.responseText,a.getResponseHeader("Content-Type")),2===Math.floor(a.status/100)?"function"==typeof n.success&&n.success(e,a.statusText,a):"function"==typeof n.error&&n.error(e,a.statusText,a),"function"==typeof n.complete?n.complete(a,a.statusText):void 0}),!(null!=n.beforeSend&&!n.beforeSend(a,n))&&(a.readyState===XMLHttpRequest.OPENED?a.send(n.data):void 0)},r=function(t){return t.url=t.url||location.href,t.type=t.type.toUpperCase(),"GET"===t.type&&t.data&&(t.url.indexOf("?")<0?t.url+="?"+t.data:t.url+="&"+t.data),null==e[t.dataType]&&(t.dataType="*"),t.accept=e[t.dataType],"*"!==t.dataType&&(t.accept+=", */*; q=0.01"),t},t=function(t,e){var n;return(n=new XMLHttpRequest).open(t.type,t.url,!0),n.setRequestHeader("Accept",t.accept),"string"==typeof t.data&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.crossDomain||n.setRequestHeader("X-Requested-With","XMLHttpRequest"),a(n),n.withCredentials=!!t.withCredentials,n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)return e(n)},n},i=function(t,e){var n,a;if("string"==typeof t&&"string"==typeof e)if(e.match(/\bjson\b/))try{t=JSON.parse(t)}catch(r){}else if(e.match(/\b(?:java|ecma)script\b/))(a=document.createElement("script")).nonce=o(),a.text=t,document.head.appendChild(a).parentNode.removeChild(a);else if(e.match(/\b(xml|html|svg)\b/)){n=new DOMParser,e=e.replace(/;.+/,"");try{t=n.parseFromString(t,e)}catch(r){}}return t},S.href=function(t){return t.href},S.isCrossDomain=function(t){var e,n;(e=document.createElement("a")).href=location.href,n=document.createElement("a");try{return n.href=t,!((!n.protocol||":"===n.protocol)&&!n.host||e.protocol+"//"+e.host==n.protocol+"//"+n.host)}catch(a){return a,!0}}}.call(this),function(){var r,o;r=S.matches,o=function(t){return Array.prototype.slice.call(t)},S.serializeElement=function(t,e){var n,a;return n=[t],r(t,"form")&&(n=o(t.elements)),a=[],n.forEach(function(e){if(e.name&&!e.disabled)return r(e,"select")?o(e.options).forEach(function(t){if(t.selected)return a.push({name:e.name,value:t.value})}):e.checked||-1===["radio","checkbox","submit"].indexOf(e.type)?a.push({name:e.name,value:e.value}):void 0}),e&&a.push(e),a.map(function(t){return null!=t.name?encodeURIComponent(t.name)+"="+encodeURIComponent(t.value):t}).join("&")},S.formElements=function(t,e){return r(t,"form")?o(t.elements).filter(function(t){return r(t,e)}):o(t.querySelectorAll(e))}}.call(this),function(){var e,o,n;o=S.fire,n=S.stopEverything,S.handleConfirm=function(t){if(!e(this))return n(t)},e=function(t){var e,n,a;if(!(a=t.getAttribute("data-confirm")))return!0;if(e=!1,o(t,"confirm")){try{e=confirm(a)}catch(r){}n=o(t,"confirm:complete",[e])}return e&&n}}.call(this),function(){var n,a,r,o,i,l,e,u,c,s,d;c=S.matches,u=S.getData,s=S.setData,d=S.stopEverything,e=S.formElements,S.handleDisabledElement=function(t){if(this.disabled)return d(t)},S.enableElement=function(t){var e;return e=t instanceof Event?t.target:t,c(e,S.linkDisableSelector)?l(e):c(e,S.buttonDisableSelector)||c(e,S.formEnableSelector)?o(e):c(e,S.formSubmitSelector)?i(e):void 0},S.disableElement=function(t){var e;return e=t instanceof Event?t.target:t,c(e,S.linkDisableSelector)?r(e):c(e,S.buttonDisableSelector)||c(e,S.formDisableSelector)?n(e):c(e,S.formSubmitSelector)?a(e):void 0},r=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(s(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e),t.addEventListener("click",d),s(t,"ujs:disabled",!0)},l=function(t){var e;return null!=(e=u(t,"ujs:enable-with"))&&(t.innerHTML=e,s(t,"ujs:enable-with",null)),t.removeEventListener("click",d),s(t,"ujs:disabled",null)},a=function(t){return e(t,S.formDisableSelector).forEach(n)},n=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(c(t,"button")?(s(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e):(s(t,"ujs:enable-with",t.value),t.value=e)),t.disabled=!0,s(t,"ujs:disabled",!0)},i=function(t){return e(t,S.formEnableSelector).forEach(o)},o=function(t){var e;return null!=(e=u(t,"ujs:enable-with"))&&(c(t,"button")?t.innerHTML=e:t.value=e,s(t,"ujs:enable-with",null)),t.disabled=!1,s(t,"ujs:disabled",null)}}.call(this),function(){var u;u=S.stopEverything,S.handleMethod=function(t){var e,n,a,r,o,i,l;if(l=(i=this).getAttribute("data-method"))return o=S.href(i),n=S.csrfToken(),e=S.csrfParam(),a=document.createElement("form"),r="<input name='_method' value='"+l+"' type='hidden' />",null==e||null==n||S.isCrossDomain(o)||(r+="<input name='"+e+"' value='"+n+"' type='hidden' />"),r+='<input type="submit" />',a.method="post",a.action=o,a.target=i.target,a.innerHTML=r,a.style.display="none",document.body.appendChild(a),a.querySelector('[type="submit"]').click(),u(t)}}.call(this),function(){var u,c,s,d,m,f,p,b,h,v=[].slice;f=S.matches,s=S.getData,b=S.setData,c=S.fire,h=S.stopEverything,u=S.ajax,d=S.isCrossDomain,p=S.serializeElement,m=function(t){var e;return null!=(e=t.getAttribute("data-remote"))&&"false"!==e},S.handleRemote=function(t){var e,n,a,r,o,i,l;return!m(r=this)||(c(r,"ajax:before")?(l=r.getAttribute("data-with-credentials"),a=r.getAttribute("data-type")||"script",f(r,S.formSubmitSelector)?(e=s(r,"ujs:submit-button"),o=s(r,"ujs:submit-button-formmethod")||r.method,i=s(r,"ujs:submit-button-formaction")||r.getAttribute("action")||location.href,"GET"===o.toUpperCase()&&(i=i.replace(/\?.*$/,"")),"multipart/form-data"===r.enctype?(n=new FormData(r),null!=e&&n.append(e.name,e.value)):n=p(r,e),b(r,"ujs:submit-button",null),b(r,"ujs:submit-button-formmethod",null),b(r,"ujs:submit-button-formaction",null)):f(r,S.buttonClickSelector)||f(r,S.inputChangeSelector)?(o=r.getAttribute("data-method"),i=r.getAttribute("data-url"),n=p(r,r.getAttribute("data-params"))):(o=r.getAttribute("data-method"),i=S.href(r),n=r.getAttribute("data-params")),u({type:o||"GET",url:i,data:n,dataType:a,beforeSend:function(t,e){return c(r,"ajax:beforeSend",[t,e])?c(r,"ajax:send",[t]):(c(r,"ajax:stopped"),!1)},success:function(){var t;return t=1<=arguments.length?v.call(arguments,0):[],c(r,"ajax:success",t)},error:function(){var t;return t=1<=arguments.length?v.call(arguments,0):[],c(r,"ajax:error",t)},complete:function(){var t;return t=1<=arguments.length?v.call(arguments,0):[],c(r,"ajax:complete",t)},crossDomain:d(i),withCredentials:null!=l&&"false"!==l}),h(t)):(c(r,"ajax:stopped"),!1))},S.formSubmitButtonClick=function(){var t,e;if(e=(t=this).form)return t.name&&b(e,"ujs:submit-button",{name:t.name,value:t.value}),b(e,"ujs:formnovalidate-button",t.formNoValidate),b(e,"ujs:submit-button-formaction",t.getAttribute("formaction")),b(e,"ujs:submit-button-formmethod",t.getAttribute("formmethod"))},S.handleMetaClick=function(t){var e,n,a;if(a=((n=this).getAttribute("data-method")||"GET").toUpperCase(),e=n.getAttribute("data-params"),(t.metaKey||t.ctrlKey)&&"GET"===a&&!e)return t.stopImmediatePropagation()}}.call(this),function(){var t,a,e,n,r,o,i,l,u,c,s,d,m,f;o=S.fire,e=S.delegate,l=S.getData,t=S.$,f=S.refreshCSRFTokens,a=S.CSRFProtection,r=S.enableElement,n=S.disableElement,c=S.handleDisabledElement,u=S.handleConfirm,m=S.handleRemote,i=S.formSubmitButtonClick,s=S.handleMetaClick,d=S.handleMethod,"undefined"==typeof jQuery||null===jQuery||null==jQuery.ajax||jQuery.rails||(jQuery.rails=S,jQuery.ajaxPrefilter(function(t,e,n){if(!t.crossDomain)return a(n)})),S.start=function(){if(window._rails_loaded)throw new Error("rails-ujs has already been loaded!");return window.addEventListener("pageshow",function(){return t(S.formEnableSelector).forEach(function(t){if(l(t,"ujs:disabled"))return r(t)}),t(S.linkDisableSelector).forEach(function(t){if(l(t,"ujs:disabled"))return r(t)})}),e(document,S.linkDisableSelector,"ajax:complete",r),e(document,S.linkDisableSelector,"ajax:stopped",r),e(document,S.buttonDisableSelector,"ajax:complete",r),e(document,S.buttonDisableSelector,"ajax:stopped",r),e(document,S.linkClickSelector,"click",c),e(document,S.linkClickSelector,"click",u),e(document,S.linkClickSelector,"click",s),e(document,S.linkClickSelector,"click",n),e(document,S.linkClickSelector,"click",m),e(document,S.linkClickSelector,"click",d),e(document,S.buttonClickSelector,"click",c),e(document,S.buttonClickSelector,"click",u),e(document,S.buttonClickSelector,"click",n),e(document,S.buttonClickSelector,"click",m),e(document,S.inputChangeSelector,"change",c),e(document,S.inputChangeSelector,"change",u),e(document,S.inputChangeSelector,"change",m),e(document,S.formSubmitSelector,"submit",c),e(document,S.formSubmitSelector,"submit",u),e(document,S.formSubmitSelector,"submit",m),e(document,S.formSubmitSelector,"submit",function(t){return setTimeout(function(){return n(t)},13)}),e(document,S.formSubmitSelector,"ajax:send",n),e(document,S.formSubmitSelector,"ajax:complete",r),e(document,S.formInputClickSelector,"click",c),e(document,S.formInputClickSelector,"click",u),e(document,S.formInputClickSelector,"click",i),document.addEventListener("DOMContentLoaded",f),window._rails_loaded=!0},window.Rails===S&&o(document,"rails:attachBindings")&&S.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=S:"function"==typeof define&&define.amd&&define(S)}).call(this);