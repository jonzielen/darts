!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);!function(){var e=document.getElementById("start-game"),t=document.getElementById("intro"),n=document.getElementById("game"),o=(document.getElementById("results"),document.querySelector("#game .game-player1 h2")),r=document.querySelector("#game .game-player2 h2"),l=document.querySelectorAll("#game .points"),c=document.querySelectorAll('#game .round-details div[class^="shot-"]'),u=document.querySelector("#game .score-adj .double"),s=document.querySelector("#game .score-adj .triple"),a=document.querySelector("#game .round-details .delete"),i=document.querySelector("#game .round-details .add"),d=new g,h=new g,m=d;function f(){return{closed:!1,hits:0,marker:{0:"-",1:"/",2:"X",3:"O"}}}function g(){this.score=[],this.board={20:new f,19:new f,18:new f,17:new f,16:new f,15:new f,bulls:new f},this.shot=[],this.name=document.getElementById("player1").value,this.player=o}function y(e,t){25===e&&(e="bull"),"25 (2)"===e&&(e="bull (2)"),"25 (3)"===e&&(e="bull (3)"),c[t].innerHTML=e}l.forEach(function(e){e.addEventListener("click",function(){m.shot.length<3&&(m.shot.push(Number(this.dataset.score)),y(Number(this.dataset.score),m.shot.length-1))})}),e.addEventListener("click",function(e){e.preventDefault();document.getElementById("player1"),document.getElementById("player2");t.classList.add("hidden"),n.classList.remove("hidden"),o.innerHTML=player1.value,r.innerHTML=player2.value,d.name=player1.value,d.player=o,h.name=player2.value,h.player=r}),u.addEventListener("click",function(){0!==m.shot.length&&(console.log("double ",m.shot[m.shot.length-1],2*m.shot[m.shot.length-1]),y(m.shot[m.shot.length-1]+" (2)",m.shot.length-1))}),s.addEventListener("click",function(){0!==m.shot.length&&(console.log("triple ",m.shot[m.shot.length-1],3*m.shot[m.shot.length-1]),y(m.shot[m.shot.length-1]+" (3)",m.shot.length-1))}),a.addEventListener("click",function(){m.shot.pop(),y("",m.shot.length)}),i.addEventListener("click",function(){3===m.shot.length&&(m.shot.forEach(function(e){m.score.push(e)}),c.forEach(function(e){e.innerHTML=""}),m.player.classList.remove("active-player"),(m=d.score.length==h.score.length?d:h).shot=[],m.player.classList.add("active-player")),console.log(d,h)})}()},function(e,t,n){}]);