!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);!function(){var e=document.getElementById("start-game"),t=document.getElementById("intro"),r=document.getElementById("game"),a=document.getElementById("results"),n=document.querySelector("#game .game-player1 h2"),o=document.querySelector("#game .game-player2 h2"),l=document.querySelector("#game .game-player1 h3"),s=document.querySelector("#game .game-player2 h3"),i=document.querySelectorAll("#game .points"),c=document.querySelectorAll('#game .round-details div[class^="shot-"]'),d=document.querySelector("#game .score-adj .double"),u=document.querySelector("#game .score-adj .triple"),h=document.querySelector("#game .round-details .delete"),p=document.querySelector("#game .round-details .add"),m=new b,y=new b,f=m,g=y;function v(){return{closed:!1,hits:0,marker:{0:"-",1:"/",2:"X",3:"O"}}}function b(){this.pointsArray=[],this.pointsTotal=0,this.board={20:new v,19:new v,18:new v,17:new v,16:new v,15:new v,25:new v},this.shot=[],this.name=document.getElementById("player1").value,this.player=n,this.playerPoints=l,this.playerPointsClassName=".p1"}function L(e,t){25===e&&(e="bull"),"25 (2)"===e&&(e="bull (2)"),"25 (3)"===e&&(e="bull (3)"),c[t].innerHTML=e}i.forEach(function(e){e.addEventListener("click",function(){f.shot.length<3&&(f.shot.push([Number(this.dataset.score)]),L(Number(this.dataset.score),f.shot.length-1))})}),e.addEventListener("click",function(e){e.preventDefault();document.getElementById("player1"),document.getElementById("player2");t.classList.add("hidden"),r.classList.remove("hidden"),n.innerHTML=player1.value,o.innerHTML=player2.value,m.name=player1.value,m.player=n,y.name=player2.value,y.player=o}),d.addEventListener("click",function(){if(0!==f.shot.length){var e=f.shot[f.shot.length-1][0];L(e+" (2)",f.shot.length-1),f.shot.pop(),f.shot.push([e,e])}}),u.addEventListener("click",function(){if(0!==f.shot.length){var e=f.shot[f.shot.length-1][0];L(e+" (3)",f.shot.length-1),f.shot.pop(),f.shot.push([e,e,e])}}),h.addEventListener("click",function(){f.shot.pop(),L("",f.shot.length)}),p.addEventListener("click",function(){var e;3===f.shot.length&&(!function(o){var e=o.shot.flat();for(var t in e.map(function(e){var t,n;t=e,(n=o).board[t]&&(n.board[t].closed&&!1===g.board[t].closed&&n.pointsArray.push(t),!1===n.board[t].closed&&n.board[t].hits<3&&(n.board[t].hits=n.board[t].hits+1,3===n.board[t].hits&&(n.board[t].closed=!0)))}),c.forEach(function(e){e.innerHTML=""}),m.playerPoints=l,y.playerPoints=s,o.board)document.querySelector("#game .score-"+t+" "+o.playerPointsClassName).innerHTML=o.board[t].marker[o.board[t].hits];var n=!0;for(var t in o.board)!1===o.board[t].closed&&(n=!1);n&&(console.log("activePlayer ",f),r.classList.add("hidden"),a.classList.remove("hidden"))}(f),f.player.classList.remove("active-player"),f.playerPoints.innerHTML=(e=f.pointsArray.reduce(function(e,t){return e+t},0),f.pointsArray=[],f.pointsTotal=f.pointsTotal+e,0<f.pointsTotal?f.pointsTotal:""),(f=m.shot.length!=y.shot.length?(g=m,y.playerPointsClassName=".p2",y):(f.shot=[],m.playerPointsClassName=".p1",g=y,m)).shot=[],f.player.classList.add("active-player"))})}()},function(e,t,n){}]);