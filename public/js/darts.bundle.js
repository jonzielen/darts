!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);!function(){var e=document.getElementById("start-game"),t=document.getElementById("intro"),n=document.getElementById("game"),o=(document.getElementById("results"),document.querySelector("#game .game-player1 h2")),r=document.querySelector("#game .game-player2 h2"),a=document.querySelector("#game .game-player1 h3"),l=document.querySelector("#game .game-player2 h3"),s=document.querySelectorAll("#game .points"),i=document.querySelectorAll('#game .round-details div[class^="shot-"]'),u=document.querySelector("#game .score-adj .double"),c=document.querySelector("#game .score-adj .triple"),d=document.querySelector("#game .round-details .delete"),h=document.querySelector("#game .round-details .add"),p=new g,m=new g,y=p;function f(){return{closed:!1,hits:0,marker:{0:"-",1:"/",2:"X",3:"O"}}}function g(){this.pointsArray=[],this.pointsTotal=0,this.board={20:new f,19:new f,18:new f,17:new f,16:new f,15:new f,25:new f},this.shot=[],this.name=document.getElementById("player1").value,this.player=o,this.playerPoints=a}function b(e,t){25===e&&(e="bull"),"25 (2)"===e&&(e="bull (2)"),"25 (3)"===e&&(e="bull (3)"),i[t].innerHTML=e}s.forEach(function(e){e.addEventListener("click",function(){y.shot.length<3&&(y.shot.push([Number(this.dataset.score)]),b(Number(this.dataset.score),y.shot.length-1))})}),e.addEventListener("click",function(e){e.preventDefault();document.getElementById("player1"),document.getElementById("player2");t.classList.add("hidden"),n.classList.remove("hidden"),o.innerHTML=player1.value,r.innerHTML=player2.value,p.name=player1.value,p.player=o,m.name=player2.value,m.player=r}),u.addEventListener("click",function(){if(0!==y.shot.length){var e=y.shot[y.shot.length-1][0];b(e+" (2)",y.shot.length-1),y.shot.pop(),y.shot.push([e,e])}}),c.addEventListener("click",function(){if(0!==y.shot.length){var e=y.shot[y.shot.length-1][0];b(e+" (3)",y.shot.length-1),y.shot.pop(),y.shot.push([e,e,e])}}),d.addEventListener("click",function(){y.shot.pop(),b("",y.shot.length)}),h.addEventListener("click",function(){var e;3===y.shot.length&&(!function(o){var e=o.shot.flat();for(var t in e.map(function(e){var t,n;t=e,(n=o).board[t]&&(!1===n.board[t].closed&&n.board[t].hits<3&&(n.board[t].hits=n.board[t].hits+1,3===n.board[t].hits&&(n.board[t].closed=!0)),n.board[t].closed&&n.pointsArray.push(t))}),i.forEach(function(e){e.innerHTML=""}),p.playerPoints=a,m.playerPoints=l,console.log("board: ",o,o.board),o.board)document.querySelector("#game .score-"+t+" .p1").innerHTML=o.board[t].marker[o.board[t].hits]}(y),y.player.classList.remove("active-player"),y.playerPoints.innerHTML=(e=y.pointsArray.reduce(function(e,t){return e+t},0),y.pointsArray=[],y.pointsTotal=y.pointsTotal+e,0<y.pointsTotal?y.pointsTotal:""),(y=p.shot.length!=m.shot.length?m:(y.shot=[],p)).shot=[],y.player.classList.add("active-player")),console.log(p,m)})}()},function(e,t,n){}]);