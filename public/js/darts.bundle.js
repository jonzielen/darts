!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);!function(){var e=document.getElementById("start-game"),t=document.getElementById("intro"),n=document.getElementById("game"),r=(document.getElementById("results"),document.querySelector("#game .game-player1 h2")),o=document.querySelector("#game .game-player2 h2"),l=document.querySelectorAll("#game .points"),c=document.querySelectorAll('#game .round-details div[class^="shot-"]'),u=document.querySelector("#game .score-adj .double"),d=document.querySelector("#game .score-adj .triple"),i=document.querySelector("#game .round-details .delete"),a=document.querySelector("#game .round-details .add"),s={score:[],board:[]},g={score:[],board:[]},f=[],m=p();function y(e,t){25===e&&(e="bull"),"25 (2)"===e&&(e="bull (2)"),"25 (3)"===e&&(e="bull (3)"),c[t].innerHTML=e}function p(){return s.score.length==g.score.length?s:g}l.forEach(function(e){e.addEventListener("click",function(){this.dataset.score;f.length<3&&(f.push(Number(this.dataset.score)),y(Number(this.dataset.score),f.length-1))})}),e.addEventListener("click",function(e){e.preventDefault();document.getElementById("player1"),document.getElementById("player2");t.classList.add("hidden"),n.classList.remove("hidden"),r.innerHTML=player1.value,o.innerHTML=player2.value}),u.addEventListener("click",function(e){0!==f.length&&(console.log("double ",f[f.length-1],2*f[f.length-1]),y(f[f.length-1]+" (2)",f.length-1))}),d.addEventListener("click",function(e){0!==f.length&&(console.log("triple ",f[f.length-1],3*f[f.length-1]),y(f[f.length-1]+" (3)",f.length-1))}),i.addEventListener("click",function(e){f.pop(),y("",f.length)}),a.addEventListener("click",function(e){3===f.length&&(m.score.push(f),m=p(),c.forEach(function(e){e.innerHTML="",f=[]})),console.log(s,g)})}()},function(e,t,n){}]);