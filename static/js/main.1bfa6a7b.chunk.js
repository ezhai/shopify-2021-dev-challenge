(this["webpackJsonpshopify-2021-frontend-dev-challenge"]=this["webpackJsonpshopify-2021-frontend-dev-challenge"]||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,d,j,u,l,b,h=n(0),O=n.n(h),f=n(48),m=n.n(f),p=(n(58),n(59),n(13)),v=n(12),x=n(17),g=n(98),w=n(99),k=n(96),y=n(102),A=n(100),E=n(101),M=n(103),S=n(94),D=n(49),F=n.n(D),N=n(1),I=Object(x.a)(A.a)(a||(a=Object(v.a)(["\n  padding: 1rem 2rem;\n"]))),P=Object(x.a)(E.a)(r||(r=Object(v.a)(["\n  & .MuiCardHeader-title {\n    font-weight: bold;\n  }\n"]))),z=Object(x.a)(y.a)(c||(c=Object(v.a)(["\n  position: relative;\n  padding: 1rem;\n"]))),C=Object(x.a)(F.a,{shouldForwardProp:function(){return!1}})(i||(i=Object(v.a)(["\n  color: ","\n"])),(function(e){return e.liked?"#ED4956":""})),L=function(e){var t=e.item,n=e.onItemLiked,a=Object(h.useCallback)((function(){n(t.id)}),[t,n]),r="video"===t.media_type?"iframe":"img";return Object(N.jsxs)(k.a,{children:[Object(N.jsx)(M.a,{component:r,src:t.url}),Object(N.jsx)(z,{children:Object(N.jsx)(S.a,{"aria-label":"like the post",onClick:a,children:Object(N.jsx)(C,{fontSize:"large",liked:!!t.meta.liked})})}),Object(N.jsx)(P,{title:t.title,subheader:"Date: ".concat(t.date)}),Object(N.jsxs)(I,{children:[Object(N.jsx)(w.a,{align:"left",children:t.explanation}),Object(N.jsx)(w.a,{align:"right",color:"text.primary",children:"\xa9 ".concat(t.copyright||"unknown")})]})]})},T=n(24),H=n.p+"static/media/loading.7feeb284.gif",R=Object(T.a)(o||(o=Object(v.a)(["\n  from {\n    width: 0px;\n  }\n  to {\n    width: 3rem;    \n  }\n"]))),_=x.a.div(s||(s=Object(v.a)(["\n  padding: 4rem;\n"]))),J=Object(x.a)(w.a)(d||(d=Object(v.a)(['\n  &:after {\n    content: "\u2026";\n    overflow: hidden;\n    display: inline-block;\n    vertical-align: bottom;\n    animation : '," steps(4, end) 4s infinite;\n  }\n"])),R),B=x.a.img(j||(j=Object(v.a)(["\n  padding: 20px;\n  height: 50vmin;\n  width: 50vmin;\n"]))),q=function(){return Object(N.jsxs)(_,{children:[Object(N.jsx)(J,{variant:"h4",children:"Loading images"}),Object(N.jsx)(B,{src:H,alt:"loading spinner"})]})},G=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(w.a,{variant:"h1",children:":("}),Object(N.jsx)(w.a,{padding:"2rem",children:"This is ground control to Major Tom."}),Object(N.jsx)(w.a,{children:"We couldn't get any images from NASA. Please come back later."})]})},K=n(11),Q=n(32),U=n.n(Q),V=n(26),W=n(46),X=n(95),Y=function(){var e=Object(W.a)(U.a.mark((function e(t,n){var a,r,c=arguments;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:3,r=new Request("https://api.nasa.gov/planetary/apod?api_key=".concat("Rd9HQTPJXFeNwcNSjM7fMGU8nIMBjwV8avxxxkEK","&start_date=").concat(t,"&end_date=").concat(n),{}),e.abrupt("return",fetch(r).then((function(e){if(e.ok)return e.json();throw new Error("Error: ".concat(e.status))})).then((function(e){return e.map((function(e){return Object(V.a)(Object(V.a)({},e),{},{id:Object(X.a)(),meta:{}})}))})).catch((function(e){return console.error("Failed to fetch from NASA API. Retries remaining: ".concat(a),e),a>1?Y(t,n,a-1):[]})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(e){return e.toISOString().split("T")[0]},$=function(){var e=Object(h.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(h.useState)(!1),c=Object(p.a)(r,2),i=c[0],o=c[1],s=Object(h.useRef)(new Date),d=Object(h.useCallback)(Object(W.a)(U.a.mark((function e(){var t,r,c,d,j;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=2;break}return e.abrupt("return");case 2:return o(!0),(t=new Date(s.current)).setDate(t.getDate()-16),r=Z(t),c=Z(s.current),e.next=9,Y(r,c);case 9:d=e.sent,j=[].concat(Object(K.a)(n),Object(K.a)(d)).sort((function(e,t){return t.date.localeCompare(e.date)})),s.current=t,s.current.setDate(s.current.getDate()-1),a(j),o(!1);case 15:case"end":return e.stop()}}),e)}))),[n,i]);Object(h.useEffect)((function(){d()}),[]),Object(h.useEffect)((function(){var e=function(){window.innerHeight+document.documentElement.scrollTop+10>=document.scrollingElement.scrollHeight&&d()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[d]);return[n,function(e){var t=n.map((function(t){return t.id!==e?t:Object(V.a)(Object(V.a)({},t),{},{meta:Object(V.a)(Object(V.a)({},t.meta),{},{liked:!t.meta.liked})})}));a(t)},i]},ee=x.a.div(u||(u=Object(v.a)(["\n  position: relative;\n  width: 50vw;\n\n  @media screen and (max-width: 600) {\n    width: 85vw;\n  }\n"]))),te=x.a.div(l||(l=Object(v.a)(["\n  padding: 10vh 10vw 5vh 10vw;\n"]))),ne=function(){var e=$(),t=Object(p.a)(e,3),n=t[0],a=t[1],r=t[2],c=Object(h.useMemo)((function(){return r||0!==n.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{container:!0,spacing:6,children:n.map((function(e){return Object(N.jsx)(g.a,{item:!0,sm:12,children:Object(N.jsx)(L,{item:e,onItemLiked:a})},e.id)}))}),r&&Object(N.jsx)(q,{})]}):Object(N.jsx)(G,{})}),[n,a,r]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(te,{children:[Object(N.jsx)(w.a,{variant:"h1",children:"Spacetagram"}),Object(N.jsx)(w.a,{children:"Powered by NASA's Astronomy Photo of the Day API"})]}),Object(N.jsx)(ee,{children:c})]})},ae=x.a.div(b||(b=Object(v.a)(["\n  width: ","px;\n  height: ","px;\n  box-shadow: ",";\n"])),(function(e){var t;return null!==(t=e.size)&&void 0!==t?t:1}),(function(e){var t;return null!==(t=e.size)&&void 0!==t?t:1}),(function(e){var t;return Array.from(Array(null!==(t=e.num)&&void 0!==t?t:200),(function(){return function(){var e=Math.floor(100*Math.random()),t=Math.floor(200*Math.random());return"".concat(e,"vw ").concat(t,"vh #FFF")}()})).join(",")})),re=function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(ae,{className:"App-stars",size:1,num:512}),Object(N.jsx)(ae,{className:"App-stars",size:3,num:256}),Object(N.jsx)("div",{className:"App-content",children:Object(N.jsx)(ne,{})})]})};m.a.render(Object(N.jsx)(O.a.StrictMode,{children:Object(N.jsx)(re,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.1bfa6a7b.chunk.js.map