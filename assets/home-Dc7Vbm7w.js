var Te=Object.defineProperty;var Ve=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var k=(e,t,n)=>(Ve(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var Y,p,oe,at,U,At,re,yt,Nt,mt,gt,se,j={},ce=[],Oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Pt=Array.isArray;function P(e,t){for(var n in t)e[n]=t[n];return e}function _e(e){var t=e.parentNode;t&&t.removeChild(e)}function R(e,t,n){var i,o,r,s={};for(r in t)r=="key"?i=t[r]:r=="ref"?o=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?Y.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return D(e,s,i,o,null)}function D(e,t,n,i,o){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++oe,__i:-1,__u:0};return o==null&&p.vnode!=null&&p.vnode(r),r}function ae(){return{current:null}}function E(e){return e.children}function C(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?H(e):null}function le(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return le(e)}}function kt(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!rt.__r++||At!==p.debounceRendering)&&((At=p.debounceRendering)||re)(rt)}function rt(){var e,t,n,i,o,r,s,_;for(U.sort(yt);e=U.shift();)e.__d&&(t=U.length,i=void 0,r=(o=(n=e).__v).__e,s=[],_=[],n.__P&&((i=P({},o)).__v=o.__v+1,p.vnode&&p.vnode(i),Mt(n.__P,i,o,n.__n,n.__P.namespaceURI,32&o.__u?[r]:null,s,r??H(o),!!(32&o.__u),_),i.__v=o.__v,i.__.__k[i.__i]=i,fe(s,i,_),i.__e!=r&&le(i)),U.length>t&&U.sort(yt));rt.__r=0}function he(e,t,n,i,o,r,s,_,l,a,f){var c,d,u,w,S,y=i&&i.__k||ce,m=t.length;for(n.__d=l,ze(n,t,y),l=n.__d,c=0;c<m;c++)(u=n.__k[c])!=null&&typeof u!="boolean"&&typeof u!="function"&&(d=u.__i===-1?j:y[u.__i]||j,u.__i=c,Mt(e,u,d,o,r,s,_,l,a,f),w=u.__e,u.ref&&d.ref!=u.ref&&(d.ref&&Et(d.ref,null,u),f.push(u.ref,u.__c||w,u)),S==null&&w!=null&&(S=w),65536&u.__u||d.__k===u.__k?(l&&!l.isConnected&&(l=H(d)),l=ue(u,l,e)):typeof u.type=="function"&&u.__d!==void 0?l=u.__d:w&&(l=w.nextSibling),u.__d=void 0,u.__u&=-196609);n.__d=l,n.__e=S}function ze(e,t,n){var i,o,r,s,_,l=t.length,a=n.length,f=a,c=0;for(e.__k=[],i=0;i<l;i++)s=i+c,(o=e.__k[i]=(o=t[i])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?D(null,o,null,null,null):Pt(o)?D(E,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?D(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,_=Fe(o,n,s,f),o.__i=_,r=null,_!==-1&&(f--,(r=n[_])&&(r.__u|=131072)),r==null||r.__v===null?(_==-1&&c--,typeof o.type!="function"&&(o.__u|=65536)):_!==s&&(_===s+1?c++:_>s?f>l-s?c+=_-s:c--:_<s?_==s-1&&(c=_-s):c=0,_!==i+c&&(o.__u|=65536))):(r=n[s])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=H(r)),bt(r,r,!1),n[s]=null,f--);if(f)for(i=0;i<a;i++)(r=n[i])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=H(r)),bt(r,r))}function ue(e,t,n){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=ue(i[o],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Fe(e,t,n,i){var o=e.key,r=e.type,s=n-1,_=n+1,l=t[n];if(l===null||l&&o==l.key&&r===l.type&&!(131072&l.__u))return n;if(i>(l!=null&&!(131072&l.__u)?1:0))for(;s>=0||_<t.length;){if(s>=0){if((l=t[s])&&!(131072&l.__u)&&o==l.key&&r===l.type)return s;s--}if(_<t.length){if((l=t[_])&&!(131072&l.__u)&&o==l.key&&r===l.type)return _;_++}}return-1}function Wt(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Oe.test(t)?n:n+"px"}function Q(e,t,n,i,o){var r;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Wt(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Wt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i?n.u=i.u:(n.u=Nt,e.addEventListener(t,r?gt:mt,r)):e.removeEventListener(t,r?gt:mt,r);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Dt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Nt++;else if(t.t<n.u)return;return n(p.event?p.event(t):t)}}}function Mt(e,t,n,i,o,r,s,_,l,a){var f,c,d,u,w,S,y,m,x,M,G,W,It,J,ut,N=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),r=[_=t.__e=n.__e]),(f=p.__b)&&f(t);t:if(typeof N=="function")try{if(m=t.props,x=(f=N.contextType)&&i[f.__c],M=f?x?x.props.value:f.__:i,n.__c?y=(c=t.__c=n.__c).__=c.__E:("prototype"in N&&N.prototype.render?t.__c=c=new N(m,M):(t.__c=c=new C(m,M),c.constructor=N,c.render=Re),x&&x.sub(c),c.props=m,c.state||(c.state={}),c.context=M,c.__n=i,d=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),N.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=P({},c.__s)),P(c.__s,N.getDerivedStateFromProps(m,c.__s))),u=c.props,w=c.state,c.__v=t,d)N.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(N.getDerivedStateFromProps==null&&m!==u&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(m,M),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(m,c.__s,M)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(c.props=m,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(Z){Z&&(Z.__=t)}),G=0;G<c._sb.length;G++)c.__h.push(c._sb[G]);c._sb=[],c.__h.length&&s.push(c);break t}c.componentWillUpdate!=null&&c.componentWillUpdate(m,c.__s,M),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(u,w,S)})}if(c.context=M,c.props=m,c.__P=e,c.__e=!1,W=p.__r,It=0,"prototype"in N&&N.prototype.render){for(c.state=c.__s,c.__d=!1,W&&W(t),f=c.render(c.props,c.state,c.context),J=0;J<c._sb.length;J++)c.__h.push(c._sb[J]);c._sb=[]}else do c.__d=!1,W&&W(t),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++It<25);c.state=c.__s,c.getChildContext!=null&&(i=P(P({},i),c.getChildContext())),d||c.getSnapshotBeforeUpdate==null||(S=c.getSnapshotBeforeUpdate(u,w)),he(e,Pt(ut=f!=null&&f.type===E&&f.key==null?f.props.children:f)?ut:[ut],t,n,i,o,r,s,_,l,a),c.base=t.__e,t.__u&=-161,c.__h.length&&s.push(c),y&&(c.__E=c.__=null)}catch(Z){t.__v=null,l||r!=null?(t.__e=_,t.__u|=l?160:32,r[r.indexOf(_)]=null):(t.__e=n.__e,t.__k=n.__k),p.__e(Z,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Le(n.__e,t,n,i,o,r,s,l,a);(f=p.diffed)&&f(t)}function fe(e,t,n){t.__d=void 0;for(var i=0;i<n.length;i++)Et(n[i],n[++i],n[++i]);p.__c&&p.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){p.__e(r,o.__v)}})}function Le(e,t,n,i,o,r,s,_,l){var a,f,c,d,u,w,S,y=n.props,m=t.props,x=t.type;if(x==="svg"?o="http://www.w3.org/2000/svg":x==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r!=null){for(a=0;a<r.length;a++)if((u=r[a])&&"setAttribute"in u==!!x&&(x?u.localName===x:u.nodeType===3)){e=u,r[a]=null;break}}if(e==null){if(x===null)return document.createTextNode(m);e=document.createElementNS(o,x,m.is&&m),r=null,_=!1}if(x===null)y===m||_&&e.data===m||(e.data=m);else{if(r=r&&Y.call(e.childNodes),y=n.props||j,!_&&r!=null)for(y={},a=0;a<e.attributes.length;a++)y[(u=e.attributes[a]).name]=u.value;for(a in y)if(u=y[a],a!="children"){if(a=="dangerouslySetInnerHTML")c=u;else if(a!=="key"&&!(a in m)){if(a=="value"&&"defaultValue"in m||a=="checked"&&"defaultChecked"in m)continue;Q(e,a,null,u,o)}}for(a in m)u=m[a],a=="children"?d=u:a=="dangerouslySetInnerHTML"?f=u:a=="value"?w=u:a=="checked"?S=u:a==="key"||_&&typeof u!="function"||y[a]===u||Q(e,a,u,y[a],o);if(f)_||c&&(f.__html===c.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(c&&(e.innerHTML=""),he(e,Pt(d)?d:[d],t,n,i,x==="foreignObject"?"http://www.w3.org/1999/xhtml":o,r,s,r?r[0]:n.__k&&H(n,0),_,l),r!=null)for(a=r.length;a--;)r[a]!=null&&_e(r[a]);_||(a="value",w!==void 0&&(w!==e[a]||x==="progress"&&!w||x==="option"&&w!==y[a])&&Q(e,a,w,y[a],o),a="checked",S!==void 0&&S!==e[a]&&Q(e,a,S,y[a],o))}return e}function Et(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){p.__e(i,n)}}function bt(e,t,n){var i,o;if(p.unmount&&p.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Et(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){p.__e(r,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&bt(i[o],t,n||typeof e.type!="function");n||e.__e==null||_e(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Re(e,t,n){return this.constructor(e,n)}function Ie(e,t,n){var i,o,r,s;p.__&&p.__(e,t),o=(i=typeof n=="function")?null:t.__k,r=[],s=[],Mt(t,e=(!i&&n||t).__k=R(E,null,[e]),o||j,j,t.namespaceURI,!i&&n?[n]:o?null:t.firstChild?Y.call(t.childNodes):null,r,!i&&n?n:o?o.__e:t.firstChild,i,s),fe(r,e,s)}function de(e,t,n){var i,o,r,s,_=P({},e.props);for(r in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)r=="key"?i=t[r]:r=="ref"?o=t[r]:_[r]=t[r]===void 0&&s!==void 0?s[r]:t[r];return arguments.length>2&&(_.children=arguments.length>3?Y.call(arguments,2):n),D(e.type,_,i||e.key,o||e.ref,null)}function lt(e,t){var n={__c:t="__cC"+se++,__:e,Consumer:function(i,o){return i.children(o)},Provider:function(i){var o,r;return this.getChildContext||(o=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&o.some(function(_){_.__e=!0,kt(_)})},this.sub=function(s){o.push(s);var _=s.componentWillUnmount;s.componentWillUnmount=function(){o.splice(o.indexOf(s),1),_&&_.call(s)}}),i.children}};return n.Provider.__=n.Consumer.contextType=n}Y=ce.slice,p={__e:function(e,t,n,i){for(var o,r,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,i||{}),s=o.__d),s)return o.__E=o}catch(_){e=_}throw e}},oe=0,at=function(e){return e!=null&&e.constructor==null},C.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),kt(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),kt(this))},C.prototype.render=E,U=[],re=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,yt=function(e,t){return e.__v.__b-t.__v.__b},rt.__r=0,Nt=0,mt=Dt(!1),gt=Dt(!0),se=0;var T,g,ft,Bt,st=0,ve=[],it=[],b=p,jt=b.__b,Yt=b.__r,Xt=b.diffed,qt=b.__c,Kt=b.unmount,Gt=b.__;function X(e,t){b.__h&&b.__h(g,e,st||t),st=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:it}),n.__[e]}function Ae(e){return st=1,We(me,e)}function We(e,t,n){var i=X(T++,2);if(i.t=e,!i.__c&&(i.__=[me(void 0,t),function(_){var l=i.__N?i.__N[0]:i.__[0],a=i.t(l,_);l!==a&&(i.__N=[a,i.__[1]],i.__c.setState({}))}],i.__c=g,!g.u)){var o=function(_,l,a){if(!i.__c.__H)return!0;var f=i.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!r||r.call(this,_,l,a);var c=!1;return f.forEach(function(d){if(d.__N){var u=d.__[0];d.__=d.__N,d.__N=void 0,u!==d.__[0]&&(c=!0)}}),!(!c&&i.__c.props===_)&&(!r||r.call(this,_,l,a))};g.u=!0;var r=g.shouldComponentUpdate,s=g.componentWillUpdate;g.componentWillUpdate=function(_,l,a){if(this.__e){var f=r;r=void 0,o(_,l,a),r=f}s&&s.call(this,_,l,a)},g.shouldComponentUpdate=o}return i.__N||i.__}function De(e,t){var n=X(T++,3);!b.__s&&Ht(n.__H,t)&&(n.__=e,n.i=t,g.__H.__h.push(n))}function pe(e,t){var n=X(T++,4);!b.__s&&Ht(n.__H,t)&&(n.__=e,n.i=t,g.__h.push(n))}function ye(e){return st=5,Ut(function(){return{current:e}},[])}function Ut(e,t){var n=X(T++,7);return Ht(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Be(e){var t=g.context[e.__c],n=X(T++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(g)),t.props.value):e.__}function je(){for(var e;e=ve.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ot),e.__H.__h.forEach(wt),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){g=null,jt&&jt(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Gt&&Gt(e,t)},b.__r=function(e){Yt&&Yt(e),T=0;var t=(g=e.__c).__H;t&&(ft===g?(t.__h=[],g.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=it,n.__N=n.i=void 0})):(t.__h.forEach(ot),t.__h.forEach(wt),t.__h=[],T=0)),ft=g},b.diffed=function(e){Xt&&Xt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ve.push(t)!==1&&Bt===b.requestAnimationFrame||((Bt=b.requestAnimationFrame)||Ye)(je)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==it&&(n.__=n.__V),n.i=void 0,n.__V=it})),ft=g=null},b.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ot),n.__h=n.__h.filter(function(i){return!i.__||wt(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],b.__e(i,n.__v)}}),qt&&qt(e,t)},b.unmount=function(e){Kt&&Kt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{ot(i)}catch(o){t=o}}),n.__H=void 0,t&&b.__e(t,n.__v))};var Jt=typeof requestAnimationFrame=="function";function Ye(e){var t,n=function(){clearTimeout(i),Jt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);Jt&&(t=requestAnimationFrame(n))}function ot(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function wt(e){var t=g;e.__c=e.__(),g=t}function Ht(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}function me(e,t){return typeof t=="function"?t(e):t}var Xe=Symbol.for("preact-signals");function Tt(){if(z>1)z--;else{for(var e,t=!1;B!==void 0;){var n=B;for(B=void 0,xt++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&ke(n))try{n.c()}catch(o){t||(e=o,t=!0)}n=i}}if(xt=0,z--,t)throw e}}var v=void 0,B=void 0,z=0,xt=0,ct=0;function ge(e){if(v!==void 0){var t=e.n;if(t===void 0||t.t!==v)return t={i:0,S:e,p:v.s,n:void 0,t:v,e:void 0,x:void 0,r:t},v.s!==void 0&&(v.s.n=t),v.s=t,e.n=t,32&v.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=v.s,t.n=void 0,v.s.n=t,v.s=t),t}}function $(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}$.prototype.brand=Xe;$.prototype.h=function(){return!0};$.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};$.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};$.prototype.subscribe=function(e){var t=this;return Ot(function(){var n=t.value,i=v;v=void 0;try{e(n)}finally{v=i}})};$.prototype.valueOf=function(){return this.value};$.prototype.toString=function(){return this.value+""};$.prototype.toJSON=function(){return this.value};$.prototype.peek=function(){var e=v;v=void 0;try{return this.value}finally{v=e}};Object.defineProperty($.prototype,"value",{get:function(){var e=ge(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(xt>100)throw new Error("Cycle detected");this.v=e,this.i++,ct++,z++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Tt()}}}});function q(e){return new $(e)}function ke(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function be(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function we(e){for(var t=e.s,n=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=n}function I(e){$.call(this,void 0),this.x=e,this.s=void 0,this.g=ct-1,this.f=4}(I.prototype=new $).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ct))return!0;if(this.g=ct,this.f|=1,this.i>0&&!ke(this))return this.f&=-2,!0;var e=v;try{be(this),v=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return v=e,we(this),this.f&=-2,!0};I.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}$.prototype.S.call(this,e)};I.prototype.U=function(e){if(this.t!==void 0&&($.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};I.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(I.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=ge(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function qe(e){return new I(e)}function xe(e){var t=e.u;if(e.u=void 0,typeof t=="function"){z++;var n=v;v=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,Vt(e),i}finally{v=n,Tt()}}}function Vt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,xe(e)}function Ke(e){if(v!==this)throw new Error("Out-of-order effect");we(this),v=e,this.f&=-2,8&this.f&&Vt(this),Tt()}function K(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}K.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};K.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,xe(this),be(this),z++;var e=v;return v=this,Ke.bind(this,e)};K.prototype.N=function(){2&this.f||(this.f|=2,this.o=B,B=this)};K.prototype.d=function(){this.f|=8,1&this.f||Vt(this)};function Ot(e){var t=new K(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var dt;function A(e,t){p[e]=t.bind(null,p[e]||function(){})}function _t(e){dt&&dt(),dt=e&&e.S()}function $e(e){var t=this,n=e.data,i=Je(n);i.value=n;var o=Ut(function(){for(var r=t.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return t.__$u.c=function(){var s;!at(o.peek())&&((s=t.base)==null?void 0:s.nodeType)===3?t.base.data=o.peek():(t.__$f|=1,t.setState({}))},qe(function(){var s=i.value.value;return s===0?0:s===!0?"":s||""})},[]);return o.value}$e.displayName="_st";Object.defineProperties($.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:$e},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});A("__b",function(e,t){if(typeof t.type=="string"){var n,i=t.props;for(var o in i)if(o!=="children"){var r=i[o];r instanceof $&&(n||(t.__np=n={}),n[o]=r,i[o]=r.peek())}}e(t)});A("__r",function(e,t){_t();var n,i=t.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(o){var r;return Ot(function(){r=this}),r.c=function(){i.__$f|=1,i.setState({})},r}())),_t(n),e(t)});A("__e",function(e,t,n,i){_t(),e(t,n,i)});A("diffed",function(e,t){_t();var n;if(typeof t.type=="string"&&(n=t.__e)){var i=t.__np,o=t.props;if(i){var r=n.U;if(r)for(var s in r){var _=r[s];_!==void 0&&!(s in i)&&(_.d(),r[s]=void 0)}else n.U=r={};for(var l in i){var a=r[l],f=i[l];a===void 0?(a=Ge(n,l,f,o),r[l]=a):a.o(f,o)}}}e(t)});function Ge(e,t,n,i){var o=t in e&&e.ownerSVGElement===void 0,r=q(n);return{o:function(s,_){r.value=s,i=_},d:Ot(function(){var s=r.value.value;i[t]!==s&&(i[t]=s,o?e[t]=s:s?e.setAttribute(t,s):e.removeAttribute(t))})}}A("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var o in i){var r=i[o];r&&r.d()}}}}else{var s=t.__c;if(s){var _=s.__$u;_&&(s.__$u=void 0,_.d())}}e(t)});A("__h",function(e,t,n,i){(i<3||i===9)&&(t.__$f|=2),e(t,n,i)});C.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in t)return!0;for(var o in e)if(o!=="__source"&&e[o]!==this.props[o])return!0;for(var r in this.props)if(!(r in e))return!0;return!1};function Je(e){return Ut(function(){return q(e)},[])}class O{static set(t,n,i=JSON.stringify){localStorage.setItem(t,i(n))}static get(t,n){const i=localStorage.getItem(t);return i?n?n(JSON.parse(i)):JSON.parse(i):void 0}static reset(t){localStorage.removeItem(t)}}const F={isEnabled:q(!1),toggle(e){F.isEnabled.value=e},load(){F.isEnabled.value=O.get("background")??!0},save(){O.set("background",F.isEnabled.value)}},$t=lt({}),V={colors:["#1755ff","#50c257","#9f37c2","#f1d04f","#ff3737","#7fffec"],clicker:{version:1}},St={color:q(V.colors[Math.floor(Math.random()*V.colors.length)]),nextColor(){St.color.value=V.colors[(V.colors.indexOf(St.color.value)+1)%V.colors.length]}},zt=lt({}),Ze="_background_1k7fx_1",Qe={background:Ze};var tn=0;function h(e,t,n,i,o,r){t||(t={});var s,_,l=t;if("ref"in l)for(_ in l={},t)_=="ref"?s=t[_]:l[_]=t[_];var a={type:e,props:l,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--tn,__i:-1,__u:0,__source:o,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(_ in s)l[_]===void 0&&(l[_]=s[_]);return p.vnode&&p.vnode(a),a}class en extends C{constructor(){super();k(this,"canvas",ae());k(this,"starSize",6);k(this,"starMinScale",25e-11);k(this,"starColor","#FFFFFF");k(this,"stars",[]);k(this,"starVelocity",{x:0,y:0,tx:0,ty:0,z:5e-4});k(this,"scale",.5);k(this,"overflowThreshold",50);k(this,"pointerX");k(this,"pointerY");k(this,"touchInput");k(this,"width",window.innerWidth*this.scale);k(this,"height",window.innerHeight*this.scale);this.pointerX=null,this.pointerY=null,this.touchInput=!1,this.spawn()}spawn(){const n=(window.innerWidth+window.innerHeight)/(navigator.userAgent.indexOf("Firefox")>-1?18:11);for(let i=0;i<n;i++)this.stars.push({x:0,y:0,z:this.starMinScale+Math.random()*(1-this.starMinScale)});console.info("[INFO] Stars spawned successfully!")}movePointer(n,i){if(typeof this.pointerX=="number"&&typeof this.pointerY=="number"){let o=n-this.pointerX,r=i-this.pointerY;this.starVelocity.tx=this.starVelocity.tx+o/8*this.scale*(this.touchInput?1:-1),this.starVelocity.ty=this.starVelocity.ty+r/8*this.scale*(this.touchInput?1:-1)}this.pointerX=n,this.pointerY=i}resize(){this.canvas.current&&(this.width=window.innerWidth*this.scale,this.height=window.innerHeight*this.scale,this.canvas.current.width=this.width,this.canvas.current.height=this.height,this.stars.forEach(n=>{n.x=Math.random()*this.width,n.y=Math.random()*this.height}))}animate(){if(!this.canvas.current)return;const n=this.canvas.current.getContext("2d");n.clearRect(0,0,this.width,this.height),this.starVelocity.tx*=.86,this.starVelocity.ty*=.86,this.starVelocity.x+=(this.starVelocity.tx-this.starVelocity.x)*.8,this.starVelocity.y+=(this.starVelocity.ty-this.starVelocity.y)*.8,this.stars.forEach(i=>{if(i.x+=this.starVelocity.x*i.z,i.y+=this.starVelocity.y*i.z,i.x+=(i.x-this.width/2)*this.starVelocity.z*i.z,i.y+=(i.y-this.height/2)*this.starVelocity.z*i.z,i.z+=this.starVelocity.z,i.x<-this.overflowThreshold||i.x>this.width+this.overflowThreshold||i.y<-this.overflowThreshold||i.y>this.height+this.overflowThreshold){let o="z",r=Math.abs(this.starVelocity.x),s=Math.abs(this.starVelocity.y);if(r>1||s>1){let _;r>s?_=Math.random()<r/(r+s)?"h":"v":_=Math.random()<s/(r+s)?"v":"h",_==="h"?o=this.starVelocity.x>0?"l":"r":o=this.starVelocity.y>0?"t":"b"}i.z=this.starMinScale+Math.random()*(1-this.starMinScale),o==="z"?(i.z=.1,i.x=Math.random()*this.width,i.y=Math.random()*this.height):o==="l"?(i.x=-this.overflowThreshold,i.y=this.height*Math.random()):o==="r"?(i.x=this.width+this.overflowThreshold,i.y=this.height*Math.random()):o==="t"?(i.x=this.width*Math.random(),i.y=-this.overflowThreshold):o==="b"&&(i.x=this.width*Math.random(),i.y=this.height+this.overflowThreshold)}}),this.stars.forEach(i=>{n.beginPath(),n.lineCap="round",n.lineWidth=this.starSize*i.z*this.scale,n.globalAlpha=.5+.5*Math.random(),n.strokeStyle=this.starColor,n.beginPath(),n.moveTo(i.x,i.y);let o=this.starVelocity.x*2,r=this.starVelocity.y*2;Math.abs(o)<.1&&(o=.5),Math.abs(r)<.1&&(r=.5),n.lineTo(i.x+o,i.y+r),n.stroke()}),requestAnimationFrame(this.animate.bind(this))}componentWillUnmount(){window.onresize=null,document.onmousemove=null,document.ontouchmove=null,document.ontouchend=null,document.onmouseleave=null,console.info("[INFO] Background has been removed!")}componentWillMount(){window.onresize=this.resize.bind(this),document.onmousemove=n=>{this.touchInput=!1,this.movePointer(n.clientX,n.clientY)},document.ontouchmove=n=>{this.touchInput=!0,this.movePointer(n.touches[0].clientX,n.touches[0].clientY),n.preventDefault()},document.ontouchend=()=>{this.pointerX=null,this.pointerY=null},document.onmouseleave=()=>{this.pointerX=null,this.pointerY=null},console.info("[INFO] Background events are attached!")}componentDidMount(){this.resize.bind(this)(),this.animate.bind(this)(),console.info("[INFO] Background animation started!")}render(){return h("canvas",{className:Qe.background,ref:this.canvas})}}function nn(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,i,o,r,s=[],_="",l=e.split("/");for(l[0]||l.shift();o=l.shift();)n=o[0],n==="*"?(s.push(n),_+=o[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(i=o.indexOf("?",1),r=o.indexOf(".",1),s.push(o.substring(1,~i?i:~r?r:o.length)),_+=~i&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(_+=(~i?"?":"")+"\\"+o.substring(r))):_+="/"+o;return{keys:s,pattern:new RegExp("^"+_+(t?"(?=$|/)":"/?$"),"i")}}const on=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function vt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}function rn(e,t,n){n&&!on&&(t=n);const i=t(),[{_instance:o},r]=Ae({_instance:{_value:i,_getSnapshot:t}});return pe(()=>{o._value=i,o._getSnapshot=t,vt(o._value,t())||r({_instance:o})},[e,i,t]),De(()=>(vt(o._value,o._getSnapshot())||r({_instance:o}),e(()=>{vt(o._value,o._getSnapshot())||r({_instance:o})})),[e]),i}const Se=e=>{const t=ye([e,(...n)=>t[0](...n)]).current;return pe(()=>{t[0]=e}),t[1]},sn="popstate",Ft="pushState",Lt="replaceState",cn="hashchange",Zt=[sn,Ft,Lt,cn],_n=e=>{for(const t of Zt)addEventListener(t,e);return()=>{for(const t of Zt)removeEventListener(t,e)}},Ce=(e,t)=>rn(_n,e,t),an=()=>location.search,ln=({ssrSearch:e=""}={})=>Ce(an,()=>e),Qt=()=>location.pathname,hn=({ssrPath:e}={})=>Ce(Qt,e?()=>e:Qt),un=(e,{replace:t=!1,state:n=null}={})=>history[t?Lt:Ft](n,"",e),fn=(e={})=>[hn(e),un],te=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[te]>"u"){for(const e of[Ft,Lt]){const t=history[e];history[e]=function(){const n=t.apply(this,arguments),i=new Event(e);return i.arguments=arguments,dispatchEvent(i),n}}Object.defineProperty(window,te,{value:!0})}const dn=(e="",t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",vn=(e,t="")=>e[0]==="~"?e.slice(1):t+e,pn=e=>{try{return decodeURI(e)}catch{return e}},Ne={hook:fn,searchHook:ln,parser:nn,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:e=>e},Pe=lt(Ne),ht=()=>Be(Pe),yn=lt({}),Rt=e=>{const[t,n]=e.hook(e);return[pn(dn(e.base,t)),Se((i,o)=>n(vn(i,e.base),o))]},Me=(e,t,n,i)=>{const{pattern:o,keys:r}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",i),s=o.exec(n)||[],[_,...l]=s;return _!==void 0?[!0,(()=>{const a=r!==!1?Object.fromEntries(r.map((c,d)=>[c,l[d]])):s.groups;let f={...l};return a&&Object.assign(f,a),f})(),...i?[_]:[]]:[!1,null]},mn=({children:e,...t})=>{var f,c;const n=ht(),i=t.hook?Ne:n;let o=i;const[r,s]=((f=t.ssrPath)==null?void 0:f.split("?"))??[];s&&(t.ssrSearch=s,t.ssrPath=r),t.hrefs=t.hrefs??((c=t.hook)==null?void 0:c.hrefs);let _=ye({}),l=_.current,a=l;for(let d in i){const u=d==="base"?i[d]+(t[d]||""):t[d]||i[d];l===a&&u!==a[d]&&(_.current=a={...a}),a[d]=u,u!==i[d]&&(o=a)}return R(Pe.Provider,{value:o,children:e})},ee=({children:e,component:t},n)=>t?R(t,{params:n}):typeof e=="function"?e(n):e,gn=({path:e,nest:t,match:n,...i})=>{const o=ht(),[r]=Rt(o),[s,_,l]=n??Me(o.parser,e,r,t);if(!s)return null;const a=l?R(mn,{base:l},ee(i,_)):ee(i,_);return R(yn.Provider,{value:_,children:a})},Ct=(e,t)=>{const n=ht(),[i,o]=Rt(n),{to:r,href:s=r,onClick:_,asChild:l,children:a,className:f,replace:c,state:d,...u}=e,w=Se(y=>{y.ctrlKey||y.metaKey||y.altKey||y.shiftKey||y.button!==0||(_==null||_(y),y.defaultPrevented||(y.preventDefault(),o(s,e)))}),S=n.hrefs(s[0]==="~"?s.slice(1):n.base+s,n);return l&&at(a)?de(a,{onClick:w,href:S}):R("a",{...u,onClick:w,href:S,className:f!=null&&f.call?f(i===s):f,children:a,ref:t})},Ee=e=>Array.isArray(e)?e.flatMap(t=>Ee(t&&t.type===E?t.props.children:t)):[e],kn=({children:e,location:t})=>{const n=ht(),[i]=Rt(n);for(const o of Ee(e)){let r=0;if(at(o)&&(r=Me(n.parser,o.props.path,t||i,o.props.nest))[0])return de(o,{match:r})}return null},bn="_container_nv5ix_1",wn="_check_nv5ix_7",ne={container:bn,check:wn},xn=({name:e,checked:t=!1,children:n,onChange:i})=>h("div",{className:ne.container,children:[h("input",{name:e,type:"checkbox",checked:t,className:ne.check,onChange:o=>i(!!o.currentTarget.checked)}),h("label",{for:e,children:n})]}),$n="_header_1vvsz_1",Sn="_left_1vvsz_10",Cn="_right_1vvsz_17",Nn="_active_1vvsz_36",tt={header:$n,left:Sn,right:Cn,active:Nn};class Ue extends C{stylize(t){return t?tt.active:""}render(){return h("header",{className:tt.header,children:[h("div",{className:tt.left,children:[h(Ct,{to:"/",className:this.stylize,children:"Home"}),h(Ct,{to:"/clicker",className:this.stylize,children:"Clicker"})]}),h("div",{className:tt.right,children:h(xn,{name:"enable_background",onChange:t=>{this.context.toggle(t),this.context.save()},checked:this.context.isEnabled,children:"Background"})})]})}}k(Ue,"contextType",$t);const Pn="_title_by80e_1",Mn="_information_by80e_7",et={title:Pn,information:Mn},En="_avatar_1n6fb_1",Un={avatar:En},Hn=({width:e,height:t})=>h("img",{title:"mirdukkkkk avatar",className:Un.avatar,alt:"mirdukkkkk avatar",width:e,height:t,src:"/avatar.webp"}),Tn="_links_1gnoo_1",Vn={links:Tn};class On extends C{constructor(){super(...arguments);k(this,"titles",[["https://life.mirdukkkkk.space","My Pixel Battle"],["https://source.mirdukkkkk.space","This website repo"],["https://github.mirdukkkkk.space","GitHub"],["https://discord.mirdukkkkk.space","Discord"],["https://youtube.mirdukkkkk.space","YouTube"]])}render(){return h("ul",{className:Vn.links,children:this.titles.map(([n,i])=>h("li",{children:h("a",{href:n,target:"_blank",children:i})}))})}}const zn="_rainbow_8r5i3_1",Fn={rainbow:zn};class L extends C{render({children:t}){return h("span",{className:Fn.rainbow,style:{color:this.context.color.value},onClick:this.context.nextColor,children:t})}}k(L,"contextType",zt);class Ln extends C{constructor(){super(...arguments);k(this,"greetings",["hello","hello there","hi","hey","g'day","howdy","peek-a-boo","hey there","yo"])}greet(){return this.greetings[Math.floor(Math.random()*this.greetings.length)]}render(){return h("strong",{children:this.greet()})}}const Rn=({className:e,width:t,height:n,name:i,code:o})=>h("img",{className:e,title:i,width:t,height:n,src:`/images/flag_${o}.svg`,alt:`${i} Flag`});class In extends C{render(){return h(E,{children:[h(Hn,{width:200,height:200}),h("div",{className:et.title,children:[h(Ln,{}),", i'm",h("div",{className:et.information,translate:!1,children:[" ",h(L,{children:"mirdukkkkk"})," ",h(Rn,{width:32,height:32,name:"New Zealand",code:"nz"})]})]}),h("p",{className:et.additional,children:"node.js, web"}),h("p",{className:et.additional,children:[h(L,{children:"junior"})," developer"]}),h(On,{})]})}}const An="_title_1k4lo_1",Wn="_parrot_1k4lo_5",Dn="_animate_1k4lo_35",Bn="_scaleUp_1k4lo_1",nt={title:An,parrot:Wn,animate:Dn,scaleUp:Bn};class jn extends C{constructor(){super();k(this,"version",{version:V.clicker.version});k(this,"counterRef",ae());O.get("clicker")||O.set("clicker",{...this.version,clicks:0}),this.state={clicks:q(O.get("clicker").clicks)}}handleClick(){const n=this.state.clicks.value+1;this.state.clicks.value=n,O.set("clicker",{...this.version,clicks:n});const i=this.counterRef.current;i&&(i.classList.remove(nt.animate),i.offsetWidth,i.classList.add(nt.animate))}render(){return h(E,{children:[h("div",{className:nt.title,translate:!1,ref:this.counterRef,children:this.state.clicks}),h("div",{title:"Click me!",className:nt.parrot,onClick:this.handleClick.bind(this),children:h("img",{src:"/images/parrot.svg",alt:"Parrot Emoji"})})]})}}const Yn="_title_1fdst_1",Xn="_comment_1fdst_9",pt={title:Yn,comment:Xn,return:"_return_1fdst_13"};class He extends C{componentWillMount(){this.context.color.value="#ff3737"}render(){return h(E,{children:[h("div",{className:pt.title,children:[h(L,{children:"404"}),h("p",{children:"Not Found"})]}),h("div",{className:pt.comment,children:[h("p",{children:["page ",h(L,{children:"doesn't"})," exist"]}),h("p",{children:["you're ",h(L,{children:"lost?"})]})]}),h(Ct,{to:"/",className:pt.return,children:["click to return ",h("img",{title:"Return to home",src:"/images/back.svg",width:"20",height:"20",alt:"Return to home"})]})]})}}k(He,"contextType",zt);const qn=[{path:"/",element:h(In,{})},{path:"/clicker",element:h(jn,{})},{path:void 0,element:h(He,{})}],Kn=()=>h(kn,{children:qn.map(({path:e,element:t})=>h(gn,{path:e,children:t}))}),Gn="_block_1n7l1_1",Jn="_indention_1n7l1_8",ie={block:Gn,indention:Jn};class Zn extends C{componentWillMount(){F.load()}render(){return h($t.Provider,{value:F,children:[h($t.Consumer,{children:()=>F.isEnabled.value&&h(en,{})}),h("div",{className:ie.block,children:[h(Ue,{}),h("div",{className:ie.indention}),h(zt.Provider,{value:St,children:h(Kn,{})})]})]})}}Ie(h(Zn,{}),document.getElementById("app"));