!function(n){var r={};function l(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);!function(){var e=document.getElementById("start-game"),t=document.getElementById("intro"),n=document.getElementById("game"),r=(document.getElementById("results"),document.querySelector("#game .game-player1 h2")),l=document.querySelector("#game .game-player2 h2"),o=document.querySelectorAll("#game .points"),c=document.querySelectorAll('#game .round-details div[class^="shot-"]'),u=document.querySelector("#game .score-adj .double"),a=document.querySelector("#game .score-adj .triple"),i=document.querySelector("#game .round-details .delete"),d=document.querySelector("#game .round-details .add"),s=new y,m=new y,f=[],g=s;function y(){this.score=[],this.board=[],this.shot=[]}function p(e,t){25===e&&(e="bull"),"25 (2)"===e&&(e="bull (2)"),"25 (3)"===e&&(e="bull (3)"),c[t].innerHTML=e}o.forEach(function(e){e.addEventListener("click",function(){f.length<3&&(f.push(Number(this.dataset.score)),p(Number(this.dataset.score),f.length-1))})}),e.addEventListener("click",function(e){e.preventDefault();document.getElementById("player1"),document.getElementById("player2");t.classList.add("hidden"),n.classList.remove("hidden"),r.innerHTML=player1.value,l.innerHTML=player2.value,s.name=player1.value,s.player=r,m.name=player2.value,m.player=l}),u.addEventListener("click",function(){0!==f.length&&(console.log("double ",f[f.length-1],2*f[f.length-1]),p(f[f.length-1]+" (2)",f.length-1))}),a.addEventListener("click",function(){0!==f.length&&(console.log("triple ",f[f.length-1],3*f[f.length-1]),p(f[f.length-1]+" (3)",f.length-1))}),i.addEventListener("click",function(){f.pop(),p("",f.length)}),d.addEventListener("click",function(){3===f.length&&(f.forEach(function(e){g.score.push(e)}),c.forEach(function(e){e.innerHTML=""}),g.player.classList.remove("active-player"),g=s.score.length==m.score.length?s:m,f=[],g.player.classList.add("active-player"))})}()},function(e,t,n){}]);