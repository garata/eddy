/*! (C) Andrea Giammarchi Mit Style License */
(function(e){"use strict";function b(){return{l:{},m:[],b:[]}}function w(e,t,n){s.call(e,t)||(e[t]=n)}function E(e,t,n){typeof t=="function"?t.apply(e,n):t.handleEvent.apply(t,n)}function S(e,t,n){w(this,"timeStamp",m());for(var r in n)s.call(n,r)&&w(this,r,n[r]);w(this,"type",t),w(this,"target",e),n&&w(this,"data",n)}if(e.eddy)return;e.eddy=!0;var t=Array.prototype,n=e.prototype,r=S.prototype,i=e.defineProperty,s=n.hasOwnProperty,o=t.push,u=t.slice,a=t.unshift,f="toLocaleString",l={toLocaleString:1}.propertyIsEnumerable(f)?"_@eddy"+Math.random():f,c=l===f,h=c||(e.create||e)(null),p=c?function(e){return e[l]=b(),e[l]}:function(e){var t=b();return h.value=t,i(e,l,h),h.value=null,t},d=e.bind||function(e){var t=this;return function(){return t.apply(e,arguments)}},v=t.indexOf||function(e){var t=this.length;while(t--&&this[t]!==e);return t},m=Date.now?function(){return Date.now()}:function(){return(new Date).getTime()},g={boundTo:function(t){var n=s.call(this,l)?this[l]:p(this),r=n.m,i=n.b,u=typeof t=="string"?this[t]:t,a=v.call(r,u);return a<0?i[o.call(r,u)-1]=d.call(u,this):i[a]},emit:function(t){var n=s.call(this,l),r=n&&this[l].l,i=n&&s.call(r,t),o=i&&r[t],a=i&&u.call(arguments,1),f=0,c=i?o.length:f;while(f<c)E(this,o[f++],a);return i},off:function(t,n){var r=s.call(this,l),i=r&&this[l].l,o=r&&s.call(i,t)&&i[t],u;return o&&(u=v.call(o,n),-1<u&&(o.splice(u,1),o.length||delete i[t])),this},on:function(t,n,r){var i=s.call(this,l),u=(i?this[l]:p(this)).l,f=i&&s.call(u,t)?u[t]:u[t]=[];return v.call(f,n)<0&&(r?a:o).call(f,n),this},once:function(t,n,r){var i=this;return i.on(t,function s(e){i.off(t,s,r),E(i,n,arguments)},r)},trigger:function(t,n){var i=s.call(this,l),o=i&&this[l].l,u=typeof t=="string",a=u?t:t.type,f=i&&s.call(o,a),c=f&&o[a],h=u?new S(this,a,n):t,p=[h],d=0,v=f?c.length:d,m=!(h instanceof S),g,y;m&&(h._active=!0,h.stopImmediatePropagation=r.stopImmediatePropagation);while(h._active&&d<v)E(this,c[d++],p);return g=!!h._active,m&&(delete h._active,delete h.stopImmediatePropagation),g}},y;r._active=!0,r.stopImmediatePropagation=function(){this._active=!1},function(e){function a(e){var t=n.toString,r=g[e],i=u[e];return function(){return(t.call(this)=="[object Object]"?r:i).apply(this,arguments)}}function f(e,t){return typeof t=="function"?e.boundTo(t):t.boundTo(t.handleEvent)}var t=!("addEventListener"in window),r=t?function(e){var t=document.createEventObject();return t.eventType=e,t}:function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t},o=t?function(e,t){var n=e.fireEvent(t.eventType,t);return n||e.fireEvent("on"+t.eventType,t)}:function(e,t){return e.dispatchEvent(t)},u={boundTo:g.boundTo,emit:function(t){return o(r(t))},off:t?function(e,t,n){var r=f(this,t);return this.detachEvent(e,r),this.detachEvent("on"+e,r),this}:function(e,t,n){return this.removeEventListener(e,t,n),this},on:t?function(e,t,n){var r=f(this,t);return this.attachEvent(e,r),this.attachEvent("on"+e,r),this}:function(e,t,n){return this.addEventListener(e,t,n),this},once:function(n,r,i){var s=this;return s.on(n,function o(e){s.off(n,o,i),(t?f(s,r):r).call(s,e)},i)},trigger:function(t,n){var i=typeof t=="string",s=i?t:t.type,u=r(s);return S.call(u,n),o(u)}};for(e in g)s.call(g,e)&&(c?n[e]=a(e):i(n,e,{enumerable:!1,configurable:!0,writable:!0,value:a(e)}))}(y)})(Object);