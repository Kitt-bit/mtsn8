!function(){"use strict";var t={410:function(t,o,n){var e=n(206);o.H=e.createRoot,e.hydrateRoot},206:function(t){t.exports=ReactDOM}},o={};function n(e){var c=o[e];if(void 0!==c)return c.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}!function(){var t=React,o=n(410),e=function(t){var o=t||{},n=o.side,e=void 0===n?2:n,c=o.vertical,a=void 0===c?"0px":c,i=o.horizontal,r=void 0===i?"0px":i,l=o.top,d=void 0===l?"0px":l,s=o.right,u=void 0===s?"0px":s,v=o.bottom,p=void 0===v?"0px":v,f=o.left,y=void 0===f?"0px":f;return 2===e?"".concat(a," ").concat(r):"".concat(d," ").concat(u," ").concat(p," ").concat(y)},c=function(t,o){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],e=o||{},c=e.fontFamily,a=void 0===c?"Default":c,i=e.fontCategory,r=void 0===i?"sans-serif":i,l=e.fontVariant,d=void 0===l?400:l,s=e.fontWeight,u=void 0===s?400:s,v=e.isUploadFont,p=void 0===v||v,f=e.fontSize,y=void 0===f?{desktop:15,tablet:15,mobile:15}:f,b=e.fontStyle,m=void 0===b?"normal":b,g=e.textTransform,h=void 0===g?"none":g,k=e.textDecoration,x=void 0===k?"auto":k,R=e.lineHeight,E=void 0===R?"135%":R,L=e.letterSpace,w=void 0===L?"0px":L,C=function(t,o){return t?"".concat(o,": ").concat(t,";"):""},I=!n||!a||"Default"===a,A=(null==y?void 0:y.desktop)||y,H=(null==y?void 0:y.tablet)||A,T=(null==y?void 0:y.mobile)||H,B="\n\t\t".concat(I?"":"font-family: '".concat(a,"', ").concat(r,";"),"\n\t\t").concat(C(u,"font-weight"),"\n\t\t","font-size: ".concat(A,"px;"),"\n\t\t").concat(C(m,"font-style"),"\n\t\t").concat(C(h,"text-transform"),"\n\t\t").concat(C(x,"text-decoration"),"\n\t\t").concat(C(E,"line-height"),"\n\t\t").concat(C(w,"letter-spacing"),"\n\t"),P=d&&400!==d?"400i"===d?":ital@1":null!=d&&d.includes("00i")?": ital, wght@1, ".concat(null==d?void 0:d.replace("00i","00")," "):": wght@".concat(d," "):"",S=I?"":"https://fonts.googleapis.com/css2?family=".concat(null==a?void 0:a.split(" ").join("+")).concat(P.replace(/ /g,""),"&display=swap");return{googleFontLink:!p||I?"":"@import url(".concat(S,");"),styles:"".concat(t,"{\n\t\t\t").concat(B,"\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(H,"px;"),"\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(T,"px;"),"\n\t\t\t}\n\t\t}").replace(/\s+/g," ").trim()}},a=function(t){var o,n,a,i,r,l,d,s,u,v,p,f,y=t.attributes,b=t.clientId,m=y.playerAlign,g=y.link,h=y.width,k=y.controlsHeight,x=y.controlsBG,R=y.controlsIconColor,E=y.controlsIconHoverColor,L=y.controlsIconActiveColor,w=y.controlsTrackColor,C=y.controlsThumbColor,I=y.capAlign,A=void 0===I?"center":I,H=y.capTypo,T=void 0===H?{}:H,B=y.capColors,P=void 0===B?{color:"#333"}:B,S=y.capPadding,F=void 0===S?{}:S,z=y.capMargin,D=void 0===z?{}:z,M="#bBlocksLottiePlayer-".concat(b," .bBlocksLottiePlayer");return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(null===(o=c("",T))||void 0===o?void 0:o.googleFontLink,"\n\t\t").concat(null===(n=c("".concat(M," .caption"),T))||void 0===n?void 0:n.styles,"\n\n\t\t").concat(M,"{\n\t\t\ttext-align: ").concat(m,";\n\t\t}\n\t\t").concat(M," dotlottie-player{\n\t\t\twidth: ").concat(h,";\n\t\t\tcursor: ").concat(g?"pointer":"auto",";\n\t\t\t--lottie-player-toolbar-height: ").concat(k,";\n\t\t\t--lottie-player-toolbar-background-color: ").concat(x,";\n\t\t\t--lottie-player-toolbar-icon-color: ").concat(R,";\n\t\t\t--lottie-player-toolbar-icon-hover-color: ").concat(E,";\n\t\t\t--lottie-player-toolbar-icon-active-color: ").concat(L,";\n\t\t\t--lottie-player-seeker-track-color: ").concat(w,";\n\t\t\t--lottie-player-seeker-thumb-color: ").concat(C,";\n\t\t}\n\t\t").concat(M," .caption{\n\t\t\twidth: ").concat(h,";\n\t\t\ttext-align: ").concat(A,";\n\t\t\t").concat((a=P,i=a||{},r=i.color,l=void 0===r?"#333":r,d=i.bgType,s=void 0===d?"solid":d,u=i.bg,v=void 0===u?"#0000":u,p=i.gradient,f=void 0===p?"linear-gradient(135deg, #4527a4, #8344c5)":p,"\n\t\t".concat(l?"color: ".concat(l,";"):"","\n\t\t").concat(f||v?"background: ".concat("gradient"===s?f:v,";"):"","\n\t")),";\n\t\t\tpadding: ").concat(e(F),";\n\t\t\tmargin: ").concat(e(D),";\n\t\t}\n\t\t").replace(/\s+/g," ")}})},i=function(t,o,n,e){o&&(null==t||t.setAttribute(n,e)),!o&&(null==t||t.removeAttribute(n,e))},r=function(o,n){var e=o.attributes,c=e.file,a=e.isControls,r=e.isAutoplay,l=e.isLoop,d=e.isHover,s=e.mode,u=e.direction,v=void 0===u?1:u,p=e.count,f=e.speed,y=e.intermission,b=e.background;return(0,t.useEffect)((function(){null!=n&&n.current&&(i(null==n?void 0:n.current,a,"controls",""),i(null==n?void 0:n.current,r,"autoplay",""),i(null==n?void 0:n.current,l,"loop",""),i(null==n?void 0:n.current,d,"hover",""))}),[n]),React.createElement("dotlottie-player",{ref:n,src:c,autoplay:!0,loop:!0,mode:s,count:p,speed:f,direction:v,intermission:1e3*y,background:b,debug:!0})},l=(0,t.forwardRef)(r);document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-b-blocks-lottie-player").forEach((function(t){var n=JSON.parse(t.dataset.attributes),e=n.cId;(0,o.H)(t).render(React.createElement(React.Fragment,null,React.createElement(a,{attributes:n,clientId:e}),React.createElement(d,{attributes:n,clientId:e}))),null==t||t.removeAttribute("data-attributes")}))}));var d=function(o){var n=o.attributes,e=o.clientId,c=n.isControls,a=n.isAutoplay,r=n.isLoop,d=n.isHover,s=n.link,u=n.isLinkInNewTab,v=void 0!==u&&u,p=n.interactivity,f=void 0===p?"noInteractivity":p,y=n.interactivityMode,b=void 0===y?"":y,m=n.interactivityContainer,g=void 0===m?".wp-block-b-blocks-lottie-player":m,h=n.interactivityActions,k=void 0===h?[]:h,x=n.isCap,R=void 0!==x&&x,E=n.caption,L=void 0===E?"":E,w=(0,t.useRef)(null);return(0,t.useEffect)((function(){var t=document.querySelector("#bBlocksLottiePlayer-".concat(e," .bBlocksLottiePlayer lottie-player"));i(t,c,"controls",""),i(t,a,"autoplay",""),i(t,r,"loop",""),i(t,d,"hover","")}),[]),(0,t.useEffect)((function(){var t=null==w?void 0:w.current;t&&f&&"noInteractivity"!==f&&t.addEventListener("ready",(function(){LottieInteractivity.create({player:t.getLottie(),container:"scrollRelativeToContainer"===f?g:"#bBlocksLottiePlayer-".concat(e),mode:b,actions:k})}))}),[null==w?void 0:w.current]),React.createElement("div",{className:"bBlocksLottiePlayer"},s?React.createElement("a",{href:s,target:v?"_blank":"_self",rel:"noreferrer"},React.createElement(l,{ref:w,attributes:n})):React.createElement(l,{ref:w,attributes:n}),R&&React.createElement(React.Fragment,null,React.createElement("br",null),React.createElement("span",{className:"caption"},L)))}}()}();
//# sourceMappingURL=lottie-player.js.map