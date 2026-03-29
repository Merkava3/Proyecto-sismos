import{r as m,R as za,g as Da,a as ye,j as s,L as ve,b as Se,u as Xe,c as Je,f as Gt,s as $a,t as Ua,d as Wa,e as Ba,h as Ha,i as Ya,k as Va,l as qa,m as Ga,n as Ka,o as Kt,p as Xa,q as Ja,v as Qe,G as Rn,w as Qa,x as Za,y as er,z as tr,A as nr,B as ar,C as rr,D as ir,E as or,F as sr,T as lr}from"./index-CdsaOWym.js";/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},xe.apply(this,arguments)}var q;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(q||(q={}));const Xt="popstate";function cr(e){e===void 0&&(e={});function t(a,r){let{pathname:o,search:i,hash:l}=a.location;return mt("",{pathname:o,search:i,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:Be(r)}return fr(t,n,null,e)}function M(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ln(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ur(){return Math.random().toString(36).substr(2,8)}function Jt(e,t){return{usr:e.state,key:e.key,idx:t}}function mt(e,t,n,a){return n===void 0&&(n=null),xe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fe(t):t,{state:n,key:t&&t.key||a||ur()})}function Be(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function fe(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function fr(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:o=!1}=a,i=r.history,l=q.Pop,c=null,u=f();u==null&&(u=0,i.replaceState(xe({},i.state,{idx:u}),""));function f(){return(i.state||{idx:null}).idx}function d(){l=q.Pop;let v=f(),k=v==null?null:v-u;u=v,c&&c({action:l,location:w.location,delta:k})}function p(v,k){l=q.Push;let g=mt(w.location,v,k);u=f()+1;let C=Jt(g,u),j=w.createHref(g);try{i.pushState(C,"",j)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(j)}o&&c&&c({action:l,location:w.location,delta:1})}function h(v,k){l=q.Replace;let g=mt(w.location,v,k);u=f();let C=Jt(g,u),j=w.createHref(g);i.replaceState(C,"",j),o&&c&&c({action:l,location:w.location,delta:0})}function y(v){let k=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof v=="string"?v:Be(v);return g=g.replace(/ $/,"%20"),M(k,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,k)}let w={get action(){return l},get location(){return e(r,i)},listen(v){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Xt,d),c=v,()=>{r.removeEventListener(Xt,d),c=null}},createHref(v){return t(r,v)},createURL:y,encodeLocation(v){let k=y(v);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:p,replace:h,go(v){return i.go(v)}};return w}var Qt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qt||(Qt={}));function dr(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?fe(t):t,r=ce(a.pathname||"/",n);if(r==null)return null;let o=In(e);mr(o);let i=null;for(let l=0;i==null&&l<o.length;++l){let c=jr(r);i=kr(o[l],c)}return i}function In(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let r=(o,i,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};c.relativePath.startsWith("/")&&(M(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let u=G([a,c.relativePath]),f=n.concat(c);o.children&&o.children.length>0&&(M(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),In(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:xr(u,o.index),routesMeta:f})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))r(o,i);else for(let c of Tn(o.path))r(o,i,c)}),t}function Tn(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(a.length===0)return r?[o,""]:[o];let i=Tn(a.join("/")),l=[];return l.push(...i.map(c=>c===""?o:[o,c].join("/"))),r&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function mr(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:wr(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const pr=/^:[\w-]+$/,hr=3,vr=2,gr=1,br=10,yr=-2,Zt=e=>e==="*";function xr(e,t){let n=e.split("/"),a=n.length;return n.some(Zt)&&(a+=yr),t&&(a+=vr),n.filter(r=>!Zt(r)).reduce((r,o)=>r+(pr.test(o)?hr:o===""?gr:br),a)}function wr(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function kr(e,t){let{routesMeta:n}=e,a={},r="/",o=[];for(let i=0;i<n.length;++i){let l=n[i],c=i===n.length-1,u=r==="/"?t:t.slice(r.length)||"/",f=pt({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!f)return null;Object.assign(a,f.params);let d=l.route;o.push({params:a,pathname:G([r,f.pathname]),pathnameBase:Pr(G([r,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(r=G([r,f.pathnameBase]))}return o}function pt(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Cr(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],i=o.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:a.reduce((u,f,d)=>{let{paramName:p,isOptional:h}=f;if(p==="*"){let w=l[d]||"";i=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[d];return h&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function Cr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ln(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(a.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function jr(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ln(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ce(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Nr(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?fe(e):e;return{pathname:n?n.startsWith("/")?n:Er(n,t):t,search:Ar(a),hash:Or(r)}}function Er(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ot(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sr(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _n(e,t){let n=Sr(e);return t?n.map((a,r)=>r===e.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Fn(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=fe(e):(r=xe({},e),M(!r.pathname||!r.pathname.includes("?"),ot("?","pathname","search",r)),M(!r.pathname||!r.pathname.includes("#"),ot("#","pathname","hash",r)),M(!r.search||!r.search.includes("#"),ot("#","search","hash",r)));let o=e===""||r.pathname==="",i=o?"/":r.pathname,l;if(i==null)l=n;else{let d=t.length-1;if(!a&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),d-=1;r.pathname=p.join("/")}l=d>=0?t[d]:"/"}let c=Nr(r,l),u=i&&i!=="/"&&i.endsWith("/"),f=(o||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const G=e=>e.join("/").replace(/\/\/+/g,"/"),Pr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ar=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Or=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Mr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zn=["post","put","patch","delete"];new Set(zn);const Rr=["get",...zn];new Set(Rr);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},we.apply(this,arguments)}const Ze=m.createContext(null),Dn=m.createContext(null),Q=m.createContext(null),et=m.createContext(null),re=m.createContext({outlet:null,matches:[],isDataRoute:!1}),$n=m.createContext(null);function Lr(e,t){let{relative:n}=t===void 0?{}:t;Pe()||M(!1);let{basename:a,navigator:r}=m.useContext(Q),{hash:o,pathname:i,search:l}=tt(e,{relative:n}),c=i;return a!=="/"&&(c=i==="/"?a:G([a,i])),r.createHref({pathname:c,search:l,hash:o})}function Pe(){return m.useContext(et)!=null}function de(){return Pe()||M(!1),m.useContext(et).location}function Un(e){m.useContext(Q).static||m.useLayoutEffect(e)}function Ir(){let{isDataRoute:e}=m.useContext(re);return e?qr():Tr()}function Tr(){Pe()||M(!1);let e=m.useContext(Ze),{basename:t,future:n,navigator:a}=m.useContext(Q),{matches:r}=m.useContext(re),{pathname:o}=de(),i=JSON.stringify(_n(r,n.v7_relativeSplatPath)),l=m.useRef(!1);return Un(()=>{l.current=!0}),m.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){a.go(u);return}let d=Fn(u,JSON.parse(i),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:G([t,d.pathname])),(f.replace?a.replace:a.push)(d,f.state,f)},[t,a,i,o,e])}function tt(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=m.useContext(Q),{matches:r}=m.useContext(re),{pathname:o}=de(),i=JSON.stringify(_n(r,a.v7_relativeSplatPath));return m.useMemo(()=>Fn(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function _r(e,t){return Fr(e,t)}function Fr(e,t,n,a){Pe()||M(!1);let{navigator:r}=m.useContext(Q),{matches:o}=m.useContext(re),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let u=de(),f;if(t){var d;let v=typeof t=="string"?fe(t):t;c==="/"||(d=v.pathname)!=null&&d.startsWith(c)||M(!1),f=v}else f=u;let p=f.pathname||"/",h=p;if(c!=="/"){let v=c.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=dr(e,{pathname:h}),w=Wr(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:G([c,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:G([c,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n,a);return t&&w?m.createElement(et.Provider,{value:{location:we({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:q.Pop}},w):w}function zr(){let e=Vr(),t=Mr(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:r},n):null,null)}const Dr=m.createElement(zr,null);class $r extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(re.Provider,{value:this.props.routeContext},m.createElement($n.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ur(e){let{routeContext:t,match:n,children:a}=e,r=m.useContext(Ze);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(re.Provider,{value:t},a)}function Wr(e,t,n,a){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let f=i.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);f>=0||M(!1),i=i.slice(0,Math.min(i.length,f+1))}let c=!1,u=-1;if(n&&a&&a.v7_partialHydration)for(let f=0;f<i.length;f++){let d=i[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:p,errors:h}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||y){c=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((f,d,p)=>{let h,y=!1,w=null,v=null;n&&(h=l&&d.route.id?l[d.route.id]:void 0,w=d.route.errorElement||Dr,c&&(u<0&&p===0?(y=!0,v=null):u===p&&(y=!0,v=d.route.hydrateFallbackElement||null)));let k=t.concat(i.slice(0,p+1)),g=()=>{let C;return h?C=w:y?C=v:d.route.Component?C=m.createElement(d.route.Component,null):d.route.element?C=d.route.element:C=f,m.createElement(Ur,{match:d,routeContext:{outlet:f,matches:k,isDataRoute:n!=null},children:C})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?m.createElement($r,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:g(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):g()},null)}var Wn=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wn||{}),He=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(He||{});function Br(e){let t=m.useContext(Ze);return t||M(!1),t}function Hr(e){let t=m.useContext(Dn);return t||M(!1),t}function Yr(e){let t=m.useContext(re);return t||M(!1),t}function Bn(e){let t=Yr(),n=t.matches[t.matches.length-1];return n.route.id||M(!1),n.route.id}function Vr(){var e;let t=m.useContext($n),n=Hr(He.UseRouteError),a=Bn(He.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function qr(){let{router:e}=Br(Wn.UseNavigateStable),t=Bn(He.UseNavigateStable),n=m.useRef(!1);return Un(()=>{n.current=!0}),m.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,we({fromRouteId:t},o)))},[e,t])}function T(e){M(!1)}function Gr(e){let{basename:t="/",children:n=null,location:a,navigationType:r=q.Pop,navigator:o,static:i=!1,future:l}=e;Pe()&&M(!1);let c=t.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:c,navigator:o,static:i,future:we({v7_relativeSplatPath:!1},l)}),[c,l,o,i]);typeof a=="string"&&(a=fe(a));let{pathname:f="/",search:d="",hash:p="",state:h=null,key:y="default"}=a,w=m.useMemo(()=>{let v=ce(f,c);return v==null?null:{location:{pathname:v,search:d,hash:p,state:h,key:y},navigationType:r}},[c,f,d,p,h,y,r]);return w==null?null:m.createElement(Q.Provider,{value:u},m.createElement(et.Provider,{children:n,value:w}))}function Kr(e){let{children:t,location:n}=e;return _r(ht(t),n)}new Promise(()=>{});function ht(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(a,r)=>{if(!m.isValidElement(a))return;let o=[...t,r];if(a.type===m.Fragment){n.push.apply(n,ht(a.props.children,o));return}a.type!==T&&M(!1),!a.props.index||!a.props.children||M(!1);let i={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(i.children=ht(a.props.children,o)),n.push(i)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ye(){return Ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ye.apply(this,arguments)}function Hn(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Xr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jr(e,t){return e.button===0&&(!t||t==="_self")&&!Xr(e)}const Qr=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Zr=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ei="6";try{window.__reactRouterVersion=ei}catch{}const ti=m.createContext({isTransitioning:!1}),ni="startTransition",en=za[ni];function ai(e){let{basename:t,children:n,future:a,window:r}=e,o=m.useRef();o.current==null&&(o.current=cr({window:r,v5Compat:!0}));let i=o.current,[l,c]=m.useState({action:i.action,location:i.location}),{v7_startTransition:u}=a||{},f=m.useCallback(d=>{u&&en?en(()=>c(d)):c(d)},[c,u]);return m.useLayoutEffect(()=>i.listen(f),[i,f]),m.createElement(Gr,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,future:a})}const ri=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ii=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yn=m.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:o,replace:i,state:l,target:c,to:u,preventScrollReset:f,unstable_viewTransition:d}=t,p=Hn(t,Qr),{basename:h}=m.useContext(Q),y,w=!1;if(typeof u=="string"&&ii.test(u)&&(y=u,ri))try{let C=new URL(window.location.href),j=u.startsWith("//")?new URL(C.protocol+u):new URL(u),S=ce(j.pathname,h);j.origin===C.origin&&S!=null?u=S+j.search+j.hash:w=!0}catch{}let v=Lr(u,{relative:r}),k=si(u,{replace:i,state:l,target:c,preventScrollReset:f,relative:r,unstable_viewTransition:d});function g(C){a&&a(C),C.defaultPrevented||k(C)}return m.createElement("a",Ye({},p,{href:y||v,onClick:w||o?a:g,ref:n,target:c}))}),$=m.forwardRef(function(t,n){let{"aria-current":a="page",caseSensitive:r=!1,className:o="",end:i=!1,style:l,to:c,unstable_viewTransition:u,children:f}=t,d=Hn(t,Zr),p=tt(c,{relative:d.relative}),h=de(),y=m.useContext(Dn),{navigator:w,basename:v}=m.useContext(Q),k=y!=null&&li(p)&&u===!0,g=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,C=h.pathname,j=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(C=C.toLowerCase(),j=j?j.toLowerCase():null,g=g.toLowerCase()),j&&v&&(j=ce(j,v)||j);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let N=C===g||!i&&C.startsWith(g)&&C.charAt(S)==="/",L=j!=null&&(j===g||!i&&j.startsWith(g)&&j.charAt(g.length)==="/"),Z={isActive:N,isPending:L,isTransitioning:k},F=N?a:void 0,pe;typeof o=="function"?pe=o(Z):pe=[o,N?"active":null,L?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let Fa=typeof l=="function"?l(Z):l;return m.createElement(Yn,Ye({},d,{"aria-current":F,className:pe,ref:n,style:Fa,to:c,unstable_viewTransition:u}),typeof f=="function"?f(Z):f)});var vt;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vt||(vt={}));var tn;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tn||(tn={}));function oi(e){let t=m.useContext(Ze);return t||M(!1),t}function si(e,t){let{target:n,replace:a,state:r,preventScrollReset:o,relative:i,unstable_viewTransition:l}=t===void 0?{}:t,c=Ir(),u=de(),f=tt(e,{relative:i});return m.useCallback(d=>{if(Jr(d,n)){d.preventDefault();let p=a!==void 0?a:Be(u)===Be(f);c(e,{replace:p,state:r,preventScrollReset:o,relative:i,unstable_viewTransition:l})}},[u,c,f,a,r,n,e,o,i,l])}function li(e,t){t===void 0&&(t={});let n=m.useContext(ti);n==null&&M(!1);let{basename:a}=oi(vt.useViewTransitionState),r=tt(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=ce(n.currentLocation.pathname,a)||n.currentLocation.pathname,i=ce(n.nextLocation.pathname,a)||n.nextLocation.pathname;return pt(r.pathname,i)!=null||pt(r.pathname,o)!=null}function nn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nn(Object(n),!0).forEach(function(a){R(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ve(e){"@babel/helpers - typeof";return Ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ve(e)}function ci(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ui(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function fi(e,t,n){return t&&ui(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rt(e,t){return mi(e)||hi(e,t)||Vn(e,t)||gi()}function Ae(e){return di(e)||pi(e)||Vn(e)||vi()}function di(e){if(Array.isArray(e))return gt(e)}function mi(e){if(Array.isArray(e))return e}function pi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,l;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(c){o=!0,l=c}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw l}}return a}}function Vn(e,t){if(e){if(typeof e=="string")return gt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gt(e,t)}}function gt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function vi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var an=function(){},Lt={},qn={},Gn=null,Kn={mark:an,measure:an};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&(qn=document),typeof MutationObserver<"u"&&(Gn=MutationObserver),typeof performance<"u"&&(Kn=performance)}catch{}var bi=Lt.navigator||{},rn=bi.userAgent,on=rn===void 0?"":rn,K=Lt,A=qn,sn=Gn,Re=Kn;K.document;var Y=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",Xn=~on.indexOf("MSIE")||~on.indexOf("Trident/"),Le,Ie,Te,_e,Fe,W="___FONT_AWESOME___",bt=16,Jn="fa",Qn="svg-inline--fa",ne="data-fa-i2svg",yt="data-fa-pseudo-element",yi="data-fa-pseudo-element-pending",It="data-prefix",Tt="data-icon",ln="fontawesome-i2svg",xi="async",wi=["HTML","HEAD","STYLE","SCRIPT"],Zn=function(){try{return!0}catch{return!1}}(),P="classic",O="sharp",_t=[P,O];function Oe(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[P]}})}var ke=Oe((Le={},R(Le,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),R(Le,O,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Le)),Ce=Oe((Ie={},R(Ie,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),R(Ie,O,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ie)),je=Oe((Te={},R(Te,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),R(Te,O,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Te)),ki=Oe((_e={},R(_e,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),R(_e,O,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),_e)),Ci=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ea="fa-layers-text",ji=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ni=Oe((Fe={},R(Fe,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),R(Fe,O,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Fe)),ta=[1,2,3,4,5,6,7,8,9,10],Ei=ta.concat([11,12,13,14,15,16,17,18,19,20]),Si=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ee={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ne=new Set;Object.keys(Ce[P]).map(Ne.add.bind(Ne));Object.keys(Ce[O]).map(Ne.add.bind(Ne));var Pi=[].concat(_t,Ae(Ne),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ee.GROUP,ee.SWAP_OPACITY,ee.PRIMARY,ee.SECONDARY]).concat(ta.map(function(e){return"".concat(e,"x")})).concat(Ei.map(function(e){return"w-".concat(e)})),ge=K.FontAwesomeConfig||{};function Ai(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Oi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var Mi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Mi.forEach(function(e){var t=Rt(e,2),n=t[0],a=t[1],r=Oi(Ai(n));r!=null&&(ge[a]=r)})}var na={styleDefault:"solid",familyDefault:"classic",cssPrefix:Jn,replacementClass:Qn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ge.familyPrefix&&(ge.cssPrefix=ge.familyPrefix);var ue=b(b({},na),ge);ue.autoReplaceSvg||(ue.observeMutations=!1);var x={};Object.keys(na).forEach(function(e){Object.defineProperty(x,e,{enumerable:!0,set:function(n){ue[e]=n,be.forEach(function(a){return a(x)})},get:function(){return ue[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(t){ue.cssPrefix=t,be.forEach(function(n){return n(x)})},get:function(){return ue.cssPrefix}});K.FontAwesomeConfig=x;var be=[];function Ri(e){return be.push(e),function(){be.splice(be.indexOf(e),1)}}var V=bt,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Li(e){if(!(!e||!Y)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=A.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return A.head.insertBefore(t,a),e}}var Ii="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ee(){for(var e=12,t="";e-- >0;)t+=Ii[Math.random()*62|0];return t}function me(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ft(e){return e.classList?me(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function aa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ti(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(aa(e[n]),'" ')},"").trim()}function nt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function zt(e){return e.size!==D.size||e.x!==D.x||e.y!==D.y||e.rotate!==D.rotate||e.flipX||e.flipY}function _i(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(i," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:u}}function Fi(e){var t=e.transform,n=e.width,a=n===void 0?bt:n,r=e.height,o=r===void 0?bt:r,i=e.startCentered,l=i===void 0?!1:i,c="";return l&&Xn?c+="translate(".concat(t.x/V-a/2,"em, ").concat(t.y/V-o/2,"em) "):l?c+="translate(calc(-50% + ".concat(t.x/V,"em), calc(-50% + ").concat(t.y/V,"em)) "):c+="translate(".concat(t.x/V,"em, ").concat(t.y/V,"em) "),c+="scale(".concat(t.size/V*(t.flipX?-1:1),", ").concat(t.size/V*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var zi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ra(){var e=Jn,t=Qn,n=x.cssPrefix,a=x.replacementClass,r=zi;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var cn=!1;function st(){x.autoAddCss&&!cn&&(Li(ra()),cn=!0)}var Di={mixout:function(){return{dom:{css:ra,insertCss:st}}},hooks:function(){return{beforeDOMElementCreation:function(){st()},beforeI2svg:function(){st()}}}},B=K||{};B[W]||(B[W]={});B[W].styles||(B[W].styles={});B[W].hooks||(B[W].hooks={});B[W].shims||(B[W].shims=[]);var _=B[W],ia=[],$i=function e(){A.removeEventListener("DOMContentLoaded",e),qe=1,ia.map(function(t){return t()})},qe=!1;Y&&(qe=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),qe||A.addEventListener("DOMContentLoaded",$i));function Ui(e){Y&&(qe?setTimeout(e,0):ia.push(e))}function Me(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?aa(e):"<".concat(t," ").concat(Ti(a),">").concat(o.map(Me).join(""),"</").concat(t,">")}function un(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var lt=function(t,n,a,r){var o=Object.keys(t),i=o.length,l=n,c,u,f;for(a===void 0?(c=1,f=t[o[0]]):(c=0,f=a);c<i;c++)u=o[c],f=l(f,t[u],u,t);return f};function Wi(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function xt(e){var t=Wi(e);return t.length===1?t[0].toString(16):null}function Bi(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function fn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function wt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=fn(t);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(e,fn(t)):_.styles[e]=b(b({},_.styles[e]||{}),o),e==="fas"&&wt("fa",t)}var ze,De,$e,ie=_.styles,Hi=_.shims,Yi=(ze={},R(ze,P,Object.values(je[P])),R(ze,O,Object.values(je[O])),ze),Dt=null,oa={},sa={},la={},ca={},ua={},Vi=(De={},R(De,P,Object.keys(ke[P])),R(De,O,Object.keys(ke[O])),De);function qi(e){return~Pi.indexOf(e)}function Gi(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!qi(r)?r:null}var fa=function(){var t=function(o){return lt(ie,function(i,l,c){return i[c]=lt(l,o,{}),i},{})};oa=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var l=o[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){r[c.toString(16)]=i})}return r}),sa=t(function(r,o,i){if(r[i]=i,o[2]){var l=o[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){r[c]=i})}return r}),ua=t(function(r,o,i){var l=o[2];return r[i]=i,l.forEach(function(c){r[c]=i}),r});var n="far"in ie||x.autoFetchSvg,a=lt(Hi,function(r,o){var i=o[0],l=o[1],c=o[2];return l==="far"&&!n&&(l="fas"),typeof i=="string"&&(r.names[i]={prefix:l,iconName:c}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:l,iconName:c}),r},{names:{},unicodes:{}});la=a.names,ca=a.unicodes,Dt=at(x.styleDefault,{family:x.familyDefault})};Ri(function(e){Dt=at(e.styleDefault,{family:x.familyDefault})});fa();function $t(e,t){return(oa[e]||{})[t]}function Ki(e,t){return(sa[e]||{})[t]}function te(e,t){return(ua[e]||{})[t]}function da(e){return la[e]||{prefix:null,iconName:null}}function Xi(e){var t=ca[e],n=$t("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return Dt}var Ut=function(){return{prefix:null,iconName:null,rest:[]}};function at(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?P:n,r=ke[a][e],o=Ce[a][e]||Ce[a][r],i=e in _.styles?e:null;return o||i||null}var dn=($e={},R($e,P,Object.keys(je[P])),R($e,O,Object.keys(je[O])),$e);function rt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,o=(t={},R(t,P,"".concat(x.cssPrefix,"-").concat(P)),R(t,O,"".concat(x.cssPrefix,"-").concat(O)),t),i=null,l=P;(e.includes(o[P])||e.some(function(u){return dn[P].includes(u)}))&&(l=P),(e.includes(o[O])||e.some(function(u){return dn[O].includes(u)}))&&(l=O);var c=e.reduce(function(u,f){var d=Gi(x.cssPrefix,f);if(ie[f]?(f=Yi[l].includes(f)?ki[l][f]:f,i=f,u.prefix=f):Vi[l].indexOf(f)>-1?(i=f,u.prefix=at(f,{family:l})):d?u.iconName=d:f!==x.replacementClass&&f!==o[P]&&f!==o[O]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var p=i==="fa"?da(u.iconName):{},h=te(u.prefix,u.iconName);p.prefix&&(i=null),u.iconName=p.iconName||h||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!ie.far&&ie.fas&&!x.autoFetchSvg&&(u.prefix="fas")}return u},Ut());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===O&&(ie.fass||x.autoFetchSvg)&&(c.prefix="fass",c.iconName=te(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||i==="fa")&&(c.prefix=X()||"fas"),c}var Ji=function(){function e(){ci(this,e),this.definitions={}}return fi(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(l){n.definitions[l]=b(b({},n.definitions[l]||{}),i[l]),wt(l,i[l]);var c=je[P][l];c&&wt(c,i[l]),fa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],l=i.prefix,c=i.iconName,u=i.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][c]=u}),n}}]),e}(),mn=[],oe={},le={},Qi=Object.keys(le);function Zi(e,t){var n=t.mixoutsTo;return mn=e,oe={},Object.keys(le).forEach(function(a){Qi.indexOf(a)===-1&&delete le[a]}),mn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),Ve(r[i])==="object"&&Object.keys(r[i]).forEach(function(l){n[i]||(n[i]={}),n[i][l]=r[i][l]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){oe[i]||(oe[i]=[]),oe[i].push(o[i])})}a.provides&&a.provides(le)}),n}function kt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=oe[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=oe[e]||[];r.forEach(function(o){o.apply(null,n)})}function H(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return le[e]?le[e].apply(null,t):void 0}function Ct(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||X();if(t)return t=te(n,t)||t,un(ma.definitions,n,t)||un(_.styles,n,t)}var ma=new Ji,eo=function(){x.autoReplaceSvg=!1,x.observeMutations=!1,ae("noAuto")},to={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(ae("beforeI2svg",t),H("pseudoElements2svg",t),H("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,Ui(function(){ao({autoReplaceSvgRoot:n}),ae("watch",t)})}},no={icon:function(t){if(t===null)return null;if(Ve(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:te(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=at(t[0]);return{prefix:a,iconName:te(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(x.cssPrefix,"-"))>-1||t.match(Ci))){var r=rt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:te(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=X();return{prefix:o,iconName:te(o,t)||t}}}},I={noAuto:eo,config:x,dom:to,parse:no,library:ma,findIconDefinition:Ct,toHtml:Me},ao=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?A:n;(Object.keys(_.styles).length>0||x.autoFetchSvg)&&Y&&x.autoReplaceSvg&&I.dom.i2svg({node:a})};function it(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Me(a)})}}),Object.defineProperty(e,"node",{get:function(){if(Y){var a=A.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function ro(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(zt(i)&&n.found&&!a.found){var l=n.width,c=n.height,u={x:l/c/2,y:.5};r.style=nt(b(b({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function io(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(x.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},r),{},{id:i}),children:a}]}]}function Wt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,l=e.symbol,c=e.title,u=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,h=p===void 0?!1:p,y=a.found?a:n,w=y.width,v=y.height,k=r==="fak",g=[x.replacementClass,o?"".concat(x.cssPrefix,"-").concat(o):""].filter(function(F){return d.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(d.classes).join(" "),C={children:[],attributes:b(b({},d.attributes),{},{"data-prefix":r,"data-icon":o,class:g,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(v)})},j=k&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/v*16*.0625,"em")}:{};h&&(C.attributes[ne]=""),c&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(f||Ee())},children:[c]}),delete C.attributes.title);var S=b(b({},C),{},{prefix:r,iconName:o,main:n,mask:a,maskId:u,transform:i,symbol:l,styles:b(b({},j),d.styles)}),N=a.found&&n.found?H("generateAbstractMask",S)||{children:[],attributes:{}}:H("generateAbstractIcon",S)||{children:[],attributes:{}},L=N.children,Z=N.attributes;return S.children=L,S.attributes=Z,l?io(S):ro(S)}function pn(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.title,i=e.extra,l=e.watchable,c=l===void 0?!1:l,u=b(b(b({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});c&&(u[ne]="");var f=b({},i.styles);zt(r)&&(f.transform=Fi({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var d=nt(f);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function oo(e){var t=e.content,n=e.title,a=e.extra,r=b(b(b({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=nt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var ct=_.styles;function jt(e){var t=e[0],n=e[1],a=e.slice(4),r=Rt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(ee.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(ee.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(ee.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var so={found:!1,width:512,height:512};function lo(e,t){!Zn&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nt(e,t){var n=t;return t==="fa"&&x.styleDefault!==null&&(t=X()),new Promise(function(a,r){if(H("missingIconAbstract"),n==="fa"){var o=da(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ct[t]&&ct[t][e]){var i=ct[t][e];return a(jt(i))}lo(e,t),a(b(b({},so),{},{icon:x.showMissingIcons&&e?H("missingIconAbstract")||{}:{}}))})}var hn=function(){},Et=x.measurePerformance&&Re&&Re.mark&&Re.measure?Re:{mark:hn,measure:hn},he='FA "6.5.2"',co=function(t){return Et.mark("".concat(he," ").concat(t," begins")),function(){return pa(t)}},pa=function(t){Et.mark("".concat(he," ").concat(t," ends")),Et.measure("".concat(he," ").concat(t),"".concat(he," ").concat(t," begins"),"".concat(he," ").concat(t," ends"))},Bt={begin:co,end:pa},Ue=function(){};function vn(e){var t=e.getAttribute?e.getAttribute(ne):null;return typeof t=="string"}function uo(e){var t=e.getAttribute?e.getAttribute(It):null,n=e.getAttribute?e.getAttribute(Tt):null;return t&&n}function fo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function mo(){if(x.autoReplaceSvg===!0)return We.replace;var e=We[x.autoReplaceSvg];return e||We.replace}function po(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function ho(e){return A.createElement(e)}function ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?po:ho:n;if(typeof e=="string")return A.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(ha(i,{ceFn:a}))}),r}function vo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var We={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(ha(r),n)}),n.getAttribute(ne)===null&&x.keepOriginalSource){var a=A.createComment(vo(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Ft(n).indexOf(x.replacementClass))return We.replace(t);var r=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(l,c){return c===x.replacementClass||c.match(r)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(l){return Me(l)}).join(`
`);n.setAttribute(ne,""),n.innerHTML=i}};function gn(e){e()}function va(e,t){var n=typeof t=="function"?t:Ue;if(e.length===0)n();else{var a=gn;x.mutateApproach===xi&&(a=K.requestAnimationFrame||gn),a(function(){var r=mo(),o=Bt.begin("mutate");e.map(r),o(),n()})}}var Ht=!1;function ga(){Ht=!0}function St(){Ht=!1}var Ge=null;function bn(e){if(sn&&x.observeMutations){var t=e.treeCallback,n=t===void 0?Ue:t,a=e.nodeCallback,r=a===void 0?Ue:a,o=e.pseudoElementsCallback,i=o===void 0?Ue:o,l=e.observeMutationsRoot,c=l===void 0?A:l;Ge=new sn(function(u){if(!Ht){var f=X();me(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!vn(d.addedNodes[0])&&(x.searchPseudoElements&&i(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&x.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&vn(d.target)&&~Si.indexOf(d.attributeName))if(d.attributeName==="class"&&uo(d.target)){var p=rt(Ft(d.target)),h=p.prefix,y=p.iconName;d.target.setAttribute(It,h||f),y&&d.target.setAttribute(Tt,y)}else fo(d.target)&&r(d.target)})}}),Y&&Ge.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function go(){Ge&&Ge.disconnect()}function bo(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(a[i]=l.join(":").trim()),a},{})),n}function yo(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=rt(Ft(e));return r.prefix||(r.prefix=X()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ki(r.prefix,e.innerText)||$t(r.prefix,xt(e.innerText))),!r.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function xo(e){var t=me(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return x.autoA11y&&(n?t["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(a||Ee()):(t["aria-hidden"]="true",t.focusable="false")),t}function wo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yo(e),a=n.iconName,r=n.prefix,o=n.rest,i=xo(e),l=kt("parseNodeAttributes",{},e),c=t.styleParser?bo(e):[];return b({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:i}},l)}var ko=_.styles;function ba(e){var t=x.autoReplaceSvg==="nest"?yn(e,{styleParser:!1}):yn(e);return~t.extra.classes.indexOf(ea)?H("generateLayersText",e,t):H("generateSvgReplacementMutation",e,t)}var J=new Set;_t.map(function(e){J.add("fa-".concat(e))});Object.keys(ke[P]).map(J.add.bind(J));Object.keys(ke[O]).map(J.add.bind(J));J=Ae(J);function xn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var n=A.documentElement.classList,a=function(d){return n.add("".concat(ln,"-").concat(d))},r=function(d){return n.remove("".concat(ln,"-").concat(d))},o=x.autoFetchSvg?J:_t.map(function(f){return"fa-".concat(f)}).concat(Object.keys(ko));o.includes("fa")||o.push("fa");var i=[".".concat(ea,":not([").concat(ne,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(ne,"])")})).join(", ");if(i.length===0)return Promise.resolve();var l=[];try{l=me(e.querySelectorAll(i))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var c=Bt.begin("onTree"),u=l.reduce(function(f,d){try{var p=ba(d);p&&f.push(p)}catch(h){Zn||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(p){va(p,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(p){c(),d(p)})})}function Co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ba(e).then(function(n){n&&va([n],t)})}function jo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Ct(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Ct(r||{})),e(a,b(b({},n),{},{mask:r}))}}var No=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?D:a,o=n.symbol,i=o===void 0?!1:o,l=n.mask,c=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,p=d===void 0?null:d,h=n.titleId,y=h===void 0?null:h,w=n.classes,v=w===void 0?[]:w,k=n.attributes,g=k===void 0?{}:k,C=n.styles,j=C===void 0?{}:C;if(t){var S=t.prefix,N=t.iconName,L=t.icon;return it(b({type:"icon"},t),function(){return ae("beforeDOMElementCreation",{iconDefinition:t,params:n}),x.autoA11y&&(p?g["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(y||Ee()):(g["aria-hidden"]="true",g.focusable="false")),Wt({icons:{main:jt(L),mask:c?jt(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:N,transform:b(b({},D),r),symbol:i,title:p,maskId:f,titleId:y,extra:{attributes:g,styles:j,classes:v}})})}},Eo={mixout:function(){return{icon:jo(No)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xn,n.nodeCallback=Co,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?A:a,o=n.callback,i=o===void 0?function(){}:o;return xn(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,l=a.prefix,c=a.transform,u=a.symbol,f=a.mask,d=a.maskId,p=a.extra;return new Promise(function(h,y){Promise.all([Nt(r,l),f.iconName?Nt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var v=Rt(w,2),k=v[0],g=v[1];h([n,Wt({icons:{main:k,mask:g},prefix:l,iconName:r,transform:c,symbol:u,maskId:d,title:o,titleId:i,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,l=n.styles,c=nt(l);c.length>0&&(r.style=c);var u;return zt(i)&&(u=H("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},So={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return it({type:"layer"},function(){ae("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(l){Array.isArray(l)?l.map(function(c){i=i.concat(c.abstract)}):i=i.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers")].concat(Ae(o)).join(" ")},children:i}]})}}}},Po={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,l=i===void 0?[]:i,c=a.attributes,u=c===void 0?{}:c,f=a.styles,d=f===void 0?{}:f;return it({type:"counter",content:n},function(){return ae("beforeDOMElementCreation",{content:n,params:a}),oo({content:n.toString(),title:o,extra:{attributes:u,styles:d,classes:["".concat(x.cssPrefix,"-layers-counter")].concat(Ae(l))}})})}}}},Ao={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?D:r,i=a.title,l=i===void 0?null:i,c=a.classes,u=c===void 0?[]:c,f=a.attributes,d=f===void 0?{}:f,p=a.styles,h=p===void 0?{}:p;return it({type:"text",content:n},function(){return ae("beforeDOMElementCreation",{content:n,params:a}),pn({content:n,transform:b(b({},D),o),title:l,extra:{attributes:d,styles:h,classes:["".concat(x.cssPrefix,"-layers-text")].concat(Ae(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,l=null,c=null;if(Xn){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,c=f.height/u}return x.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,pn({content:n.innerHTML,width:l,height:c,transform:o,title:r,extra:i,watchable:!0})])}}},Oo=new RegExp('"',"ug"),wn=[1105920,1112319];function Mo(e){var t=e.replace(Oo,""),n=Bi(t,0),a=n>=wn[0]&&n<=wn[1],r=t.length===2?t[0]===t[1]:!1;return{value:xt(r?t[0]:t),isSecondary:a||r}}function kn(e,t){var n="".concat(yi).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=me(e.children),i=o.filter(function(L){return L.getAttribute(yt)===t})[0],l=K.getComputedStyle(e,t),c=l.getPropertyValue("font-family").match(ji),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(i&&!c)return e.removeChild(i),a();if(c&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),p=~["Sharp"].indexOf(c[2])?O:P,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ce[p][c[2].toLowerCase()]:Ni[p][u],y=Mo(d),w=y.value,v=y.isSecondary,k=c[0].startsWith("FontAwesome"),g=$t(h,w),C=g;if(k){var j=Xi(w);j.iconName&&j.prefix&&(g=j.iconName,h=j.prefix)}if(g&&!v&&(!i||i.getAttribute(It)!==h||i.getAttribute(Tt)!==C)){e.setAttribute(n,C),i&&e.removeChild(i);var S=wo(),N=S.extra;N.attributes[yt]=t,Nt(g,h).then(function(L){var Z=Wt(b(b({},S),{},{icons:{main:L,mask:Ut()},prefix:h,iconName:C,extra:N,watchable:!0})),F=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=Z.map(function(pe){return Me(pe)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ro(e){return Promise.all([kn(e,"::before"),kn(e,"::after")])}function Lo(e){return e.parentNode!==document.head&&!~wi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Cn(e){if(Y)return new Promise(function(t,n){var a=me(e.querySelectorAll("*")).filter(Lo).map(Ro),r=Bt.begin("searchPseudoElements");ga(),Promise.all(a).then(function(){r(),St(),t()}).catch(function(){r(),St(),n()})})}var Io={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Cn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?A:a;x.searchPseudoElements&&Cn(r)}}},jn=!1,To={mixout:function(){return{dom:{unwatch:function(){ga(),jn=!0}}}},hooks:function(){return{bootstrap:function(){bn(kt("mutationObserverCallbacks",{}))},noAuto:function(){go()},watch:function(n){var a=n.observeMutationsRoot;jn?St():bn(kt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Nn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],l=o.slice(1).join("-");if(i&&l==="h")return a.flipX=!0,a;if(i&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(i){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},_o={mixout:function(){return{parse:{transform:function(n){return Nn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Nn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(f)},p={transform:"translate(".concat(i/2*-1," -256)")},h={outer:l,inner:d,path:p};return{tag:"g",attributes:b({},h.outer),children:[{tag:"g",attributes:b({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:b(b({},a.icon.attributes),h.path)}]}]}}}},ut={x:0,y:0,width:"100%",height:"100%"};function En(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Fo(e){return e.tag==="g"?e.children:[e]}var zo={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?rt(r.split(" ").map(function(i){return i.trim()})):Ut();return o.prefix||(o.prefix=X()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,l=n.maskId,c=n.transform,u=o.width,f=o.icon,d=i.width,p=i.icon,h=_i({transform:c,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:b(b({},ut),{},{fill:"white"})},w=f.children?{children:f.children.map(En)}:{},v={tag:"g",attributes:b({},h.inner),children:[En(b({tag:f.tag,attributes:b(b({},f.attributes),h.path)},w))]},k={tag:"g",attributes:b({},h.outer),children:[v]},g="mask-".concat(l||Ee()),C="clip-".concat(l||Ee()),j={tag:"mask",attributes:b(b({},ut),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,k]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Fo(p)},j]};return a.push(S,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(g,")")},ut)}),{children:a,attributes:r}}}},Do={provides:function(t){var n=!1;K.matchMedia&&(n=K.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:b(b({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=b(b({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:b(b({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:b(b({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:b(b({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:b(b({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:b(b({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},$o={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},Uo=[Di,Eo,So,Po,Ao,Io,To,_o,zo,Do,$o];Zi(Uo,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Pt=I.parse;I.findIconDefinition;I.toHtml;var Wo=I.icon;I.layer;I.text;I.counter;var ya={exports:{}},Bo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ho=Bo,Yo=Ho;function xa(){}function wa(){}wa.resetWarningCache=xa;var Vo=function(){function e(a,r,o,i,l,c){if(c!==Yo){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:wa,resetWarningCache:xa};return n.PropTypes=n,n};ya.exports=Vo();var qo=ya.exports;const E=Da(qo);function Sn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sn(Object(n),!0).forEach(function(a){se(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ke(e){"@babel/helpers - typeof";return Ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ke(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Go(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ko(e,t){if(e==null)return{};var n=Go(e,t),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function At(e){return Xo(e)||Jo(e)||Qo(e)||Zo()}function Xo(e){if(Array.isArray(e))return Ot(e)}function Jo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qo(e,t){if(e){if(typeof e=="string")return Ot(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ot(e,t)}}function Ot(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Zo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function es(e){var t,n=e.beat,a=e.fade,r=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,c=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,p=e.fixedWidth,h=e.inverse,y=e.border,w=e.listItem,v=e.flip,k=e.size,g=e.rotation,C=e.pull,j=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":h,"fa-border":y,"fa-li":w,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},se(t,"fa-".concat(k),typeof k<"u"&&k!==null),se(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),se(t,"fa-pull-".concat(C),typeof C<"u"&&C!==null),se(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map(function(S){return j[S]?S:null}).filter(function(S){return S})}function ts(e){return e=e-0,e===e}function ka(e){return ts(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ns=["style"];function as(e){return e.charAt(0).toUpperCase()+e.slice(1)}function rs(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=ka(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?t[as(r)]=o:t[r]=o,t},{})}function Ca(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return Ca(e,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.attrs.className=f,delete t.attributes.class;break;case"style":c.attrs.style=rs(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=f:c.attrs[ka(u)]=f}return c},{attrs:{}}),o=n.style,i=o===void 0?{}:o,l=Ko(n,ns);return r.attrs.style=z(z({},r.attrs.style),i),e.apply(void 0,[t.tag,z(z({},r.attrs),l)].concat(At(a)))}var ja=!1;try{ja=!0}catch{}function is(){if(!ja&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Pn(e){if(e&&Ke(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Pt.icon)return Pt.icon(e);if(e===null)return null;if(e&&Ke(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ft(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}var An={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},U=ye.forwardRef(function(e,t){var n=z(z({},An),e),a=n.icon,r=n.mask,o=n.symbol,i=n.className,l=n.title,c=n.titleId,u=n.maskId,f=Pn(a),d=ft("classes",[].concat(At(es(n)),At(i.split(" ")))),p=ft("transform",typeof n.transform=="string"?Pt.transform(n.transform):n.transform),h=ft("mask",Pn(r)),y=Wo(f,z(z(z(z({},d),p),h),{},{symbol:o,title:l,titleId:c,maskId:u}));if(!y)return is("Could not find icon",f),null;var w=y.abstract,v={ref:t};return Object.keys(n).forEach(function(k){An.hasOwnProperty(k)||(v[k]=n[k])}),os(w[0],v)});U.displayName="FontAwesomeIcon";U.propTypes={beat:E.bool,border:E.bool,beatFade:E.bool,bounce:E.bool,className:E.string,fade:E.bool,flash:E.bool,mask:E.oneOfType([E.object,E.array,E.string]),maskId:E.string,fixedWidth:E.bool,inverse:E.bool,flip:E.oneOf([!0,!1,"horizontal","vertical","both"]),icon:E.oneOfType([E.object,E.array,E.string]),listItem:E.bool,pull:E.oneOf(["right","left"]),pulse:E.bool,rotation:E.oneOf([0,90,180,270]),shake:E.bool,size:E.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:E.bool,spinPulse:E.bool,spinReverse:E.bool,symbol:E.oneOfType([E.bool,E.string]),title:E.string,titleId:E.string,transform:E.oneOfType([E.string,E.object]),swapOpacity:E.bool};var os=Ca.bind(null,ye.createElement),ss={prefix:"fas",iconName:"circle-chevron-down",icon:[512,512,["chevron-circle-down"],"f13a","M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]},ls={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},cs={prefix:"fas",iconName:"location-arrow",icon:[448,512,[],"f124","M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"]},us={prefix:"fas",iconName:"circle-chevron-up",icon:[512,512,["chevron-circle-up"],"f139","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"]},fs={prefix:"fas",iconName:"house-crack",icon:[576,512,[],"e3b1","M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H230.4l-31.3-52.2c-4.1-6.8-2.6-15.5 3.5-20.5L288 368l-60.2-82.8c-10.9-15 8.2-33.5 22.8-22l117.9 92.6c8 6.3 8.2 18.4 .4 24.9L288 448l38.4 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32z"]},ds={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Na={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};const Ea=()=>s.jsx("article",{className:"ErrorContainer429",children:s.jsxs("div",{className:"ErrorCard429",children:[s.jsx("h1",{className:"ErrorTitle429",children:"Error 429"}),s.jsx("p",{className:"ErrorMsg429",children:"El servidor está sobrecargado con peticiones. Por favor, espera unos minutos e intenta nuevamente."}),s.jsx("div",{className:"ErrorIconWrapper",children:s.jsx("span",{role:"img","aria-label":"Alerta",className:"ErrorEmoji429",children:"⚠️"})})]})}),Sa=5,ms=(e,t,n)=>{const a=ve.map(e,{zoomControl:!1}).setView([t,n],Sa);return ve.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(a),ve.control.zoom({position:"topright"}).addTo(a),a},ps=(e,t)=>{t.forEach(n=>{const a=`
      <div class="custom-popup">
        <h3 class="infoTitle">${n.Title}</h3>
        <p class="info">
          City: ${n.City}
          <br/>
          Estado: ${n.Subnational}
          <br/>
          fecha : ${n.Date}
          <br/>
          Magnitude: ${n.Magnitude}
          <br/>
          url: <a href=${n.url} target="_blank"> Mas info...</a>   
        </p>   
      </div>
    `,r=ve.marker([n.locations[0],n.locations[1]]);r.bindPopup(a,{className:"custom-popup-style"}),r.addTo(e)})},Pa=({geodata:e,place:t,loading:n})=>{const a=m.useRef(null),r=m.useRef(null);return m.useEffect(()=>{const{latitude:o,longitude:i}=e;if(a.current){if(r.current)r.current.flyTo([o,i],Sa,{animate:!0,duration:1.5});else{const l=ms(a.current,o,i);r.current=l}t.length>0&&(r.current.eachLayer(l=>{l instanceof ve.Marker&&r.current.removeLayer(l)}),ps(r.current,t))}return()=>{r.current&&(r.current.remove(),r.current=null)}},[e,t]),s.jsx("div",{className:"MapContainerForm",children:s.jsxs("div",{className:"map-wrapper",children:[n&&s.jsx("div",{className:"loading-indicator",children:s.jsx(Se,{})}),s.jsx("div",{id:"map",ref:a,className:"leaflet-container"})]})})},On=(e,t)=>{const n=e.keyCode||e.which,a=String.fromCharCode(n);/^\d{0,3}$/.test(t+a)||e.preventDefault()};function hs(e,t){const n=e.key,a=/^[0-9.-]+$/,r=/^-/;if(!a.test(n+t)){e.preventDefault();return}if(n==="."&&t.includes(".")){e.preventDefault();return}if(n==="-"&&(!r.test(n+t)||e.target.selectionStart!==0)){e.preventDefault();return}}const vs=(e,t)=>{const n=e.keyCode||e.which,a=String.fromCharCode(n),r=t+a;(!/^\d+$/.test(r)||r>=1e4)&&e.preventDefault()},gs=()=>{const e=Xe(),{showError:t,place:n,loading:a,isMagnitudeSelectOpen:r,buttonActive:o,Counter:i,Radius:l,Km:c,Miles:u,ShowUnits:f,opcionesPaises:d,Type:p,country:h,activeGeoData:y,Magnitude:w}=Je(N=>N.worldMap);m.useEffect(()=>{t&&(!n||n.length===0)&&e(Gt(p))},[e,t,p,n]);const v=N=>{N.preventDefault(),e(Gt(p))},k=N=>{e(Ga(N.target.checked?"RecentEarthquakes":"Earthquakes"))},g=()=>{e(Ka(!0)),e(Kt("kilometers"))},C=()=>{e(Xa(!0)),e(Kt("miles"))},j=Array.from({length:9},(N,L)=>s.jsxs("option",{value:L+1,children:[L+1,"+ Mw"]},L+1)),S=d.map(N=>s.jsx("option",{value:N.País,children:N.País},N.País));return s.jsx("div",{className:"WorldMapPage",children:t?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"WrapperCoords",children:[s.jsxs("div",{className:"WrapperSelect",children:[s.jsx("label",{htmlFor:"paisesSelect",className:"LabelCoords",children:"Elige un país:"}),s.jsx("select",{className:"SelectCoords",name:"paises",id:"paisesSelect",value:h,onChange:N=>e($a(N.target.value)),children:S}),s.jsx("button",{className:"ButtonCalculer",onClick:v,"aria-label":"Calcular",title:"Calcular",disabled:a,children:s.jsx(U,{icon:cs,size:"2x",color:"white"})}),s.jsxs("div",{className:"Recients",children:[s.jsx("label",{htmlFor:"recentCheck",children:"Recientes:"}),s.jsx("input",{id:"recentCheck",type:"checkbox",name:"Recient",value:"Reciente",onClick:k})]})]}),s.jsxs("div",{className:"WrapperOptions",children:[s.jsxs("div",{className:"OptionMagnitud",children:[s.jsxs("button",{className:"ButtonOptions",onClick:()=>e(Ua()),children:[s.jsx(U,{icon:fs,className:"ButtonOptionsIcon"}),s.jsxs("p",{className:"ButtonOptionsTitle",children:[" ",w,"+ Mw "]})]}),r&&s.jsx("select",{className:"SelectMagnitude animate__animated animate__bounceIn",name:"magnitude",id:"magnitude",value:w,onChange:N=>e(Wa(N.target.value)),children:j})]}),s.jsxs("div",{className:"OptionCount",children:[s.jsxs("button",{className:"ButtonOptions",onClick:()=>e(Ba()),children:[s.jsx(U,{icon:ds,className:"ButtonOptionsIcon"}),s.jsxs("p",{className:"ButtonOptionsTitle",children:[" ",s.jsx("span",{children:i})," Sismos "]})]}),o&&s.jsx("div",{className:"SelectCount animate__animated animate__bounceIn",children:s.jsxs("div",{className:"ContainerCount",children:[s.jsx("button",{className:"CountDercrementar",onClick:N=>{N.preventDefault(),e(Ha())},children:"-"}),s.jsx("span",{children:i}),s.jsx("button",{className:"CountIncrementar",onClick:N=>{N.preventDefault(),e(Ya())},children:"+"})]})})]}),s.jsxs("div",{className:"OptionUnits",children:[s.jsxs("button",{className:"ButtonOptions",onClick:()=>e(Va()),children:[s.jsx(U,{icon:ls,className:"ButtonOptionsIcon"}),s.jsxs("p",{className:"ButtonOptionsTitle",children:[" ",l," ",c?"Km":"Mi"," "]})]}),f&&s.jsxs("div",{className:"ContainerUnits animate__animated animate__bounceIn",children:[s.jsx("input",{type:"text",name:"Units",value:l,className:"inputUnits",onChange:N=>e(qa(N.target.value)),onKeyPress:N=>vs(N,l),placeholder:"Radio"}),s.jsxs("div",{className:"OpUntisChecbox",children:[s.jsxs("div",{className:"InputUnitsKm",children:[s.jsx("label",{htmlFor:"KM",children:" Km "}),s.jsx("input",{id:"KM",type:"checkbox",checked:c,name:"Km",value:"Km",onChange:g})]}),s.jsxs("div",{className:"InputUnitsMiles",children:[s.jsx("label",{htmlFor:"Miles",children:" Mi "}),s.jsx("input",{id:"Miles",type:"checkbox",checked:u,name:"Miles",value:"Miles",onChange:C})]})]})]})]})]})]}),s.jsx("main",{className:"MapViewport",children:s.jsx(Pa,{geodata:y,place:n,loading:a})})]}):s.jsx(Ea,{})})},bs=()=>s.jsx(gs,{}),ys=[{Pais:"Chile",Ciudad:"valdivia","Escala de Ritcher":"9",fecha:"22 de mayo de 1960",Magnitud:"9,5",Referencias:"Este terremoto fue el más fuerte registrado en la historia, con una magnitud de 9,5. El terremoto afectó a la región de Valdivia en Chile y causó una gran cantidad de daños y muertes en todo el país"},{Pais:"Estados Unidos",Ciudad:"Alaska","Escala de Ritcher":"9",fecha:"27 de marzo de 1964",Magnitud:"9,2",Referencias:"El Terremoto de Alaska de 1964, también conocido como el Gran Terremoto de Alaska, fue un devastador evento sísmico que ocurrió el 27 de marzo de 1964 en la región de Prince William Sound, Alaska, Estados Unidos. Con una magnitud de 9.2 en la escala de Richter, es uno de los terremotos más fuertes registrados en la historia. El terremoto generó un tsunami que causó daños significativos en comunidades costeras y devastó áreas a lo largo de la costa del Pacífico, incluyendo Hawái y Japón."},{Pais:"Indonesia",Ciudad:"Sumatra-Andaman","Escala de Ritcher":"9",fecha:"26 de diciembre de 2004",Magnitud:"9,1",Referencias:"Este terremoto tuvo una magnitud de 9,1 y fue seguido por un tsunami que afectó a varios países de Asia. Se estima que murieron al menos 230.000 personas debido al terremoto y al tsunami."},{Pais:"Japon",Ciudad:"región de Tōhoku","Escala de Ritcher":"9",fecha:"11 de marzo de 2011",Magnitud:"9,0",Referencias:"Este terremoto tuvo una magnitud de 9,0 y fue seguido por un tsunami que afectó a la costa del Pacífico de Japón. El desastre resultante mató a más de 15.000 personas y causó daños significativos a la planta de energía nuclear de Fukushima."},{Pais:"Ecuador y colombia",Ciudad:"provincia de Esmeraldas","Escala de Ritcher":"8",fecha:"31 de enero de 1906",Magnitud:"8.8",Referencias:"El terremoto de Ecuador y Colombia de 1906 fue un terremoto de magnitud 8,8 que ocurrió el 31 de enero de 1906 en la costa occidental de Ecuador y Colombia. El terremoto causó daños generalizados en ambos países."}],xs={start:1,count:50,latitude:4.570868,longitude:-74.297333,radius:300,units:"kilometers",magnitude:4};function Aa(e,t){const n=m.useRef(t);m.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const ws=1;function ks(e){return Object.freeze({__version:ws,map:e})}function Cs(e,t){return Object.freeze({...e,...t})}const Oa=m.createContext(null),Ma=Oa.Provider;function Ra(){const e=m.useContext(Oa);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function js(e){function t(n,a){const{instance:r,context:o}=e(n).current;return m.useImperativeHandle(a,()=>r),n.children==null?null:ye.createElement(Ma,{value:o},n.children)}return m.forwardRef(t)}function Ns(e){function t(n,a){const[r,o]=m.useState(!1),{instance:i}=e(n,o).current;m.useImperativeHandle(a,()=>i),m.useEffect(function(){r&&i.update()},[i,r,n.children]);const l=i._contentNode;return l?Ja.createPortal(n.children,l):null}return m.forwardRef(t)}function Es(e){function t(n,a){const{instance:r}=e(n).current;return m.useImperativeHandle(a,()=>r),null}return m.forwardRef(t)}function La(e,t){const n=m.useRef();m.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function Yt(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function Ss(e,t){return function(a,r){const o=Ra(),i=e(Yt(a,o),o);return Aa(o.map,a.attribution),La(i.current,a.eventHandlers),t(i.current,o,a,r),i}}function Vt(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function qt(e,t){return t==null?function(a,r){const o=m.useRef();return o.current||(o.current=e(a,r)),o}:function(a,r){const o=m.useRef();o.current||(o.current=e(a,r));const i=m.useRef(a),{instance:l}=o.current;return m.useEffect(function(){i.current!==a&&(t(l,a,i.current),i.current=a)},[l,a,r]),o}}function Ps(e,t){m.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var o;(o=t.layerContainer)==null||o.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function Ia(e){return function(n){const a=Ra(),r=e(Yt(n,a),a);return Aa(a.map,n.attribution),La(r.current,n.eventHandlers),Ps(r.current,a),r}}function As(e,t){const n=qt(e,t),a=Ia(n);return js(a)}function Os(e,t){const n=qt(e),a=Ss(n,t);return Ns(a)}function Ms(e,t){const n=qt(e,t),a=Ia(n);return Es(a)}function Rs(e,t,n){const{opacity:a,zIndex:r}=t;a!=null&&a!==n.opacity&&e.setOpacity(a),r!=null&&r!==n.zIndex&&e.setZIndex(r)}function Mt(){return Mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Mt.apply(this,arguments)}function Ls({bounds:e,boundsOptions:t,center:n,children:a,className:r,id:o,placeholder:i,style:l,whenReady:c,zoom:u,...f},d){const[p]=m.useState({className:r,id:o,style:l}),[h,y]=m.useState(null);m.useImperativeHandle(d,()=>(h==null?void 0:h.map)??null,[h]);const w=m.useCallback(k=>{if(k!==null&&h===null){const g=new Qe.Map(k,f);n!=null&&u!=null?g.setView(n,u):e!=null&&g.fitBounds(e,t),c!=null&&g.whenReady(c),y(ks(g))}},[]);m.useEffect(()=>()=>{h==null||h.map.remove()},[h]);const v=h?ye.createElement(Ma,{value:h},a):i??null;return ye.createElement("div",Mt({},p,{ref:w}),v)}const Is=m.forwardRef(Ls),Ts=As(function({position:t,...n},a){const r=new Qe.Marker(t,n);return Vt(r,Cs(a,{overlayContainer:r}))},function(t,n,a){n.position!==a.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==a.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==a.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==a.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==a.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),_s=Os(function(t,n){const a=new Qe.Popup(t,n.overlayContainer);return Vt(a,n)},function(t,n,{position:a},r){m.useEffect(function(){const{instance:i}=t;function l(u){u.popup===i&&(i.update(),r(!0))}function c(u){u.popup===i&&r(!1)}return n.map.on({popupopen:l,popupclose:c}),n.overlayContainer==null?(a!=null&&i.setLatLng(a),i.openOn(n.map)):n.overlayContainer.bindPopup(i),function(){var f;n.map.off({popupopen:l,popupclose:c}),(f=n.overlayContainer)==null||f.unbindPopup(),n.map.removeLayer(i)}},[t,n,r,a])}),Fs=Ms(function({url:t,...n},a){const r=new Qe.TileLayer(t,Yt(n,a));return Vt(r,a)},function(t,n,a){Rs(t,n,a);const{url:r}=n;r!=null&&r!==a.url&&t.setUrl(r)}),zs=({location:e,place:t})=>{const n=t.Magnitude||"N/A",a=t.Subnational||"Desconocida",r=e==null?void 0:e[0],o=e==null?void 0:e[1];if(!e||isNaN(r)||isNaN(o))return s.jsx("div",{className:"ContainerMap ErrorState",children:s.jsx("p",{children:"Ubicación no disponible para este evento."})});const i=s.jsxs("div",{className:"InfoPopup",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Magnitud:"})," ",n," Mw"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Ubicación:"})," ",a]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Coordenadas:"})," ",r.toFixed(4),", ",o.toFixed(4)]})]});return s.jsxs(Is,{center:e,zoom:7,className:"ContainerMap",scrollWheelZoom:!0,dragging:!0,children:[s.jsx(Fs,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),s.jsx(Ts,{position:e,children:s.jsx(_s,{children:i})})]})},Ta=({isOpen:e,onClose:t,coordinates:n,place:a})=>{if(!e)return null;const r=a.Title||"Detalles del Sismo",o=a.Date||"Fecha desconocida",i=a.url||"#";return s.jsx("div",{className:"map-modal",onClick:l=>l.target===l.currentTarget&&t(),children:s.jsxs("div",{className:"map-modal-content",role:"dialog","aria-modal":"true",children:[s.jsx("span",{className:"close-button",onClick:t,"aria-label":"Cerrar modal",title:"Cerrar",children:"×"}),s.jsxs("div",{className:"InfoModalCard",children:[s.jsx("h3",{children:r}),s.jsx("p",{children:o}),s.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer","aria-label":`Ver más información sobre el sismo: ${r}`,children:"Ver detalles del evento →"})]}),s.jsx("div",{className:"map-container",children:s.jsx(zs,{location:n,place:a})})]})})},Ds=({place:e})=>{const[t,n]=m.useState(null),[a,r]=m.useState(null),[o,i]=m.useState(!1),l=(u,f)=>{n(u),r(f),i(!0)},c=()=>{i(!1),n(null),r(null)};return!Array.isArray(e)||e.length===0?s.jsx("div",{className:"NoDataContainer",children:s.jsx("p",{children:"No se detectaron sismos recientes en esta área."})}):s.jsxs("div",{className:"CardContainer",children:[e.map((u,f)=>s.jsxs("div",{className:"DataCard",children:[s.jsx("h3",{className:"textTitleCard",children:u.title||u.Title}),s.jsxs("p",{className:"MwMagnitude",children:[u.magnitude||u.Magnitude," Mw"]}),s.jsx("img",{className:"IconCard",src:"https://cdn-icons-png.flaticon.com/512/6078/6078551.png",alt:"Icono Sísmico"}),s.jsx("p",{className:"CityCard",children:u.city||u.City}),s.jsx("button",{className:"CardButton",onClick:()=>l(u.locations||[0,0],u),"aria-label":`Ver mapa de ${u.title||"Sismo"}`,children:"Ver mapa"})]},`${u.title||"quake"}-${f}`)),o&&s.jsx(Ta,{isOpen:!0,onClose:c,coordinates:t,place:a})]})},$s=()=>{const[e,t]=m.useState([]),[n,a]=m.useState(!0),[r,o]=m.useState(null),i=m.useCallback(async()=>{a(!0);const l=new Rn(xs,"GenericRecent");try{const c=await l.getDataWithCaching();c.show?(t(c.result||[]),o(null)):o(c.error||"No se pudo cargar la información.")}catch{o("Error de conexión al servidor.")}finally{setTimeout(()=>a(!1),300)}},[]);return m.useEffect(()=>{i();const l=setInterval(i,5*60*1e3);return()=>clearInterval(l)},[i]),s.jsxs("section",{"aria-labelledby":"past-hour-title",className:"PastHourSection",children:[s.jsx("h1",{id:"past-hour-title",className:"TitleHour",children:"Sismos Recientes Globales"}),r&&!n&&s.jsxs("div",{className:"ErrorContainer",children:[s.jsx("p",{children:r}),s.jsx("button",{onClick:i,className:"RetryButton",children:"Reintentar"})]}),s.jsx("div",{className:"gallery",children:n?s.jsx("div",{className:"LoaderWrapper",children:s.jsx(Se,{})}):s.jsx(Ds,{place:e})})]})},Mn=()=>s.jsxs("main",{className:"HomeContainer",children:[s.jsx($s,{"aria-label":"Sismos recientes"}),s.jsxs("section",{className:"WrapperTable","aria-labelledby":"historical-title",children:[s.jsx("h2",{id:"historical-title",className:"TitleTable",children:"Sismos Históricos más Poderosos"}),s.jsx("div",{className:"TableContainerScroll",children:s.jsxs("table",{className:"ContainerTable",summary:"Datos de los sismos históricos más potentes",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:"País"}),s.jsx("th",{scope:"col",children:"Ciudad"}),s.jsx("th",{scope:"col",children:"Escala"}),s.jsx("th",{scope:"col",children:"Fecha"}),s.jsx("th",{scope:"col",children:"Magnitud"}),s.jsx("th",{scope:"col",children:"Referencias"})]})}),s.jsx("tbody",{children:ys.map((e,t)=>s.jsxs("tr",{children:[s.jsx("td",{children:e.Pais}),s.jsx("td",{children:e.Ciudad}),s.jsx("td",{style:{fontWeight:600},children:e["Escala de Ritcher"]}),s.jsx("td",{style:{color:"var(--text-tertiary)",fontSize:"0.8125rem"},children:e.fecha}),s.jsx("td",{style:{fontWeight:700,color:"var(--status-danger)"},children:e.Magnitud}),s.jsx("td",{className:"ColumReferences",children:e.Referencias})]},`${e.Pais}-${e.fecha}-${t}`))})]})})]})]}),_a=e=>s.jsxs("button",{className:"ButtonEvent",onClick:e.Click,children:[" ",e.title]}),Us=({movimiento:e,scaleInfo:t,showModal:n})=>{const[a,r]=m.useState(!1),o=()=>{r(n)},i=()=>{r(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(_a,{Click:o,title:"Calcular"}),s.jsx("div",{className:`ModalWrapper ${a?"show":""}`,onClick:i,children:s.jsxs("div",{className:"ContainerMsg",style:{border:`3px solid  ${(t==null?void 0:t.color)||"white"}`},children:[s.jsx(U,{className:"CloseButton",size:"3x",icon:Na,color:`${(t==null?void 0:t.color)||"white"}`}),s.jsx("h1",{children:" Escala Ritcher"}),e&&s.jsxs("div",{className:"ColorContainer",style:{backgroundColor:`${(t==null?void 0:t.color)||"white"}`},children:[s.jsx("p",{className:"Scale",children:`${(t==null?void 0:t.number)||"-------"}`}),s.jsx("br",{}),s.jsxs("div",{children:[s.jsx("h3",{children:`${(t==null?void 0:t.msg)||"-------"}`}),s.jsx("div",{children:s.jsx("span",{role:"img","aria-label":"Emoji"})})]}),s.jsx("a",{href:"/imagenes/ritcher.png",target:"_blank",rel:"noopener noreferrer",children:"Ver explicación de escala sismológica →"})]})]})})]})},Ws=()=>{const e=Xe(),{amplitud:t,diferencia:n,movimiento:a,scaleInfo:r}=Je(l=>l.calculator),o=l=>{l.preventDefault(),e(er())},i=!t.toString().trim()||!n.toString().trim();return s.jsxs(s.Fragment,{children:[s.jsx("h1",{className:"Title",children:"Escala de Ritcher"}),s.jsx("div",{className:"Box",children:s.jsxs("form",{className:"FormContainer",onSubmit:o,children:[s.jsx("label",{className:"LabelName",htmlFor:"amplitud",children:" Amplitud: "}),s.jsx("input",{className:"InputText",type:"text",name:"amplitud",value:t,onChange:l=>e(Qa(l.target.value)),placeholder:"Ingrese amplitud",onKeyPress:l=>On(l,t),required:!0}),s.jsx("label",{className:"LabelName",htmlFor:"diferencia",children:" Diferencia: "}),s.jsx("input",{className:"InputText",type:"text",name:"diferencia",value:n,onChange:l=>e(Za(l.target.value)),placeholder:"Ingrese diferencia",onKeyPress:l=>On(l,n),required:!0}),s.jsx(Us,{movimiento:a,showModal:!i,scaleInfo:r})]})})]})},Bs=()=>{const e=Xe(),[t,n]=m.useState(!0),{inputValues:a,selectedOption:r,place:o,loading:i,showError:l,activeGeoData:c}=Je(p=>p.quakeMap),u=p=>{p.preventDefault(),a[0]!==""&&a[1]!==""?(e(nr()),n(!1)):alert("Por favor, ingresa latitud y longitud al menos.")},f=[{label:"Latitud",type:"text",placeholder:"Ej: 4.5708"},{label:"Longitud",type:"text",placeholder:"Ej: -74.297"},{label:"Inicio (Pág)",type:"number",min:1,max:100,placeholder:"1"},{label:"Contar",type:"number",min:1,max:500,placeholder:"100"},{label:"Intensidad",type:"number",min:1,max:100,placeholder:"1"},{label:"Radio",type:"number",min:1,max:2e4,placeholder:"1000"},{label:"Magnitud Mín",type:"number",min:1,max:10,placeholder:"3"},{label:"Fecha Inicio",type:"date"},{label:"Fecha Fin",type:"date"}],d=(p,h)=>y=>{let w=y.target.value;e(ar({index:p,value:w}))};return s.jsx("div",{className:"MapSearchPage",children:l?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"ShowFormButtonContainer",children:s.jsx("button",{className:"ButtonAccordions",onClick:()=>n(!t),"aria-label":t?"Cerrar filtros":"Abrir filtros",title:"Filtros de búsqueda",children:s.jsx(U,{icon:t?us:ss,size:"2x"})})}),s.jsxs("aside",{className:`SearchAside ${t?"visible":"hidden"}`,children:[s.jsx("h2",{className:"AsideTitle",children:"Filtros Sísmicos"}),s.jsxs("form",{onSubmit:u,className:"FiltersForm",children:[f.map((p,h)=>s.jsxs("div",{className:"FilterGroup",children:[s.jsx("label",{className:"FilterLabel",children:p.label}),s.jsx("input",{className:"FilterInput",type:p.type,value:a[h],placeholder:p.placeholder,min:p.min||"",max:p.max||"",onChange:d(h,p.type),onKeyPress:y=>{p.type==="text"&&hs(y,y.target.value)},required:h<2})]},h)),s.jsxs("div",{className:"FilterGroup",children:[s.jsx("label",{className:"FilterLabel",children:"Unidades"}),s.jsxs("select",{className:"FilterSelect",value:r,onChange:p=>e(tr(p.target.value)),children:[s.jsx("option",{value:"miles",children:"Millas"}),s.jsx("option",{value:"kilometers",children:"Kilómetros"})]})]}),s.jsx("button",{className:"ButtonSend",type:"submit",disabled:i,children:i?"Calculando...":"Calcular Mapa"})]})]}),s.jsx("main",{className:"MapViewport",children:s.jsx(Pa,{geodata:c,place:o,loading:i})})]}):s.jsx(Ea,{})})},Hs=()=>{const[e,t]=m.useState(null),[n,a]=m.useState(!0),[r,o]=m.useState(!1);return m.useEffect(()=>{let i=!0;return(async()=>{try{const c={latitude:"9.30472",longitude:"-75.39778",radius:"500"},u=new Rn(c,"LatestEarthquakeNearMe",10),{result:f,show:d}=await u.getDataWithCaching();i&&(d&&f&&f.length>0?t(f[0]):o(!0))}catch{i&&o(!0)}finally{i&&a(!1)}})(),()=>{i=!1}},[]),n?s.jsx("div",{className:"RecientLoader",children:s.jsx(Se,{})}):r||!e?s.jsx("div",{className:"RecientEmpty",children:s.jsx("p",{children:"No se encontraron sismos recientes en esta zona."})}):s.jsxs("article",{className:"RecientCard",children:[s.jsx("span",{className:"RecientBadge",children:"Sismo Reciente"}),s.jsx("h2",{className:"RecientTitle",children:e.Title||e.title}),s.jsxs("p",{className:"RecientDesc",children:[s.jsx("strong",{children:"Magnitud:"})," ",e.Magnitude||e.magnitude,s.jsx("br",{}),s.jsx("strong",{children:"Lugar:"})," ",e.City||e.city]})]})},Ys=({place:e,City:t,page:n,itemsPerPage:a,handlePageChange:r})=>{const o=e.filter(g=>(g.City||"").toLowerCase().includes((t||"").toLowerCase())),i=Math.ceil(o.length/a),l=(n-1)*a,c=l+a,u=o.slice(l,c),[f,d]=m.useState([]),[p,h]=m.useState({}),[y,w]=m.useState(!1),v=(g,C)=>{d(g),h(C),w(!0)},k=()=>{w(!1)};return s.jsxs("div",{className:"LibraryContainer",children:[s.jsx("div",{className:"containerCard",children:u.length===0?s.jsx("div",{className:"NoDataWrapper",children:e.length===0?s.jsx(Se,{}):s.jsx("p",{children:"No se encontraron resultados para esta búsqueda."})}):u.map((g,C)=>s.jsxs("div",{className:"tarjeta-all",onClick:()=>v(g.locations,g),children:[s.jsx("h3",{className:"textTitleCard",children:g.Title}),s.jsxs("p",{className:"MwMagnitude",children:[g.Magnitude," Mw"]}),s.jsx("img",{className:"IconCard",src:"https://cdn-icons-png.flaticon.com/512/6078/6078551.png",alt:"Icono Sísmico"}),s.jsx("p",{className:"CityCard",children:g.City}),s.jsx("button",{className:"CardButton",onClick:j=>{j.stopPropagation(),v(g.locations,g)},children:"Ver en mapa"})]},`${g.Title}-${C}`))}),y&&s.jsx(Ta,{isOpen:!0,onClose:k,coordinates:f,place:p}),o.length>a&&s.jsxs("nav",{className:"pagination","aria-label":"Navegación de páginas",children:[s.jsx("button",{className:"Btnpagination",onClick:()=>r(n-1),disabled:n===1,"aria-label":"Página anterior",children:"Anterior"}),s.jsxs("span",{className:"PageIndicator",children:["Página ",n," de ",i]}),s.jsx("button",{className:"Btnpagination",onClick:()=>r(n+1),disabled:n===i,"aria-label":"Página siguiente",children:"Siguiente"})]})]})},dt=({type:e,resetData:t})=>{const n=Xe(),{city:a,place:r,loading:o,page:i,itemsPerPage:l}=Je(f=>f.library);m.useEffect(()=>{t&&n(rr()),n(ir(e))},[e,t,n]);const c=f=>{n(or(f.target.value))},u=f=>{n(sr(f))};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"SearchCity",children:[s.jsx("label",{htmlFor:"inputCity",className:"LabelCity",children:"Ingrese ciudad:"}),s.jsx("input",{type:"text",name:"inputCity",value:a,onChange:c})]}),o?s.jsx("div",{className:"loaderall",children:s.jsx(Se,{})}):s.jsx(Ys,{place:r,City:a,page:i,itemsPerPage:l,handlePageChange:u})]})},Vs=3e10;function qs(e,t,n=Vs){return n*e*t}function Gs(e){return!e||e<=0?0:Number((2/3*Math.log10(e)-9.1).toFixed(2))}const Ks=()=>{var h,y,w,v;const[e,t]=m.useState(""),[n,a]=m.useState(""),[r,o]=m.useState(""),[i,l]=m.useState(null),[c,u]=m.useState(!1),f=k=>{k.preventDefault();const g=parseFloat(e),C=parseFloat(n),j=r?parseFloat(r):void 0;if(!g||!C||g<=0||C<=0)return;const S=qs(g,C,j),N=Gs(S),L=lr(N);l({mw:N,m0:S,scaleInfo:L}),u(!0)},d=()=>u(!1),p=!e.trim()||!n.trim();return s.jsxs(s.Fragment,{children:[s.jsx("h1",{className:"Title",children:"Escala de Momento Sísmico"}),s.jsx("div",{className:"Box",children:s.jsxs("form",{className:"FormContainer",onSubmit:f,children:[s.jsx("label",{className:"LabelName",htmlFor:"mw-area",children:"Área de ruptura (m²)"}),s.jsx("input",{id:"mw-area",className:"InputText",type:"number",min:"0",step:"any",value:e,onChange:k=>t(k.target.value),placeholder:"Ej: 40000",required:!0}),s.jsx("label",{className:"LabelName",htmlFor:"mw-desliz",children:"Deslizamiento promedio (m)"}),s.jsx("input",{id:"mw-desliz",className:"InputText",type:"number",min:"0",step:"any",value:n,onChange:k=>a(k.target.value),placeholder:"Ej: 0.5",required:!0}),s.jsxs("label",{className:"LabelName",htmlFor:"mw-rigidez",children:["Rigidez µ (Pa) — ",s.jsx("span",{className:"LabelOptional",children:"opcional, default 30 GPa"})]}),s.jsx("input",{id:"mw-rigidez",className:"InputText",type:"number",min:"0",step:"any",value:r,onChange:k=>o(k.target.value),placeholder:"Ej: 3e10 = 30000000000"}),s.jsx(_a,{Click:f,title:"Calcular Mw",disabled:p})]})}),s.jsx("div",{className:`ModalWrapper ${c?"show":""}`,onClick:d,role:"dialog","aria-modal":"true","aria-label":"Resultado de magnitud de momento",children:s.jsxs("div",{className:"ContainerMsg MwModal",style:{border:`3px solid ${((h=i==null?void 0:i.scaleInfo)==null?void 0:h.color)||"var(--brand-primary)"}`},onClick:k=>k.stopPropagation(),children:[s.jsx(U,{className:"CloseButton",size:"3x",icon:Na,color:((y=i==null?void 0:i.scaleInfo)==null?void 0:y.color)||"var(--brand-primary)",onClick:d}),s.jsx("h1",{children:"Escala de Momento Sísmico"}),i&&s.jsxs("div",{className:"ColorContainer",style:{backgroundColor:((w=i.scaleInfo)==null?void 0:w.color)||"var(--bg-tertiary)"},children:[s.jsxs("p",{className:"Scale",children:["Mw ",i.mw]}),s.jsx("h3",{children:((v=i.scaleInfo)==null?void 0:v.msg)||"Magnitud fuera de rango estándar"}),s.jsx("div",{className:"MwDetails",children:s.jsxs("span",{children:["M₀ = ",i.m0.toExponential(2)," N·m"]})}),s.jsx("a",{href:"/imagenes/example.png",target:"_blank",rel:"noopener noreferrer",children:"Ver explicación de la fórmula Mw →"})]})]})})]})},Xs=()=>{if(de().pathname.includes("/WorldMapPages"))return null;const t=({isActive:n})=>n?"RouterNavLink RouterNavLink--active":"RouterNavLink";return s.jsxs("nav",{className:"RouterNav",role:"navigation","aria-label":"Navegación principal",children:[s.jsx("h1",{className:"logo",children:s.jsx(Yn,{to:"/HomePage",style:{color:"inherit",textDecoration:"none"},children:"Sistema de Sismos"})}),s.jsxs("ul",{className:"NavLinks",children:[s.jsx("li",{className:"NavItem",children:s.jsx($,{to:"/HomePage",className:t,end:!0,children:"Home"})}),s.jsx("li",{className:"NavItem",children:s.jsx($,{to:"/RichterCalculator",className:t,children:"Calculadora de sismos"})}),s.jsx("li",{className:"NavItem",children:s.jsx($,{to:"/MomentoCalculator",className:t,children:"Escala Momento Sísmico"})}),s.jsxs("li",{className:"NavItem",children:[s.jsx($,{to:"/WorldMapPages",className:t,children:"Mapa"}),s.jsx("ul",{className:"Submenu",role:"menu",children:s.jsx("li",{className:"SubmenuItem",role:"none",children:s.jsx($,{to:"/WorldMapPages/QuakeMapMyLocation",className:"RouterNavLink",role:"menuitem",children:"Fechas sismos"})})})]}),s.jsxs("li",{className:"NavItem NavItemLibrary",children:[s.jsx($,{to:"/libary/AllEarthquakes/AllEarthquakesPastDay",className:t,children:"Biblioteca de sismos"}),s.jsxs("ul",{className:"SubmenuLibrary",role:"menu",children:[s.jsx("li",{className:"SubmenuItem",role:"none",children:s.jsx($,{to:"/libary/AllEarthquakes/AllEarthquakesPastDay",className:"RouterNavLink",role:"menuitem",children:"Últimos días"})}),s.jsx("li",{className:"SubmenuItem",role:"none",children:s.jsx($,{to:"/libary/AllEarthquakes/AllEarthquakesPast7Days",className:"RouterNavLink",role:"menuitem",children:"Últimos 7 días"})}),s.jsx("li",{className:"SubmenuItem",role:"none",children:s.jsx($,{to:"/libary/AllEarthquakes/AllEarthquakesPast30Days",className:"RouterNavLink",role:"menuitem",children:"Últimos 30 días"})})]})]})]})]})},Qs=()=>s.jsxs(ai,{children:[s.jsx(Xs,{}),s.jsxs(Kr,{children:[s.jsx(T,{path:"/",element:s.jsx(Mn,{})}),s.jsx(T,{path:"/HomePage",element:s.jsx(Mn,{})}),s.jsx(T,{path:"/RichterCalculator",element:s.jsx(Ws,{})}),s.jsx(T,{path:"/MomentoCalculator",element:s.jsx(Ks,{})}),s.jsx(T,{path:"/WorldMapPages",element:s.jsx(bs,{})}),s.jsx(T,{path:"/WorldMapPages/QuakeMapMyLocation",element:s.jsx(Bs,{})}),s.jsx(T,{path:"/WorldMapPages/Quakerecient",element:s.jsx(Hs,{})}),s.jsx(T,{path:"/libary/AllEarthquakes/AllEarthquakesPastDay",element:s.jsx(dt,{type:"AllEarthquakes,PastDay"})}),s.jsx(T,{path:"/libary/AllEarthquakes/AllEarthquakesPast7Days",element:s.jsx(dt,{type:"AllEarthquakes,Past7Days"})}),s.jsx(T,{path:"/libary/AllEarthquakes/AllEarthquakesPast30Days",element:s.jsx(dt,{type:"AllEarthquakes,Past30Days"})})]})]});export{Qs as default};
