(this["webpackJsonpinfotech-mortal-kombat"]=this["webpackJsonpinfotech-mortal-kombat"]||[]).push([[0],{110:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":40,"density":{"enable":true,"value_area":800}},"color":{"value":"#fda90f"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},14:function(e,a,n){e.exports={container:"ChooseHero_container__1v3MR",title:"ChooseHero_title__1Sgii",list:"ChooseHero_list__33mMX",main:"ChooseHero_main__3rJwv",myHero:"ChooseHero_myHero__2n_eL",myEnemy:"ChooseHero_myEnemy__1FnnR",heroAnimation:"ChooseHero_heroAnimation__38KR9",img:"ChooseHero_img__LBAW0",heroName:"ChooseHero_heroName__61a3Z",listWrapper:"ChooseHero_listWrapper__r91-F",enemy:"ChooseHero_enemy__2vFD3"}},29:function(e,a,n){e.exports={heroes:"HeroesFight_heroes__2bEHG",heroName:"HeroesFight_heroName__aE5KD",enemyAnimation:"HeroesFight_enemyAnimation__2RS5R",img:"HeroesFight_img__1vqN0",heroAnimation:"HeroesFight_heroAnimation__2t0gr"}},359:function(e,a,n){},360:function(e,a,n){"use strict";n.r(a);var t=n(3),i=n(2),s=n.n(i),r=n(57),o=n.n(r),c=n(37),m=n(32),u=n(9),b=n(108),l=n.n(b),d=n(13),g=n(19),A=n(41),p=n(28),h={baraka:n.p+"static/media/baraka.3091c962.png",jade:n.p+"static/media/jade.f8cc7929.png",jaxBriggs:n.p+"static/media/jaxBriggs.858fe57d.png",johnnyCage:n.p+"static/media/johnnyCage.6e0d1ac8.png",kabal:n.p+"static/media/kabal.0262c6f2.png",kano:n.p+"static/media/kano.11d835e4.png",kitana:n.p+"static/media/kitana.e75f70e5.png",kungLao:n.p+"static/media/kungLao.26b4dc59.png",liuKang:n.p+"static/media/liuKang.1b1d2a66.png",mileena:n.p+"static/media/mileena.4b0b4b79.png",nightwolf:n.p+"static/media/nightwolf.4078106c.png",noobSaibot:n.p+"static/media/noobSaibot.d080b4d2.png",raiden:n.p+"static/media/raiden.fb224d8b.png",rain:n.p+"static/media/rain.8bdb686b.png",scorpion:n.p+"static/media/scorpion.5ac016be.png",shangTsung:n.p+"static/media/shangTsung.19bcaaf3.png",shaoKahn:n.p+"static/media/shaoKahn.47b66fa4.png",sheeva:n.p+"static/media/sheeva.96074158.png",sindel:n.p+"static/media/sindel.0e2cda61.png",sonyaBlade:n.p+"static/media/sonyaBlade.4d7a23b3.png",subZero:n.p+"static/media/subZero.f621ee82.png"},j={arena1:n.p+"static/media/blackdragonfightclub.e37283b9.jpg",arena2:n.p+"static/media/blackmarketalley.bf73bf98.jpg",arena3:n.p+"static/media/chaotianage.5ace5b22.png",arena4:n.p+"static/media/cyberlinkueiassembly.9febc44e.jpg",arena5:n.p+"static/media/kronikashourglass.b92e207f.jpg",arena6:n.p+"static/media/losthiveofthekytinn.f3fc4933.jpg",arena7:n.p+"static/media/prehistoricage.fa650b56.png",arena8:n.p+"static/media/shaolintrapdungeon.e49f4088.jpg",arena9:n.p+"static/media/shinnoksbonetemple.5dc59902.jpg",arena10:n.p+"static/media/specialforcesdesertcommand.4d679413.jpg",arena11:n.p+"static/media/tnseaofblood.ba595aba.jpg",arena12:n.p+"static/media/wushidragongrotto.095cfa79.jpg"},f=Object.keys(h).length-1,y=Object.keys(h).length-2,O=function(e,a){return a.filter((function(a,n){return n===e})).join("")},C=function(e,a){var n=e+Math.random()*(a+1-e);return Math.floor(n)},w=function(e,a){for(var n=Object.values(a)[C(0,Object.keys(a).length-1)];(null===e||void 0===e?void 0:e.iconName)===n.iconName;)n=Object.values(a)[C(0,Object.keys(a).length-1)];return n},x=function(e){return function(e){var a={};return e.forEach((function(e){a[e]?a[e]=a[e]+1:a[e]=1})),Math.max.apply(Math,Object(A.a)(Object.values(a)))}(e.filter((function(e){return null===e||void 0===e?void 0:e.iconName})).reduce((function(e,a){return e.push(a.iconName),e}),[]))},v=n(22),I={baraka:"Baraka",jade:"Jade",jaxBriggs:"Jax Briggs",johnnyCage:"Johnny Cage",kabal:"Kabal",kano:"Kano",kitana:"Kitana",kungLao:"Kung Lao",liuKang:"Liu Kang",mileena:"Mileena",nightwolf:"Nightwolf",noobSaibot:"Noob Saibot",raiden:"Raiden",rain:"Rain",scorpion:"Scorpion",shangTsung:"Shang Tsung",shaoKahn:"Shao Kahn",sheeva:"Sheeva",sindel:"Sindel",sonyaBlade:"Sonya Blade",subZero:"Sub Zero"},k={q:"q",w:"w",e:"e",r:"r",t:"t",y:"y"},N={q:"\u0439",w:"\u0446",e:"\u0443",r:"\u043a",t:"\u0435",y:"\u043d"},B={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"},q="Enter",K={faLongArrowAltDown:v.a,faLongArrowAltLeft:v.b,faLongArrowAltRight:v.c,faLongArrowAltUp:v.d,faRandom:v.e,faRecycle:v.f},E=C(3,5),Q=C(6,8),G=3,H={baraka:n.p+"static/media/baraka.c92e92dd.gif",jade:n.p+"static/media/jade.1803209d.gif",jaxBriggs:n.p+"static/media/jaxBriggs.b8c4a5f8.gif",johnnyCage:n.p+"static/media/johnnyCage.0e91aca3.gif",kabal:n.p+"static/media/kabal.05e7254d.gif",kano:n.p+"static/media/kano.f4e2a961.gif",kitana:n.p+"static/media/kitana.1f02091c.gif",kungLao:n.p+"static/media/kungLao.2212bcac.gif",liuKang:n.p+"static/media/liuKang.009ed17e.gif",mileena:n.p+"static/media/mileena.6ccd5ab0.gif",nightwolf:n.p+"static/media/nightwolf.c32f4f52.gif",noobSaibot:"data:image/gif;base64,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",raiden:n.p+"static/media/raiden.1be62630.gif",rain:n.p+"static/media/rain.2b8a2e85.gif",scorpion:n.p+"static/media/scorpion.136faf5a.gif",shangTsung:n.p+"static/media/shangTsung.4380da3e.gif",shaoKahn:n.p+"static/media/shaoKahn.4144ca51.gif",sheeva:n.p+"static/media/sheeva.8898ff2b.gif",sindel:n.p+"static/media/sindel.6846c309.gif",sonyaBlade:n.p+"static/media/sonyaBlade.c91ba098.gif",subZero:n.p+"static/media/subZero.e4a89a73.gif"},F=n(42),J=n.n(F);function S(e){var a=e.hero,n=e.index,i=e.active,s=e.handleHeroCardClick;return Object(t.jsxs)("li",{className:i?J.a.activeCard:J.a.card,onClick:function(){return s(n)},children:[Object(t.jsx)("img",{className:J.a.img,src:h[a],alt:I[a]}),Object(t.jsx)("p",{className:J.a.name,children:I[a]})]})}var M="/mc_choose_hero",Y="/mc_vs_screen",D=n(33),W=Object(D.b)("myHero"),L=Object(D.b)("myEnemy"),R=n(14),z=n.n(R),U={myHeroName:"",myEnemyName:"",myChosenHeroName:"",myChosenEnemyName:"",countHeroesInRow:null,activeHeroIndex:null},V="myHeroName",Z="myEnemyName",X="myChosenHeroName",T="myChosenEnemyName",P="countHeroesInRow",_="activeHeroIndex",$=function(e,a){var n=a.type,t=a.payload;switch(n){case V:return Object(g.a)(Object(g.a)({},e),{},{myHeroName:t});case Z:return Object(g.a)(Object(g.a)({},e),{},{myEnemyName:t});case X:return Object(g.a)(Object(g.a)({},e),{},{myChosenHeroName:t});case T:return Object(g.a)(Object(g.a)({},e),{},{myChosenEnemyName:t});case P:return Object(g.a)(Object(g.a)({},e),{},{countHeroesInRow:t});case _:return Object(g.a)(Object(g.a)({},e),{},{activeHeroIndex:t});default:return e}};function ee(){var e=Object(m.b)(),a=Object(u.g)(),n=Object(i.useRef)(null),s=Object(i.useReducer)($,U),r=Object(d.a)(s,2),o=r[0],c=r[1],b=Object(i.useMemo)((function(){return Object.keys(I)}),[]),l=b.length,g=o.myHeroName,A=o.myEnemyName,h=o.myChosenHeroName,j=o.countHeroesInRow,w=o.activeHeroIndex;Object(i.useEffect)((function(){c({type:P,payload:Math.floor(n.current.offsetWidth/136)}),c({type:_,payload:C(0,Object.keys(I).length-1)})}),[]),Object(i.useEffect)((function(){c({type:V,payload:O(w,b)})}),[b,w]);var x=Object(i.useCallback)((function(){if(j)return Math.ceil((l-2)/j)}),[l,j]),v=Object(i.useCallback)((function(n){var t,i,s=function(e,a,n){if(e){for(var t,i=(t={},Object(p.a)(t,f,{x:-1,y:0}),Object(p.a)(t,y,{x:e,y:0}),t),s=0,r=0,o=0;o<n;o++)if(o<e&&(i[o]={x:s,y:r},s+=1),o>=e)for(var c=1;c<=a();c++)o>=c*e&&o<(c+1)*e&&(r=c,i[o]={x:s-c*e,y:r},s++);return i}}(j,x,l-2),r=Object.values(s);if(n.key===q){var o=O(w,b);h?(c({type:T,payload:o}),e(L(o)),a.push(Y)):(c({type:X,payload:o}),c({type:Z,payload:o}),e(W(o)))}else if(Object.values(B).includes(n.key)){var m=function(e,a,n,t,i,s){var r,o;switch(t){case B.ArrowUp:r=e[a].x,(-1===(o=e[a].y-1)&&-1===r||r===n&&-1===o)&&(o=0),-1===o&&-1!==r&&(o=i()-1),s.find((function(e){return e.x===r&e.y===o}))||(o=i()-2);break;case B.ArrowDown:r=e[a].x,o=e[a].y+1,s.find((function(e){return e.x===r&e.y===o}))||(o=0);break;case B.ArrowLeft:r=e[a].x-1,o=e[a].y,r===-n&&o===i()-1&&(r=0),-1===r&&0!==o&&(r=o===i()-1?(s.length-2)%n-1:n-1),-2===r&&(r=n),s.find((function(e){return e.x===r&e.y===o}))||(r=s.length%n-1);break;case B.ArrowRight:r=e[a].x+1,o=e[a].y,r===n+1&&(r=-1),Object.values(e).find((function(e){return e.x===r&e.y===o}))||(r=0)}return[r,o]}(s,w,j,n.key,x,r),u=Object(d.a)(m,2),g=u[0],A=u[1],C=Number((t=s,i={x:g,y:A},Object.keys(t).find((function(e){return JSON.stringify(t[e])===JSON.stringify(i)}))));c({type:_,payload:C}),c(h?{type:Z,payload:O(C,b)}:{type:V,payload:O(C,b)})}}),[w,j,x,a,h,l,b,e]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),function(){document.removeEventListener("keydown",v)}}),[v]);var k=function(){c({type:P,payload:Math.floor(n.current.offsetWidth/136)})};Object(i.useEffect)((function(){return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}}),[]);var N=function(e){c({type:_,payload:e}),c(h?{type:Z,payload:O(e,b)}:{type:V,payload:O(e,b)})};return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:z.a.container,children:[Object(t.jsx)("p",{className:z.a.title,children:h?Object(t.jsx)("span",{className:z.a.enemy,children:"Choose Your Enemy"}):"Choose Your Hero"}),Object(t.jsx)("div",{className:z.a.main,children:Object(t.jsxs)("div",{className:z.a.listWrapper,children:[Object(t.jsxs)("div",{className:z.a.myHero,children:[Object(t.jsx)(S,{hero:b[l-1],index:l-1,active:l-1===w,handleHeroCardClick:N},b[l-1]),g&&Object(t.jsxs)("div",{className:z.a.heroAnimation,children:[Object(t.jsx)("img",{className:z.a.img,src:h?H[h]:H[g],alt:I[g]}),Object(t.jsx)("p",{className:z.a.heroName,children:h?I[h]:I[g]})]})]}),Object(t.jsx)("ul",{className:z.a.list,ref:n,children:b.slice(0,-2).map((function(e,a){return Object(t.jsx)(S,{hero:e,index:a,active:a===w,handleHeroCardClick:N},e)}))}),Object(t.jsxs)("div",{className:z.a.myEnemy,children:[Object(t.jsx)(S,{hero:b[l-2],index:l-2,active:l-2===w,handleHeroCardClick:N},b[l-2]),A&&Object(t.jsxs)("div",{className:z.a.heroAnimation,children:[Object(t.jsx)("img",{className:z.a.img,src:H[A],alt:H[A]}),Object(t.jsx)("p",{className:z.a.heroName,children:I[A]})]})]})]})})]})})}var ae=function(e){return e.heroes[W]},ne=function(e){return e.heroes[L]},te=n(109),ie=n(44),se=n.n(ie);function re(e){var a=e.icon,n=[a?se.a.buttonWithoutBG:se.a.button].join(" ");return Object(t.jsxs)("div",{className:se.a.container,children:[a&&Object(t.jsx)(te.a,{className:se.a.icon,icon:a}),Object(t.jsx)("button",{type:"button",className:n})]})}var oe=n.p+"static/media/fight.914f65a0.gif",ce=n.p+"static/media/finishHim.c4e2a52b.gif",me=n.p+"static/media/fatality.2d09e225.gif",ue=n.p+"static/media/superFight.6d25ff22.gif",be=n(38),le=n.n(be);function de(e){var a=e.showPopupsInFight,n=Object(d.a)(a,4),i=n[0],s=n[1],r=n[2],o=n[3];return Object(t.jsxs)(t.Fragment,{children:[i&&Object(t.jsx)("div",{className:le.a.fight,children:Object(t.jsx)("img",{src:oe,alt:"fight"})}),s&&Object(t.jsx)("div",{className:le.a.finishHim,children:Object(t.jsx)("img",{src:ce,alt:"finish him"})}),r&&Object(t.jsxs)("div",{className:le.a.fatality,children:[Object(t.jsx)("img",{src:me,alt:"fatality?"}),Object(t.jsx)("span",{className:le.a.questionMark,children:"?"})]}),o&&Object(t.jsx)("div",{className:le.a.superFight,children:Object(t.jsx)("img",{src:ue,alt:"super fight"})})]})}var ge=n(29),Ae=n.n(ge);function pe(e){var a=e.myHeroName,n=e.myEnemyName;return Object(t.jsxs)("div",{className:Ae.a.heroes,children:[Object(t.jsxs)("div",{className:Ae.a.heroAnimation,children:[Object(t.jsx)("p",{className:Ae.a.heroName,children:I[a]}),Object(t.jsx)("img",{className:Ae.a.img,src:H[a],alt:H[a]})]}),Object(t.jsxs)("div",{className:Ae.a.enemyAnimation,children:[Object(t.jsx)("p",{className:Ae.a.heroName,children:I[n]}),Object(t.jsx)("img",{className:Ae.a.img,src:H[n],alt:H[n]})]})]})}var he=n.p+"static/media/frienship.26638297.gif",je=n(45),fe=n.n(je);function ye(){var e=Object(u.g)(),a=Object(i.useCallback)((function(){e.push(M)}),[e]),n=Object(i.useCallback)((function(e){e.key===q&&a()}),[a]);return Object(i.useEffect)((function(){return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[n]),Object(t.jsxs)("div",{className:fe.a.container,children:[Object(t.jsx)("img",{className:fe.a.friendship,src:he,alt:"friendship"}),Object(t.jsx)("img",{className:fe.a.win,src:"data:image/gif;base64,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",alt:"win"}),Object(t.jsx)("button",{onClick:a,className:fe.a.button,type:"button",children:"Start new game"})]})}var Oe=n(46),Ce=n.n(Oe);function we(){var e=Object(u.g)(),a=Object(i.useMemo)((function(){return[Ce.a.container]}),[]),n=Object(m.c)(ae),s=Object(m.c)(ne),r=function(e){var a=Object(i.useState)(e),n=Object(d.a)(a,2),t=n[0],s=n[1];return Object(i.useEffect)((function(){var e=setInterval((function(){s((function(e){return e-1}))}),1e3);return 0===t&&clearInterval(e),function(){clearInterval(e)}}),[t]),t}(10),o=Object(i.useState)(null),c=Object(d.a)(o,2),b=c[0],l=c[1],g=Object(i.useState)(null),p=Object(d.a)(g,2),h=p[0],f=p[1],y=Object(i.useState)(null),O=Object(d.a)(y,2),v=O[0],I=O[1],B=Object(i.useState)(null),q=Object(d.a)(B,2),H=q[0],F=q[1],J=Object(i.useState)(null),S=Object(d.a)(J,2),Y=S[0],D=S[1],W=Object(i.useState)(null),L=Object(d.a)(W,2),R=L[0],z=L[1],U=Object(i.useState)(0),V=Object(d.a)(U,2),Z=V[0],X=V[1];Object(i.useEffect)((function(){n||s||e.push(M)}),[n,s,e]);var T=Object(i.useCallback)((function(e){var a=e.key.toLowerCase();if([].concat(Object(A.a)(Object.values(k)),Object(A.a)(Object.values(N))).includes(a)){var n;switch(Object.values(k).includes(a)?n=k:Object.values(N).includes(a)&&(n=N),a){case n.q:l(w(b,K));break;case n.w:f(w(h,K));break;case n.e:I(w(v,K));break;case n.r:F(w(H,K));break;case n.t:D(w(Y,K));break;case n.y:z(w(R,K))}X((function(e){return e+1}))}}),[b,h,v,H,Y,R]);Object(i.useEffect)((function(){return document.addEventListener("keydown",T),function(){document.removeEventListener("keydown",T)}}),[T]);var P=Object(i.useMemo)((function(){return function(e,a){var n=C(1,Object.keys(j).length);return e.push(a["arena".concat(n)]),e}(a,Ce.a).join(" ")}),[a]),_=[b,h,v,H,Y,R],$=function(e,a){return[e<1,e>=E&&e<Q,e>=Q,x(a)>=G]}(Z,_);return Object(t.jsx)(t.Fragment,{children:0===r?Object(t.jsx)(ye,{}):Object(t.jsxs)("div",{className:P,children:[Object(t.jsx)("div",{className:Ce.a.seconds,children:r}),Object(t.jsx)("div",{className:Ce.a.buttons,children:Object.values(k).map((function(e,a){return Object(t.jsx)(re,{button:e,icon:_[a]},e)}))}),Object(t.jsx)(de,{showPopupsInFight:$}),Object(t.jsx)(pe,{myHeroName:n,myEnemyName:s})]})})}var xe=n(110),ve=n(59),Ie=n.n(ve);function ke(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:Ie.a.smallScreen,children:"Requires a device with a wider screen."}),Object(t.jsxs)("div",{className:Ie.a.app,children:[Object(t.jsx)(l.a,{className:Ie.a.particles,params:xe}),Object(t.jsxs)(u.d,{children:[Object(t.jsx)(u.b,{path:M,children:Object(t.jsx)(ee,{})}),Object(t.jsx)(u.b,{path:Y,children:Object(t.jsx)(we,{})}),Object(t.jsx)(u.a,{to:M})]})]})]})}var Ne,Be=n(24),qe=Object(D.c)({},(Ne={},Object(p.a)(Ne,W,(function(e,a){e[W]=a.payload})),Object(p.a)(Ne,L,(function(e,a){e[L]=a.payload})),Ne)),Ke=(Object(Be.c)({heroesReducer:qe}),Object(D.a)({reducer:{heroes:qe},devTools:!1}));n(359);o.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(m.a,{store:Ke,children:Object(t.jsx)(c.a,{children:Object(t.jsx)(ke,{})})})}),document.getElementById("root"))},38:function(e,a,n){e.exports={fight:"Popups_fight__2fmJg",finishHim:"Popups_finishHim__10c59",fatality:"Popups_fatality__3qmwA",questionMark:"Popups_questionMark__1lCQL",superFight:"Popups_superFight__1NffH"}},42:function(e,a,n){e.exports={card:"HeroCard_card__1lDI0",activeCard:"HeroCard_activeCard__1Rgqd HeroCard_card__1lDI0",img:"HeroCard_img__rcEXX",name:"HeroCard_name__10AH3"}},44:function(e,a,n){e.exports={container:"Button_container__2B8O8",button:"Button_button__2Lf63",buttonWithoutBG:"Button_buttonWithoutBG__36irF Button_button__2Lf63",icon:"Button_icon__36xd-"}},45:function(e,a,n){e.exports={container:"FriendshipWin_container__1JmIr",friendship:"FriendshipWin_friendship__Xiw4M",win:"FriendshipWin_win__Vigui",button:"FriendshipWin_button__AJRjo"}},46:function(e,a,n){e.exports={container:"VsScreen_container__OmYr_",arena1:"VsScreen_arena1__6NO8s",arena2:"VsScreen_arena2__sK0Gn",arena3:"VsScreen_arena3__kV0V3",arena4:"VsScreen_arena4__1LPfp",arena5:"VsScreen_arena5__7RHka",arena6:"VsScreen_arena6__1D_IW",arena7:"VsScreen_arena7__8TUa6",arena8:"VsScreen_arena8__2BPjv",arena9:"VsScreen_arena9__1uMWW",arena10:"VsScreen_arena10__106E3",arena11:"VsScreen_arena11__2pRI-",arena12:"VsScreen_arena12__c_-pI",buttons:"VsScreen_buttons__2i0EJ",seconds:"VsScreen_seconds__1TWkw"}},59:function(e,a,n){e.exports={app:"App_app__3BT4Y",particles:"App_particles__1SoXN",smallScreen:"App_smallScreen__bXKUJ"}}},[[360,1,2]]]);
//# sourceMappingURL=main.d49df63c.chunk.js.map