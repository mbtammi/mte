"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[878],{5985:function(e,o,t){t.d(o,{Z:function(){return C}});var a=t(4942),n=t(3366),r=t(7462),c=t(7294),i=t(5505),l=t(9236),s=t(7663),d=t(2067),u=t(5893),p=(0,d.Z)((0,u.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),m=t(5973),f=t(9240),v=t(1919),g=t(184),Z=t(3656),b=t(1351);function h(e){return(0,b.Z)("MuiChip",e)}var k=(0,t(9508).Z)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),y=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],S=(0,Z.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState,n=t.color,r=t.clickable,c=t.onDelete,i=t.size,l=t.variant;return[(0,a.Z)({},"& .".concat(k.avatar),o.avatar),(0,a.Z)({},"& .".concat(k.avatar),o["avatar".concat((0,f.Z)(i))]),(0,a.Z)({},"& .".concat(k.avatar),o["avatarColor".concat((0,f.Z)(n))]),(0,a.Z)({},"& .".concat(k.icon),o.icon),(0,a.Z)({},"& .".concat(k.icon),o["icon".concat((0,f.Z)(i))]),(0,a.Z)({},"& .".concat(k.icon),o["iconColor".concat((0,f.Z)(n))]),(0,a.Z)({},"& .".concat(k.deleteIcon),o.deleteIcon),(0,a.Z)({},"& .".concat(k.deleteIcon),o["deleteIcon".concat((0,f.Z)(i))]),(0,a.Z)({},"& .".concat(k.deleteIcon),o["deleteIconColor".concat((0,f.Z)(n))]),(0,a.Z)({},"& .".concat(k.deleteIcon),o["deleteIconOutlinedColor".concat((0,f.Z)(n))]),o.root,o["size".concat((0,f.Z)(i))],o["color".concat((0,f.Z)(n))],r&&o.clickable,r&&"default"!==n&&o["clickableColor".concat((0,f.Z)(n),")")],c&&o.deletable,c&&"default"!==n&&o["deletableColor".concat((0,f.Z)(n))],o[l],"outlined"===l&&o["outlined".concat((0,f.Z)(n))]]}})((function(e){var o,t=e.theme,n=e.ownerState,c=(0,s.Fq)(t.palette.text.primary,.26);return(0,r.Z)((o={maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:t.palette.text.primary,backgroundColor:t.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},(0,a.Z)(o,"&.".concat(k.disabled),{opacity:t.palette.action.disabledOpacity,pointerEvents:"none"}),(0,a.Z)(o,"& .".concat(k.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300],fontSize:t.typography.pxToRem(12)}),(0,a.Z)(o,"& .".concat(k.avatarColorPrimary),{color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark}),(0,a.Z)(o,"& .".concat(k.avatarColorSecondary),{color:t.palette.secondary.contrastText,backgroundColor:t.palette.secondary.dark}),(0,a.Z)(o,"& .".concat(k.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)}),(0,a.Z)(o,"& .".concat(k.icon),(0,r.Z)({color:"light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300],marginLeft:5,marginRight:-6},"small"===n.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==n.color&&{color:"inherit"})),(0,a.Z)(o,"& .".concat(k.deleteIcon),(0,r.Z)({WebkitTapHighlightColor:"transparent",color:c,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,s.Fq)(c,.4)}},"small"===n.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==n.color&&{color:(0,s.Fq)(t.palette[n.color].contrastText,.7),"&:hover, &:active":{color:t.palette[n.color].contrastText}})),o),"small"===n.size&&{height:24},"default"!==n.color&&{backgroundColor:t.palette[n.color].main,color:t.palette[n.color].contrastText},n.onDelete&&(0,a.Z)({},"&.".concat(k.focusVisible),{backgroundColor:(0,s.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),n.onDelete&&"default"!==n.color&&(0,a.Z)({},"&.".concat(k.focusVisible),{backgroundColor:t.palette[n.color].dark}))}),(function(e){var o,t=e.theme,n=e.ownerState;return(0,r.Z)({},n.clickable&&(o={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:(0,s.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}},(0,a.Z)(o,"&.".concat(k.focusVisible),{backgroundColor:(0,s.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),(0,a.Z)(o,"&:active",{boxShadow:t.shadows[1]}),o),n.clickable&&"default"!==n.color&&(0,a.Z)({},"&:hover, &.".concat(k.focusVisible),{backgroundColor:t.palette[n.color].dark}))}),(function(e){var o,t,n=e.theme,c=e.ownerState;return(0,r.Z)({},"outlined"===c.variant&&(o={backgroundColor:"transparent",border:"1px solid ".concat("light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[700])},(0,a.Z)(o,"&.".concat(k.clickable,":hover"),{backgroundColor:n.palette.action.hover}),(0,a.Z)(o,"&.".concat(k.focusVisible),{backgroundColor:n.palette.action.focus}),(0,a.Z)(o,"& .".concat(k.avatar),{marginLeft:4}),(0,a.Z)(o,"& .".concat(k.avatarSmall),{marginLeft:2}),(0,a.Z)(o,"& .".concat(k.icon),{marginLeft:4}),(0,a.Z)(o,"& .".concat(k.iconSmall),{marginLeft:2}),(0,a.Z)(o,"& .".concat(k.deleteIcon),{marginRight:5}),(0,a.Z)(o,"& .".concat(k.deleteIconSmall),{marginRight:3}),o),"outlined"===c.variant&&"default"!==c.color&&(t={color:n.palette[c.color].main,border:"1px solid ".concat((0,s.Fq)(n.palette[c.color].main,.7))},(0,a.Z)(t,"&.".concat(k.clickable,":hover"),{backgroundColor:(0,s.Fq)(n.palette[c.color].main,n.palette.action.hoverOpacity)}),(0,a.Z)(t,"&.".concat(k.focusVisible),{backgroundColor:(0,s.Fq)(n.palette[c.color].main,n.palette.action.focusOpacity)}),(0,a.Z)(t,"& .".concat(k.deleteIcon),{color:(0,s.Fq)(n.palette[c.color].main,.7),"&:hover, &:active":{color:n.palette[c.color].main}}),t))})),w=(0,Z.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,o){var t=e.ownerState.size;return[o.label,o["label".concat((0,f.Z)(t))]]}})((function(e){var o=e.ownerState;return(0,r.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===o.size&&{paddingLeft:8,paddingRight:8})}));function x(e){return"Backspace"===e.key||"Delete"===e.key}var C=c.forwardRef((function(e,o){var t=(0,g.Z)({props:e,name:"MuiChip"}),a=t.avatar,s=t.className,d=t.clickable,Z=t.color,b=void 0===Z?"default":Z,k=t.component,C=t.deleteIcon,z=t.disabled,I=void 0!==z&&z,M=t.icon,N=t.label,R=t.onClick,W=t.onDelete,P=t.onKeyDown,O=t.onKeyUp,L=t.size,D=void 0===L?"medium":L,T=t.variant,E=void 0===T?"filled":T,F=(0,n.Z)(t,y),V=c.useRef(null),q=(0,m.Z)(V,o),j=function(e){e.stopPropagation(),W&&W(e)},G=!(!1===d||!R)||d,K="small"===D,B=G||W?v.Z:k||"div",$=(0,r.Z)({},t,{component:B,disabled:I,size:D,color:b,onDelete:!!W,clickable:G,variant:E}),_=function(e){var o=e.classes,t=e.disabled,a=e.size,n=e.color,r=e.onDelete,c=e.clickable,i=e.variant,s={root:["root",i,t&&"disabled","size".concat((0,f.Z)(a)),"color".concat((0,f.Z)(n)),c&&"clickable",c&&"clickableColor".concat((0,f.Z)(n)),r&&"deletable",r&&"deletableColor".concat((0,f.Z)(n)),"".concat(i).concat((0,f.Z)(n))],label:["label","label".concat((0,f.Z)(a))],avatar:["avatar","avatar".concat((0,f.Z)(a)),"avatarColor".concat((0,f.Z)(n))],icon:["icon","icon".concat((0,f.Z)(a)),"iconColor".concat((0,f.Z)(n))],deleteIcon:["deleteIcon","deleteIcon".concat((0,f.Z)(a)),"deleteIconColor".concat((0,f.Z)(n)),"deleteIconOutlinedColor".concat((0,f.Z)(n))]};return(0,l.Z)(s,h,o)}($),U=B===v.Z?(0,r.Z)({component:k||"div",focusVisibleClassName:_.focusVisible},W&&{disableRipple:!0}):{},H=null;if(W){var A=(0,i.Z)("default"!==b&&("outlined"===E?_["deleteIconOutlinedColor".concat((0,f.Z)(b))]:_["deleteIconColor".concat((0,f.Z)(b))]),K&&_.deleteIconSmall);H=C&&c.isValidElement(C)?c.cloneElement(C,{className:(0,i.Z)(C.props.className,_.deleteIcon,A),onClick:j}):(0,u.jsx)(p,{className:(0,i.Z)(_.deleteIcon,A),onClick:j})}var J=null;a&&c.isValidElement(a)&&(J=c.cloneElement(a,{className:(0,i.Z)(_.avatar,a.props.className)}));var Q=null;return M&&c.isValidElement(M)&&(Q=c.cloneElement(M,{className:(0,i.Z)(_.icon,M.props.className)})),(0,u.jsxs)(S,(0,r.Z)({as:B,className:(0,i.Z)(_.root,s),disabled:!(!G||!I)||void 0,onClick:R,onKeyDown:function(e){e.currentTarget===e.target&&x(e)&&e.preventDefault(),P&&P(e)},onKeyUp:function(e){e.currentTarget===e.target&&(W&&x(e)?W(e):"Escape"===e.key&&V.current&&V.current.blur()),O&&O(e)},ref:q,ownerState:$},U,F,{children:[J||Q,(0,u.jsx)(w,{className:(0,i.Z)(_.label),ownerState:$,children:N}),H]}))}))},4320:function(e,o,t){t.d(o,{ZP:function(){return z}});var a=t(3433),n=t(4942),r=t(3366),c=t(7462),i=t(7294),l=t(5505),s=t(2692),d=t(8297),u=t(9236),p=t(3656),m=t(184),f=t(6449);var v=i.createContext(),g=t(1351);function Z(e){return(0,g.Z)("MuiGrid",e)}var b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=(0,t(9508).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,a.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,a.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,a.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-xs-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-sm-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-md-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-lg-".concat(e)}))),(0,a.Z)(b.map((function(e){return"grid-xl-".concat(e)}))))),k=t(5893),y=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(e){var o=parseFloat(e);return"".concat(o).concat(String(e).replace(String(o),"")||"px")}var w=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState,n=t.container,r=t.direction,c=t.item,i=t.spacing,l=t.wrap,s=t.zeroMinWidth,d=t.breakpoints,u=[];n&&(u=function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[t["spacing-xs-".concat(String(e))]];var a=[];return o.forEach((function(o){var n=e[o];Number(n)>0&&a.push(t["spacing-".concat(o,"-").concat(String(n))])})),a}(i,d,o));var p=[];return d.forEach((function(e){var a=t[e];a&&p.push(o["grid-".concat(e,"-").concat(String(a))])})),[o.root,n&&o.container,c&&o.item,s&&o.zeroMinWidth].concat((0,a.Z)(u),["row"!==r&&o["direction-xs-".concat(String(r))],"wrap"!==l&&o["wrap-xs-".concat(String(l))]],p)}})((function(e){var o=e.ownerState;return(0,c.Z)({boxSizing:"border-box"},o.container&&{display:"flex",flexWrap:"wrap",width:"100%"},o.item&&{margin:0},o.zeroMinWidth&&{minWidth:0},"wrap"!==o.wrap&&{flexWrap:o.wrap})}),(function(e){var o=e.theme,t=e.ownerState,a=(0,s.P$)({values:t.direction,breakpoints:o.breakpoints.values});return(0,s.k9)({theme:o},a,(function(e){var o={flexDirection:e};return 0===e.indexOf("column")&&(o["& > .".concat(h.item)]={maxWidth:"none"}),o}))}),(function(e){var o=e.theme,t=e.ownerState,a=t.container,r=t.rowSpacing,c={};if(a&&0!==r){var i=(0,s.P$)({values:r,breakpoints:o.breakpoints.values});c=(0,s.k9)({theme:o},i,(function(e){var t=o.spacing(e);return"0px"!==t?(0,n.Z)({marginTop:"-".concat(S(t))},"& > .".concat(h.item),{paddingTop:S(t)}):{}}))}return c}),(function(e){var o=e.theme,t=e.ownerState,a=t.container,r=t.columnSpacing,c={};if(a&&0!==r){var i=(0,s.P$)({values:r,breakpoints:o.breakpoints.values});c=(0,s.k9)({theme:o},i,(function(e){var t=o.spacing(e);return"0px"!==t?(0,n.Z)({width:"calc(100% + ".concat(S(t),")"),marginLeft:"-".concat(S(t))},"& > .".concat(h.item),{paddingLeft:S(t)}):{}}))}return c}),(function(e){var o,t=e.theme,a=e.ownerState;return t.breakpoints.keys.reduce((function(e,n){var r={};if(a[n]&&(o=a[n]),!o)return e;if(!0===o)r={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===o)r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var i=(0,s.P$)({values:a.columns,breakpoints:t.breakpoints.values}),l="object"==typeof i?i[n]:i;if(null==l)return e;var d="".concat(Math.round(o/l*1e8)/1e6,"%"),u={};if(a.container&&a.item&&0!==a.columnSpacing){var p=t.spacing(a.columnSpacing);if("0px"!==p){var m="calc(".concat(d," + ").concat(S(p),")");u={flexBasis:m,maxWidth:m}}}r=(0,c.Z)({flexBasis:d,flexGrow:0,maxWidth:d},u)}return 0===t.breakpoints.values[n]?Object.assign(e,r):e[t.breakpoints.up(n)]=r,e}),{})}));var x=function(e){var o=e.classes,t=e.container,n=e.direction,r=e.item,c=e.spacing,i=e.wrap,l=e.zeroMinWidth,s=e.breakpoints,d=[];t&&(d=function(e,o){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return["spacing-xs-".concat(String(e))];var t=[];return o.forEach((function(o){var a=e[o];if(Number(a)>0){var n="spacing-".concat(o,"-").concat(String(a));t.push(n)}})),t}(c,s));var p=[];s.forEach((function(o){var t=e[o];t&&p.push("grid-".concat(o,"-").concat(String(t)))}));var m={root:["root",t&&"container",r&&"item",l&&"zeroMinWidth"].concat((0,a.Z)(d),["row"!==n&&"direction-xs-".concat(String(n)),"wrap"!==i&&"wrap-xs-".concat(String(i))],p)};return(0,u.Z)(m,Z,o)},C=i.forwardRef((function(e,o){var t=(0,m.Z)({props:e,name:"MuiGrid"}),a=(0,f.Z)().breakpoints,n=(0,d.Z)(t),s=n.className,u=n.columns,p=n.columnSpacing,g=n.component,Z=void 0===g?"div":g,b=n.container,h=void 0!==b&&b,S=n.direction,C=void 0===S?"row":S,z=n.item,I=void 0!==z&&z,M=n.rowSpacing,N=n.spacing,R=void 0===N?0:N,W=n.wrap,P=void 0===W?"wrap":W,O=n.zeroMinWidth,L=void 0!==O&&O,D=(0,r.Z)(n,y),T=M||R,E=p||R,F=i.useContext(v),V=h?u||12:F,q={},j=(0,c.Z)({},D);a.keys.forEach((function(e){null!=D[e]&&(q[e]=D[e],delete j[e])}));var G=(0,c.Z)({},n,{columns:V,container:h,direction:C,item:I,rowSpacing:T,columnSpacing:E,wrap:P,zeroMinWidth:L,spacing:R},q,{breakpoints:a.keys}),K=x(G);return(0,k.jsx)(v.Provider,{value:V,children:(0,k.jsx)(w,(0,c.Z)({ownerState:G,className:(0,l.Z)(K.root,s),as:Z,ref:o},j))})})),z=C}}]);
//# sourceMappingURL=38353ff3cd8414b4c84913de55985a86bbda04a3-a03bf22a25e18397d81e.js.map