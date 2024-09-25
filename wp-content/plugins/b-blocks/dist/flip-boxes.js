!function(){"use strict";var t,n,o,c,e,a,i,l,r,d,s={410:function(t,n,o){var c=o(206);n.H=c.createRoot,c.hydrateRoot},206:function(t){t.exports=ReactDOM}},v={};function u(t){var n=v[t];if(void 0!==n)return n.exports;var o=v[t]={exports:{}};return s[t](o,o.exports,u),o.exports}t=u(410),n=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],e=t||{},a=e.type,i=void 0===a?"solid":a,l=e.color,r=void 0===l?"#000000b3":l,d=e.gradient,s=void 0===d?"linear-gradient(135deg, #4527a4, #8344c5)":d,v=e.image,u=void 0===v?{}:v,p=e.position,f=void 0===p?"center center":p,b=e.attachment,g=void 0===b?"initial":b,m=e.repeat,x=void 0===m?"no-repeat":m,k=e.size,h=void 0===k?"cover":k,I=e.overlayColor,y=void 0===I?"#000000b3":I;return"gradient"===i&&o?"background: ".concat(s,";"):"image"===i&&c?"background: url(".concat(null==u?void 0:u.url,");\n\t\t\t\tbackground-color: ").concat(y,";\n\t\t\t\tbackground-position: ").concat(f,";\n\t\t\t\tbackground-size: ").concat(h,";\n\t\t\t\tbackground-repeat: ").concat(x,";\n\t\t\t\tbackground-attachment: ").concat(g,";\n\t\t\t\tbackground-blend-mode: overlay;"):n&&"background: ".concat(r,";")},o=function(t){var n=t||{},o=n.width,c=void 0===o?"0px":o,e=n.style,a=void 0===e?"solid":e,i=n.color,l=void 0===i?"#0000":i,r=n.side,d=void 0===r?"all":r,s=n.radius,v=void 0===s?"0px":s,u=function(t){var n=null==d?void 0:d.toLowerCase();return(null==n?void 0:n.includes("all"))||(null==n?void 0:n.includes(t))},p="0px"===c||!c,f="".concat(c," ").concat(a," ").concat(l),b="\n\t\t".concat(p?"":["top","right","bottom","left"].map((function(t){return u(t)?"border-".concat(t,": ").concat(f,";"):""})).join(""),"\n\t\t").concat(v?"border-radius: ".concat(v,";"):"","\n\t");return b},c=function(t){var n=t||{},o=n.color,c=void 0===o?"#333":o,e=n.bgType,a=void 0===e?"solid":e,i=n.bg,l=void 0===i?"#0000":i,r=n.gradient,d=void 0===r?"linear-gradient(135deg, #4527a4, #8344c5)":r;return"\n\t\t".concat(c?"color: ".concat(c,";"):"","\n\t\t").concat(d||l?"background: ".concat("gradient"===a?d:l,";"):"","\n\t")},e=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=t||{},e=c.fontSize,a=void 0===e?16:e,i=c.colorType,l=void 0===i?"solid":i,r=c.color,d=void 0===r?"inherit":r,s=c.gradient,v="gradient"===l?"color: transparent; background-image: ".concat(void 0===s?"linear-gradient(135deg, #4527a4, #8344c5)":s,"; -webkit-background-clip: text; background-clip: text;"):"color: ".concat(d,";");return"\n\t\t".concat(a&&n?"font-size: ".concat(a,"px;"):"","\n\t\t").concat(o?v:"","\n\t")},a=function(t){var n=t||{},o=n.type,c=void 0===o?"box":o,e=n.hOffset,a=void 0===e?"0px":e,i=n.vOffset,l=void 0===i?"0px":i,r=n.blur,d=void 0===r?"0px":r,s=n.spreed,v=void 0===s?"0px":s,u=n.color,p=void 0===u?"#7090b0":u,f=n.isInset,b=void 0!==f&&f?"inset":"",g="".concat(a," ").concat(l," ").concat(d);return("text"===c?"".concat(g," ").concat(p):"".concat(g," ").concat(v," ").concat(p," ").concat(b))||"none"},i=function(t){var n=t||{},o=n.side,c=void 0===o?2:o,e=n.vertical,a=void 0===e?"0px":e,i=n.horizontal,l=void 0===i?"0px":i,r=n.top,d=void 0===r?"0px":r,s=n.right,v=void 0===s?"0px":s,u=n.bottom,p=void 0===u?"0px":u,f=n.left,b=void 0===f?"0px":f;return 2===c?"".concat(a," ").concat(l):"".concat(d," ").concat(v," ").concat(p," ").concat(b)},l=function(t,n){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=n||{},e=c.fontFamily,a=void 0===e?"Default":e,i=c.fontCategory,l=void 0===i?"sans-serif":i,r=c.fontVariant,d=void 0===r?400:r,s=c.fontWeight,v=void 0===s?400:s,u=c.isUploadFont,p=void 0===u||u,f=c.fontSize,b=void 0===f?{desktop:15,tablet:15,mobile:15}:f,g=c.fontStyle,m=void 0===g?"normal":g,x=c.textTransform,k=void 0===x?"none":x,h=c.textDecoration,I=void 0===h?"auto":h,y=c.lineHeight,B=void 0===y?"135%":y,R=c.letterSpace,E=void 0===R?"0px":R,T=function(t,n){return t?"".concat(n,": ").concat(t,";"):""},F=!o||!a||"Default"===a,w=(null==b?void 0:b.desktop)||b,N=(null==b?void 0:b.tablet)||w,C=(null==b?void 0:b.mobile)||N,L="\n\t\t".concat(F?"":"font-family: '".concat(a,"', ").concat(l,";"),"\n\t\t").concat(T(v,"font-weight"),"\n\t\t","font-size: ".concat(w,"px;"),"\n\t\t").concat(T(m,"font-style"),"\n\t\t").concat(T(k,"text-transform"),"\n\t\t").concat(T(I,"text-decoration"),"\n\t\t").concat(T(B,"line-height"),"\n\t\t").concat(T(E,"letter-spacing"),"\n\t"),z=d&&400!==d?"400i"===d?":ital@1":null!=d&&d.includes("00i")?": ital, wght@1, ".concat(null==d?void 0:d.replace("00i","00")," "):": wght@".concat(d," "):"",D=F?"":"https://fonts.googleapis.com/css2?family=".concat(null==a?void 0:a.split(" ").join("+")).concat(z.replace(/ /g,""),"&display=swap");return{googleFontLink:!p||F?"":"@import url(".concat(D,");"),styles:"".concat(t,"{\n\t\t\t").concat(L,"\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(N,"px;"),"\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(C,"px;"),"\n\t\t\t}\n\t\t}").replace(/\s+/g," ").trim()}},r=function(t){var r,d,s,v,u,p,f=t.attributes,b=t.clientId,g=f.boxes,m=f.columnGap,x=f.rowGap,k=f.boxHeight,h=f.textAlign,I=f.boxPadding,y=f.iconMargin,B=f.titleTypo,R=f.titleMargin,E=f.descTypo,T=f.btnTypo,F=f.btnPadding,w="#bBlocksFlipBoxes-".concat(b),N="".concat(w," .bBlocksFlipBox");return React.createElement(React.Fragment,null,React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t\t".concat(null===(r=l("",B))||void 0===r?void 0:r.googleFontLink,"\n\t\t\t").concat(null===(d=l("",E))||void 0===d?void 0:d.googleFontLink,"\n\t\t\t").concat(null===(s=l("",T))||void 0===s?void 0:s.googleFontLink,"\n\t\t\t").concat(null===(v=l("".concat(N," .flipTitle"),B))||void 0===v?void 0:v.styles,"\n\t\t\t").concat(null===(u=l("".concat(N," .flipDescription"),E))||void 0===u?void 0:u.styles,"\n\t\t\t").concat(null===(p=l("".concat(N," .flipBtn"),T))||void 0===p?void 0:p.styles,"\n\n\t\t\t").concat(w," .bBlocksFlipBoxes{ grid-gap: ").concat(x," ").concat(m,"; }\n\t\t\t").concat(N,"{\n\t\t\t\theight: ").concat(k,";\n\t\t\t}\n\t\t\t").concat(N," .box{\n\t\t\t\ttext-align: ").concat(h,";\n\t\t\t\tpadding: ").concat(i(I),";\n\t\t\t}\n\t\t\t").concat(N," i.flipIcon{\n\t\t\t\tmargin: ").concat(i(y),";\n\t\t\t}\n\t\t\t").concat(N," i.flipTitle{\n\t\t\t\tmargin: ").concat(i(R),";\n\t\t\t}\n\t\t\t").concat(N," .flipBtn{\n\t\t\t\tpadding: ").concat(i(F),";\n\t\t\t}\n\t\t\t").replace(/\s+/g," ")}}),g.map((function(t,i){var l=t.frontBG,r=t.backBG,d=t.border,s=t.shadow,v=t.frontIcon,u=void 0===v?{}:v,p=t.frontIconWidth,f=void 0===p?"70px":p,b=t.backIcon,g=void 0===b?{}:b,m=t.backIconWidth,x=void 0===m?"70px":m,k=t.frontTitleColor,h=t.backTitleColor,I=t.descColor,y=t.btnBorder,B=t.btnColors,R=t.btnHovColors,E="".concat(w," #bBlocksFlipBox-").concat(i);return React.createElement("style",{key:i,dangerouslySetInnerHTML:{__html:"\n\t\t\t\t".concat(E," .box{\n\t\t\t\t\t").concat(o(d),"\n\t\t\t\t\tbox-shadow: ").concat(a(s),";\n\t\t\t\t}\n\t\t\t\t").concat(E," .box.front{\n\t\t\t\t\t").concat(n(l),"\n\t\t\t\t}\n\t\t\t\t").concat(E," .box.back{\n\t\t\t\t\t").concat(n(r),"\n\t\t\t\t}\n\t\t\t\t").concat(E," img.flipIcon.frontIcon{\n\t\t\t\t\twidth: ").concat(f,";\n\t\t\t\t}\n\t\t\t\t").concat(E," i.flipIcon.frontIcon{\n\t\t\t\t\t").concat(e(u),"\n\t\t\t\t}\n\t\t\t\t").concat(E," img.flipIcon.backIcon{\n\t\t\t\t\twidth: ").concat(x,";\n\t\t\t\t}\n\t\t\t\t").concat(E," i.flipIcon.backIcon{\n\t\t\t\t\t").concat(e(g),"\n\t\t\t\t}\n\t\t\t\t").concat(E," .flipTitle.flipFrontTitle{\n\t\t\t\t\tcolor: ").concat(k,";\n\t\t\t\t}\n\t\t\t\t").concat(E," .flipTitle.flipBackTitle{\n\t\t\t\t\tcolor: ").concat(h,";\n\t\t\t\t}\n\t\t\t\t").concat(E," .flipDescription{\n\t\t\t\t\tcolor: ").concat(I,";\n\t\t\t\t}\n\t\t\t\t").concat(E," .flipBtn{\n\t\t\t\t\t").concat(c(B),"\n\t\t\t\t\t").concat(o(y),"\n\t\t\t\t}\n\t\t\t\t").concat(E," .flipBtn:hover{\n\t\t\t\t\t").concat(c(R),"\n\t\t\t\t}\n\t\t\t\t").replace(/\s+/g," ")}})})))},d=function(t){var n=t.attributes,o=t.isBackend,c=void 0!==o&&o,e=t.custom,a=n.boxes,i=n.columns,l=n.isIcon,r=n.isDesc,d=n.isBtn,s=n.isLinkNewTab;return React.createElement("div",{className:"bBlocksFlipBoxes columns-".concat(i.desktop," columns-tablet-").concat(i.tablet," columns-mobile-").concat(i.mobile)},a.map((function(t,n){var o=t.isFrontUpIcon,a=void 0!==o&&o,i=t.frontIcon,v=void 0===i?{}:i,u=t.upFrontIcon,p=void 0===u?{}:u,f=t.isBackUpIcon,b=void 0!==f&&f,g=t.backIcon,m=void 0===g?{}:g,x=t.upBackIcon,k=void 0===x?{}:x,h=t.frontTitle,I=t.backTitle,y=t.desc,B=t.btn,R=t.btnLink;return React.createElement("div",{key:n,onClick:function(){return c&&e.setActiveIndex(n)},className:"bBlocksFlipBox ".concat(c&&n===e.activeIndex?"bBlocksNowEditing":""),id:"bBlocksFlipBox-".concat(n)},React.createElement("div",{className:"box front"},React.createElement("div",{className:"frontContent"},l&&React.createElement(React.Fragment,null,a?React.createElement("img",{className:null!=p&&p.id?"flipIcon frontIcon":null,src:null==p?void 0:p.url,alt:null==p?void 0:p.alt}):(null==v?void 0:v.class)&&React.createElement("i",{className:"flipIcon frontIcon ".concat(null==v?void 0:v.class)})),h&&React.createElement("h3",{className:"flipTitle flipFrontTitle"},h),r&&y&&React.createElement("p",{className:"flipDescription"},y))),React.createElement("div",{className:"box back"},React.createElement("div",{className:"backContent"},l&&React.createElement(React.Fragment,null,b?React.createElement("img",{className:null!=k&&k.id?"flipIcon backIcon":null,src:null==k?void 0:k.url,alt:null==k?void 0:k.alt}):(null==m?void 0:m.class)&&React.createElement("i",{className:"flipIcon backIcon ".concat(null==m?void 0:m.class)})),I&&React.createElement("h3",{className:"flipTitle flipBackTitle"},I),d&&B&&React.createElement("a",{href:R,className:"flipBtn",target:s?"_blank":"_self",rel:"noreferrer noopener"},B))))})))},document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-b-blocks-flip-boxes").forEach((function(n){var o=JSON.parse(n.dataset.attributes);(0,t.H)(n).render(React.createElement(React.Fragment,null,React.createElement(r,{attributes:o,clientId:o.cId}),React.createElement(d,{attributes:o}))),null==n||n.removeAttribute("data-attributes")}))}))}();
//# sourceMappingURL=flip-boxes.js.map