(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[12],{1399:function(e,t,n){"use strict";n.r(t);var r,c,o,a,i,s,u,j,b,l,d,p=n(8),f=n(1),O=n(2),x=n(4),h=n(92),g=n(13),m=n(244),v=Object(x.e)(O.db)(r||(r=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),y=n(0),C=Object(x.e)(O.n)(c||(c=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),w=function(){var e=Object(g.b)().t;return Object(y.jsx)(C,{children:Object(y.jsx)(m.a,{children:Object(y.jsxs)(O.X,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(O.n,{pr:"32px",children:[Object(y.jsx)(O.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:e("Voting")}),Object(y.jsx)(O.Z,{as:"h3",scale:"lg",mb:"16px",children:e("Have your say in the future of the PancakeSwap Ecosystem")}),Object(y.jsx)(O.r,{startIcon:Object(y.jsx)(O.Pb,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},k=Object(x.e)(O.n)(o||(o=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),I=function(){var e=Object(g.b)().t;return Object(y.jsx)(k,{children:Object(y.jsx)(m.a,{children:Object(y.jsxs)(O.X,{alignItems:"center",justifyContent:"space-between",children:[Object(y.jsxs)(O.n,{pr:"32px",children:[Object(y.jsx)(O.Z,{as:"h2",scale:"lg",mb:"16px",children:e("Got a suggestion?")}),Object(y.jsx)(O.ic,{as:"p",children:e("Community proposals are a great way to see how the community feels about your ideas.")}),Object(y.jsx)(O.ic,{as:"p",mb:"16px",children:e("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),Object(y.jsx)(O.r,{startIcon:Object(y.jsx)(O.Pb,{color:"currentColor",width:"24px"}),as:h.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(y.jsx)(v,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})},S=n(5),T=n(9),E=n(58),L=n(379),N=n(829),A=n(48),D=n(797),P=n(805),M=n.n(P),X=n(799),V=Object(x.e)(O.X)(a||(a=Object(p.a)(["\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.cardBorder})),B=x.e.div(i||(i=Object(p.a)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"])),V),G=function(){return Object(y.jsx)(B,{children:M()(X.d).map((function(e){return Object(y.jsxs)(V,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[Object(y.jsxs)(O.n,{style:{flex:1},children:[Object(y.jsx)(O.Tb,{height:"21px",width:"70%",mb:"4px"}),Object(y.jsx)(O.Tb,{height:"21px",width:"30%",mb:"4px"}),Object(y.jsx)(O.Tb,{height:"21px",width:"40%"})]}),Object(y.jsx)(O.Tb,{height:"32px",width:"32px"})]},e)}))})},H=x.e.div(s||(s=Object(p.a)(["\n  background-color: ",";\n  padding-top: 16px;\n"])),(function(e){return e.theme.colors.input})),Z=function(e){switch(e){case A.f.COMMUNITY:return 1;case A.f.ALL:return 2;case A.f.CORE:default:return 0}},J=function(e){var t=e.proposalType,n=e.onTypeChange,r=Object(g.b)().t;return Object(y.jsx)(H,{children:Object(y.jsxs)(O.dc,{activeIndex:Z(t),onItemClick:function(e){n(function(e){switch(e){case 1:return A.f.COMMUNITY;case 2:return A.f.ALL;default:return A.f.CORE}}(e))},children:[Object(y.jsx)(O.cc,{children:Object(y.jsxs)(O.X,{alignItems:"center",children:[Object(y.jsx)(O.uc,{color:"currentColor",mr:"4px"}),r("Core")]})}),Object(y.jsxs)(O.cc,{children:[" ",Object(y.jsxs)(O.X,{alignItems:"center",children:[Object(y.jsx)(O.O,{color:"currentColor",mr:"4px"}),r("Community")]})]}),Object(y.jsx)(O.cc,{children:"All"})]})})},R=n(20),F=n(770),U=function(e){var t=Object(R.default)(1e3*e);return Object(F.default)(t,"MMM do, yyyy HH:mm")},Y=function(e){var t=e.startDate,n=e.endDate,r=e.proposalState,c=Object(g.b)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return r===A.e.CLOSED?Object(y.jsx)(O.ic,Object(S.a)(Object(S.a)({},o),{},{children:c("Ended %date%",{date:U(n)})})):r===A.e.PENDING?Object(y.jsx)(O.ic,Object(S.a)(Object(S.a)({},o),{},{children:c("Starts %date%",{date:U(t)})})):Object(y.jsx)(O.ic,Object(S.a)(Object(S.a)({},o),{},{children:c("Ends %date%",{date:U(n)})}))},Q=n(843),_=Object(x.e)(h.a)(u||(u=Object(p.a)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.dropdown})),z=function(e){var t=e.proposal,n="/voting/proposal/".concat(t.id);return Object(y.jsxs)(_,{to:n,children:[Object(y.jsxs)(O.n,{as:"span",style:{flex:1},children:[Object(y.jsx)(O.ic,{bold:!0,mb:"8px",children:t.title}),Object(y.jsx)(O.X,{alignItems:"center",mb:"8px",children:Object(y.jsx)(Y,{startDate:t.start,endDate:t.end,proposalState:t.state})}),Object(y.jsxs)(O.X,{alignItems:"center",children:[Object(y.jsx)(Q.a,{proposalState:t.state}),Object(y.jsx)(Q.b,{isCoreProposal:Object(D.h)(t),ml:"8px"})]})]}),Object(y.jsx)(O.cb,{variant:"text",children:Object(y.jsx)(O.f,{width:"24px"})})]})},K=Object(x.e)(O.X).attrs({alignItems:"center"})(j||(j=Object(p.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),q=x.e.label(b||(b=Object(p.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]))),W=[{value:A.e.ACTIVE,label:"Vote Now"},{value:A.e.PENDING,label:"Soon"},{value:A.e.CLOSED,label:"Closed"}],$=function(e){var t=e.filterState,n=e.onFilterChange,r=e.isLoading,c=Object(g.b)().t;return Object(y.jsx)(K,{children:W.map((function(e){var o=e.value,a=e.label;return Object(y.jsxs)(q,{children:[Object(y.jsx)(O.Qb,{scale:"sm",value:o,checked:t===o,onChange:function(e){var t=e.currentTarget.value;n(t)},disabled:r}),Object(y.jsx)(O.ic,{ml:"8px",children:c(a)})]},a)}))})},ee=function(){var e=Object(g.b)().t,t=Object(f.useState)({proposalType:A.f.CORE,filterState:A.e.ACTIVE}),n=Object(T.a)(t,2),r=n[0],c=n[1],o=Object(N.b)(),a=Object(N.c)(),i=Object(E.b)(),s=r.proposalType,u=r.filterState,j=o===A.h.LOADING,b=o===A.h.IDLE;Object(f.useEffect)((function(){i(Object(L.c)({first:1e3,state:u}))}),[u,i]);var l=Object(D.b)(Object(D.c)(a,s),u);return Object(y.jsxs)(m.a,{py:"40px",children:[Object(y.jsx)(O.n,{mb:"48px",children:Object(y.jsxs)(O.o,{children:[Object(y.jsx)(h.a,{to:"/",children:e("Home")}),Object(y.jsx)(O.ic,{children:e("Voting")})]})}),Object(y.jsx)(O.Z,{as:"h2",scale:"xl",mb:"32px",children:e("Proposals")}),Object(y.jsxs)(O.v,{children:[Object(y.jsx)(J,{proposalType:s,onTypeChange:function(e){c((function(t){return Object(S.a)(Object(S.a)({},t),{},{proposalType:e})}))}}),Object(y.jsx)($,{filterState:u,onFilterChange:function(e){c((function(t){return Object(S.a)(Object(S.a)({},t),{},{filterState:e})}))},isLoading:j}),j&&Object(y.jsx)(G,{}),b&&l.length>0&&l.map((function(e){return Object(y.jsx)(z,{proposal:e},e.id)})),b&&0===l.length&&Object(y.jsx)(O.X,{alignItems:"center",justifyContent:"center",p:"32px",children:Object(y.jsx)(O.Z,{as:"h5",children:e("No proposals found")})})]})]})},te=x.e.div(l||(l=Object(p.a)(["\n  flex: none;\n"]))),ne=x.e.div(d||(d=Object(p.a)(["\n  flex: 1;\n  height: 100%;\n"])));t.default=function(){return Object(y.jsxs)(O.X,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[Object(y.jsx)(te,{children:Object(y.jsx)(w,{})}),Object(y.jsx)(ne,{children:Object(y.jsx)(ee,{})}),Object(y.jsx)(te,{children:Object(y.jsx)(I,{})})]})}},797:function(e,t,n){"use strict";n.d(t,"h",(function(){return x})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"g",(function(){return C})),n.d(t,"a",(function(){return w})),n.d(t,"f",(function(){return k}));var r=n(17),c=n(34),o=n(5),a=n(3),i=n.n(a),s=n(12),u=n(14),j=n.n(u),b=n(19),l=n(95),d=n(29),p=n(48),f=n(94),O=n(799),x=function(e){return e.author.toLowerCase()===O.a.toLowerCase()},h=function(e,t){switch(t){case p.f.COMMUNITY:return e.filter((function(e){return!x(e)}));case p.f.CORE:return e.filter((function(e){return x(e)}));case p.f.ALL:default:return e}},g=function(e,t){return e.filter((function(e){return e.state===t}))},m=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:Object(b.g)(),decimals:18}}]}},v=function(){return{version:O.e,timestamp:(Date.now()/1e3).toFixed(),space:O.c}},y=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.f,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw r=e.sent,new Error(null===r||void 0===r?void 0:r.error_description);case 8:return e.next=10,n.json();case 10:return c=e.sent,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(i.a.mark((function e(t,n,r){var c,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,e.t0){e.next=5;break}return e.next=4,f.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return c=e.t0,e.next=8,fetch("".concat(l.g,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:c,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},n,e[n]?[].concat(Object(c.a)(e[n]),[t]):[t]))}),{})},k=function(e){return e.reduce((function(e,t){var n,r=new j.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(r)}),d.c)}},799:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));var r=10,c="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",i="cake.eth",s=10},805:function(e,t,n){var r=n(489),c=n(827),o=n(828),a=4294967295,i=Math.min;e.exports=function(e,t){if((e=o(e))<1||e>9007199254740991)return[];var n=a,s=i(e,a);t=c(t),e-=a;for(var u=r(s,t);++n<e;)t(n);return u}},827:function(e,t,n){var r=n(173);e.exports=function(e){return"function"==typeof e?e:r}},828:function(e,t,n){var r=n(490);e.exports=function(e){var t=r(e),n=t%1;return t===t?n?t-n:t:0}},829:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(30),c=function(){var e=Object(r.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(r.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(r.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},i=function(){return Object(r.c)((function(e){return e.voting.voteLoadingStatus}))},s=function(){return Object(r.c)((function(e){return e.voting.proposalLoadingStatus}))}},843:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return b}));var r=n(5),c=n(51),o=(n(1),n(191)),a=n(48),i=n(0),s=["proposalState"],u=["isCoreProposal"],j=function(e){var t=e.proposalState,n=Object(c.a)(e,s);return t===a.e.ACTIVE?Object(i.jsx)(o.h,Object(r.a)({},n)):t===a.e.PENDING?Object(i.jsx)(o.g,Object(r.a)({},n)):Object(i.jsx)(o.a,Object(r.a)({},n))},b=function(e){var t=e.isCoreProposal,n=Object(c.a)(e,u);return t?Object(i.jsx)(o.d,Object(r.a)({},n)):Object(i.jsx)(o.b,Object(r.a)({},n))}}}]);
//# sourceMappingURL=12.a84febd7.chunk.js.map