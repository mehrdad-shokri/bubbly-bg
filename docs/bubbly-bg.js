"use strict";window.bubbly=function(t){var i=t||{},o=function(){return Math.random()},e=document.createElement("canvas");document.body.appendChild(e),e.setAttribute("style","position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;"),e.width=window.innerWidth,e.height=window.innerHeight;var a=e.getContext("2d"),r=a.createLinearGradient(0,0,e.width,e.height);r.addColorStop(0,i.colorStart||"#25A6E1"),r.addColorStop(1,i.colorStop||"#176EB5");for(var l=i.bubbles||Math.floor(.02*(e.width+e.height)),h=[],n=0;n<l;n++)h.push({fill:(i.bubbleFunc||function(){return"hsla(0, 0%, 100%, "+.1*o()+")"}).call(),xPos:o()*e.width,yPos:o()*e.height,radius:4+o()*e.width/25,angle:o()*Math.PI*2,velocity:.1+.5*o()});!function t(){i.animate&&requestAnimationFrame(t),a.globalCompositeOperation="source-over",a.fillStyle=r,a.fillRect(0,0,e.width,e.height),a.globalCompositeOperation=i.compose||"lighter",a.shadowColor=i.shadowColor||"#fff",h.forEach(function(t){a.beginPath(),a.arc(t.xPos,t.yPos,t.radius,0,2*Math.PI),a.fillStyle=t.fill,a.shadowBlur=i.blur||2+5*o(),a.fill(),t.xPos+=Math.cos(t.angle)*t.velocity,t.yPos+=Math.sin(t.angle)*t.velocity,t.xPos-t.radius>e.width&&(t.xPos=-t.radius),t.xPos+t.radius<0&&(t.xPos=e.width+t.radius),t.yPos-t.radius>e.height&&(t.yPos=-t.radius),t.yPos+t.radius<0&&(t.yPos=e.height+t.radius)})}()};