!function(){"use strict";var t,n,o,c,e,a={410:function(t,n,o){var c=o(206);n.H=c.createRoot,c.hydrateRoot},206:function(t){t.exports=ReactDOM}},i={};function r(t){var n=i[t];if(void 0!==n)return n.exports;var o=i[t]={exports:{}};return a[t](o,o.exports,r),o.exports}t=r(410),n=function(t){var n=t||{},o=n.width,c=void 0===o?"0px":o,e=n.style,a=void 0===e?"solid":e,i=n.color,r=void 0===i?"#0000":i,l=n.side,d=void 0===l?"all":l,m=n.radius,s=void 0===m?"0px":m,v=function(t){var n=null==d?void 0:d.toLowerCase();return(null==n?void 0:n.includes("all"))||(null==n?void 0:n.includes(t))},u="0px"===c||!c,b="".concat(c," ").concat(a," ").concat(r),p="\n\t\t".concat(u?"":["top","right","bottom","left"].map((function(t){return v(t)?"border-".concat(t,": ").concat(b,";"):""})).join(""),"\n\t\t").concat(s?"border-radius: ".concat(s,";"):"","\n\t");return p},o=function(t){var n=t||{},o=n.side,c=void 0===o?2:o,e=n.vertical,a=void 0===e?"0px":e,i=n.horizontal,r=void 0===i?"0px":i,l=n.top,d=void 0===l?"0px":l,m=n.right,s=void 0===m?"0px":m,v=n.bottom,u=void 0===v?"0px":v,b=n.left,p=void 0===b?"0px":b;return 2===c?"".concat(a," ").concat(r):"".concat(d," ").concat(s," ").concat(u," ").concat(p)},c=function(t,n){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=n||{},e=c.fontFamily,a=void 0===e?"Default":e,i=c.fontCategory,r=void 0===i?"sans-serif":i,l=c.fontVariant,d=void 0===l?400:l,m=c.fontWeight,s=void 0===m?400:m,v=c.isUploadFont,u=void 0===v||v,b=c.fontSize,p=void 0===b?{desktop:15,tablet:15,mobile:15}:b,g=c.fontStyle,f=void 0===g?"normal":g,h=c.textTransform,x=void 0===h?"none":h,k=c.textDecoration,y=void 0===k?"auto":k,S=c.lineHeight,M=void 0===S?"135%":S,R=c.letterSpace,w=void 0===R?"0px":R,T=function(t,n){return t?"".concat(n,": ").concat(t,";"):""},E=!o||!a||"Default"===a,N=(null==p?void 0:p.desktop)||p,B=(null==p?void 0:p.tablet)||N,L=(null==p?void 0:p.mobile)||B,z="\n\t\t".concat(E?"":"font-family: '".concat(a,"', ").concat(r,";"),"\n\t\t").concat(T(s,"font-weight"),"\n\t\t","font-size: ".concat(N,"px;"),"\n\t\t").concat(T(f,"font-style"),"\n\t\t").concat(T(x,"text-transform"),"\n\t\t").concat(T(y,"text-decoration"),"\n\t\t").concat(T(M,"line-height"),"\n\t\t").concat(T(w,"letter-spacing"),"\n\t"),I=d&&400!==d?"400i"===d?":ital@1":null!=d&&d.includes("00i")?": ital, wght@1, ".concat(null==d?void 0:d.replace("00i","00")," "):": wght@".concat(d," "):"",_=E?"":"https://fonts.googleapis.com/css2?family=".concat(null==a?void 0:a.split(" ").join("+")).concat(I.replace(/ /g,""),"&display=swap");return{googleFontLink:!u||E?"":"@import url(".concat(_,");"),styles:"".concat(t,"{\n\t\t\t").concat(z,"\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(B,"px;"),"\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(L,"px;"),"\n\t\t\t}\n\t\t}").replace(/\s+/g," ").trim()}},e=function(t){var e,a,i,r,l,d,m=t.attributes,s=t.clientId,v=m.members,u=void 0===v?[]:v,b=m.columnGap,p=m.rowGap,g=m.layout,f=m.textAlign,h=m.padding,x=m.photoWidth,k=m.photoMargin,y=m.nameTypo,S=m.nameMargin,M=m.titleTypo,R=m.titleMargin,w=m.sepMargin,T=m.bioTypo,E=m.bioMargin,N=m.socialSize,B=m.socialIconMargin,L="#bBlocksTeamMembers-".concat(s),z="".concat(L," .bBlocksTeamMembers"),I="".concat(z," .bBlocksMember"),_="".concat(I," .memberDetails"),C="".concat(_," .memberSocial");return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(null===(e=c("",y))||void 0===e?void 0:e.googleFontLink,"\n\t\t").concat(null===(a=c("",M))||void 0===a?void 0:a.googleFontLink,"\n\t\t").concat(null===(i=c("",T))||void 0===i?void 0:i.googleFontLink,"\n\t\t").concat(null===(r=c("".concat(_," .memberName"),y))||void 0===r?void 0:r.styles,"\n\t\t").concat(null===(l=c("".concat(_," .memberTitle"),M))||void 0===l?void 0:l.styles,"\n\t\t").concat(null===(d=c("".concat(_," .memberBio"),T))||void 0===d?void 0:d.styles,"\n\n\t\t").concat(z,"{\n\t\t\tgrid-gap: ").concat(p," ").concat(b,";\n\t\t}\n\t\t").concat(I,"{\n\t\t\ttext-align: ").concat(f,";\n\t\t\tpadding: ").concat(o(h),";\n\t\t}\n\t\t").concat(I," .memberPhoto{\n\t\t\twidth: ").concat(x,";\n\t\t\tmargin: ").concat("horizontal"===g?"0 20px 0 0":"".concat(o(k)),";\n\t\t}\n\t\t").concat(_," .memberName{\n\t\t\tmargin: ").concat(o(S),";\n\t\t}\n\t\t").concat(_," .memberTitle{\n\t\t\tmargin: ").concat(o(R),";\n\t\t}\n\t\t").concat(_," .memberSeparator{\n\t\t\tmargin: ").concat(o(w),";\n\t\t}\n\t\t").concat(_," .memberBio{\n\t\t\tmargin: ").concat(o(E),";\n\t\t}\n\t\t").concat(C," .icon,\n\t\t").concat(C," .memberSocialAdd{\n\t\t\tmargin: ").concat(o(B),";\n\t\t}\n\t\t").concat(C," .icon i,\n\t\t").concat(C," .memberSocialAdd i{\n\t\t\tfont-size: ").concat(N,";\n\t\t\twidth: ").concat(N,";\n\t\t}\n\n\t\t").concat(u.map((function(t,o){var c,e,a,i,r,l,d,m,s,v,u=t.background,b=t.border,p=t.shadow,g=t.photoBorder,h=t.nameColor,x=t.titleColor,k=t.separator,y=t.bioColor,S=t.socialIconColors,M="".concat(L," #bBlocksMember-").concat(o),R="".concat(M," .memberDetails"),w="".concat(R," .memberSocial");return"\n\t\t\t\t".concat(M,"{\n\t\t\t\t\t").concat(function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],e=t||{},a=e.type,i=void 0===a?"solid":a,r=e.color,l=void 0===r?"#000000b3":r,d=e.gradient,m=void 0===d?"linear-gradient(135deg, #4527a4, #8344c5)":d,s=e.image,v=void 0===s?{}:s,u=e.position,b=void 0===u?"center center":u,p=e.attachment,g=void 0===p?"initial":p,f=e.repeat,h=void 0===f?"no-repeat":f,x=e.size,k=void 0===x?"cover":x,y=e.overlayColor,S=void 0===y?"#000000b3":y;return"gradient"===i&&o?"background: ".concat(m,";"):"image"===i&&c?"background: url(".concat(null==v?void 0:v.url,");\n\t\t\t\tbackground-color: ").concat(S,";\n\t\t\t\tbackground-position: ").concat(b,";\n\t\t\t\tbackground-size: ").concat(k,";\n\t\t\t\tbackground-repeat: ").concat(h,";\n\t\t\t\tbackground-attachment: ").concat(g,";\n\t\t\t\tbackground-blend-mode: overlay;"):n&&"background: ".concat(l,";")}(u),"\n\t\t\t\t\t").concat(n(b),"\n\t\t\t\t\tbox-shadow: ").concat(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"box",o="";return null==t||t.map((function(c,e){var a=c||{},i=a.hOffset,r=void 0===i?"0px":i,l=a.vOffset,d=void 0===l?"0px":l,m=a.blur,s=void 0===m?"0px":m,v=a.spreed,u=void 0===v?"0px":v,b=a.color,p=void 0===b?"#7090b0":b,g=a.isInset,f=void 0!==g&&g?"inset":"",h="".concat(r," ").concat(d," ").concat(s),x=e+1>=t.length?"":", ";o+="text"===n?"".concat(h," ").concat(p).concat(x):"".concat(h," ").concat(u," ").concat(p," ").concat(f).concat(x)})),o||"none"}((null==p?void 0:p.shadow)||(null!=p&&p.color?[p]:p)),";\n\t\t\t\t}\n\t\t\t\t").concat(M," .memberPhoto{\n\t\t\t\t\t").concat(n(g),"\n\t\t\t\t}\n\t\t\t\t").concat(R," .memberName{\n\t\t\t\t\tcolor: ").concat(h,";\n\t\t\t\t}\n\t\t\t\t").concat(R," .memberTitle{\n\t\t\t\t\tcolor: ").concat(x,";\n\t\t\t\t}\n\t\t\t\t").concat(M," .memberSeparator{\n\t\t\t\t\t").concat(function(t){var n=t||{},o=n.width,c=void 0===o?"50%":o,e=n.height,a=void 0===e?"2px":e,i=n.style,r=void 0===i?"solid":i,l=n.color,d=void 0===l?"#bbb":l;return"\n\t\twidth: ".concat(c,";\n\t\t").concat("0px"===a&&"0em"===a&&"0rem"===a?"":"border-top: ".concat(a," ").concat(r," ").concat(d,";"),"\n\t")}(k),"\n\t\t\t\t}\n\t\t\t\t").concat(R," .memberBio{\n\t\t\t\t\tcolor: ").concat(y,";\n\t\t\t\t}\n\t\t\t\t").concat(w,"{\n\t\t\t\t\tjustify-content: ").concat("center"===f?"center":"right"===f?"flex-end":"flex-start","\n\t\t\t\t}\n\t\t\t\t").concat(w," li a{\n\t\t\t\t\t").concat((c=S,e=c||{},a=e.color,i=void 0===a?"#333":a,r=e.bgType,l=void 0===r?"solid":r,d=e.bg,m=void 0===d?"#0000":d,s=e.gradient,v=void 0===s?"linear-gradient(135deg, #4527a4, #8344c5)":s,"\n\t\t".concat(i?"color: ".concat(i,";"):"","\n\t\t").concat(v||m?"background: ".concat("gradient"===l?v:m,";"):"","\n\t")),"\n\t\t\t\t}\n\t\t\t\t").concat(w," li.isSelected{\n\t\t\t\t\tborder: 2px solid ").concat(null==S?void 0:S.bg,";\n\t\t\t\t}\n\t\t\t\t").concat(w," li.memberSocialAdd button i{\n\t\t\t\t\tcolor: ").concat(null==S?void 0:S.bg,";\n\t\t\t\t}\n\t\t\t")})).join(" "),"\n\t\t").replace(/\s+/g," ")}})},document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-b-blocks-team-members").forEach((function(n){var o=JSON.parse(n.dataset.attributes),c=o.cId,a=o.members,i=void 0===a?[]:a,r=o.columns,l=o.layout,d=o.isLinkNewTab,m=o.isTitle,s=o.isSep,v=o.isBio,u=o.isSocial,b=r||{},p=b.desktop,g=b.tablet,f=b.mobile;(0,t.H)(n).render(React.createElement(React.Fragment,null,React.createElement(e,{attributes:o,clientId:c}),React.createElement("div",{className:"bBlocksTeamMembers ".concat(l||"vertical"," columns-").concat(p," columns-tablet-").concat(g," columns-mobile-").concat(f)},i.map((function(t,n){var o=t.photo,c=t.name,e=t.title,a=t.bio,i=t.social,r=void 0===i?[]:i;return React.createElement("div",{key:n,className:"bBlocksMember",id:"bBlocksMember-".concat(n)},(null==o?void 0:o.url)&&React.createElement("img",{className:"memberPhoto",src:o.url,alt:null==o?void 0:o.alt}),React.createElement("div",{className:"memberDetails"},c&&React.createElement("h4",{className:"memberName",dangerouslySetInnerHTML:{__html:c}}),m&&e&&React.createElement("p",{className:"memberTitle",dangerouslySetInnerHTML:{__html:e}}),s&&React.createElement("span",{className:"memberSeparator"}),v&&a&&React.createElement("p",{className:"memberBio",dangerouslySetInnerHTML:{__html:a}}),u&&React.createElement("ul",{className:"memberSocial"},null==r?void 0:r.map((function(t,o){var c=t.link,e=t.icon;return React.createElement("li",{key:o,className:"icon icon-".concat(n,"-").concat(o)},React.createElement("a",{href:c,target:d?"_blank":"_self",rel:"noreferrer"},React.createElement("i",{className:null==e?void 0:e.class})))})))))}))))),null==n||n.removeAttribute("data-attributes")}))}))}();
//# sourceMappingURL=team-members.js.map