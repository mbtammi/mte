"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{6377:function(e,t,a){},5391:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var i=a(3366),r=a(7294),n=a(1597),l=a(2396),o=a(8725),m=a(262),c=a(1804),s=a.n(c),d=a(9211),p=a(5985),x=a(8970),u=a(9308),f=function(){return r.createElement(n.StaticQuery,{query:"266133262",render:function(e){return r.createElement(d.Z,{sx:{display:"flex",alignItems:"center","@media (max-width: 600px)":{flexDirection:"column",alignItems:"flex-start"}}},r.createElement(u.Z,{variant:"overline",sx:{whiteSpace:"nowrap",color:"text.secondary",textDecoration:"none","&:hover":{textDecoration:"underline"}},component:n.Link,to:"/tags"},"Story Topics"),r.createElement(x.Z,{value:0,"aria-label":"tags",variant:"scrollable",scrollButtons:!0,sx:{width:"100%",alignItems:"center","& .MuiTabs-indicator":{display:"none"},"& .MuiTabs-flexContainer":{gap:".5rem"}}},e.allMdx.group.map((function(e){return r.createElement(p.Z,{key:e.fieldValue,label:e.fieldValue,component:n.Link,to:"/tag/"+s()(e.fieldValue)+"/",clickable:!0})}))))}})},g=a(339),h=a(7935),y=a(4320),b=a(5935),E=a(6725),Z=(a(6377),["children","value","index"]);function v(e){var t=e.children,a=e.value,n=e.index,l=(0,i.Z)(e,Z);return r.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-"+n,"aria-labelledby":"simple-tab-"+n},l),a===n&&r.createElement(y.ZP,{container:!0,sx:{gap:"2rem","@media (max-width: 600px)":{gap:"1.5rem"}}},t))}E.ZP.initialize("G-SVBWR0FNVK");var w=function(e){var t,a,i=e.data,n=e.location,c=(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=i.allMdx.nodes,p=r.useState(0),u=p[0],E=p[1];return 0===s.length?r.createElement(o.Z,{location:n,title:c},r.createElement(m.Z,{title:"Portfolio"}),r.createElement("p",null,'No blog posts found. Add markdown posts to "content/posts" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):r.createElement(o.Z,{location:n,title:c},r.createElement(m.Z,{title:"Portfolio"}),r.createElement(g.Z,{maxWidth:"string",disableGutters:!0,sx:{maxWidth:"692px",display:"flex",flexDirection:"column",gap:"2rem","@media (max-width: 600px)":{gap:"1.5rem",px:"1.5rem"}}},r.createElement(d.Z,{sx:{width:"100%",borderBottom:1,borderColor:"divider"}},r.createElement(x.Z,{value:u,onChange:function(e,t){E(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"nav tabs example",sx:{"& .MuiTabs-flexContainer":{gap:"1rem"},"& .MuiTabs-indicator":{backgroundColor:"text.primary",height:"1px"}}},r.createElement(b.Z,Object.assign({label:"Blog"},{id:"simple-tab-"+(a=0),"aria-controls":"simple-tabpanel-"+a},{sx:{textTransform:"capitalize",fontWeight:400,minWidth:"60px","&.Mui-selected":{color:"text.primary"}}})),r.createElement(b.Z,{label:"Gear List",component:"a",href:"/gear",sx:{textTransform:"capitalize",fontWeight:400,minWidth:"60px","&.Mui-selected":{color:"text.primary"}}}),r.createElement(b.Z,{label:"My Links",component:"a",href:"/links",sx:{textTransform:"capitalize",fontWeight:400,minWidth:"60px","&.Mui-selected":{color:"text.primary"}}}),r.createElement(b.Z,{label:"Code Portfolio",component:"a",href:"/code",sx:{textTransform:"capitalize",fontWeight:400,minWidth:"60px","&.Mui-selected":{color:"text.primary"}}}))),r.createElement(f,null),r.createElement(v,{value:u,index:0,key:"all"},s.map((function(e){return r.createElement(y.ZP,{item:!0,xs:12,key:e.id,sx:{"&:last-child":{"& > hr":{display:"none"}}}},r.createElement(l.Z,{data:e}),r.createElement(h.Z,{sx:{pt:4,"@media (max-width: 600px)":{pt:"1.5rem"}}}))}))),i.allMdx.group.map((function(e,t){return r.createElement(v,{value:u,index:t+1,key:e.fieldValue},s.map((function(t){if(t.frontmatter.category===e.fieldValue)return r.createElement(y.ZP,{item:!0,xs:12,key:t.id,sx:{"&:last-child":{"& > hr":{display:"none"}}}},r.createElement(l.Z,{data:t}),r.createElement(h.Z,{sx:{pt:4,"@media (max-width: 600px)":{pt:"1.5rem"}}}))})))}))))}},2396:function(e,t,a){var i=a(7294),r=a(1597),n=a(7059),l=(a(1804),a(9211)),o=a(5985),m=a(4320),c=a(9308),s={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"2",lineClamp:"2",WebkitBoxOrient:"vertical"};t.Z=function(e){var t=e.data,a=(0,n.c)(t.frontmatter.featuredImage);return i.createElement("article",{style:{width:"100%"}},i.createElement(m.ZP,{item:!0,xs:12,key:t.frontmatter.slug,itemScope:!0,itemType:"http://schema.org/Article",sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:"60px","@media (max-width: 600px)":{gap:"1rem"}}},i.createElement(l.Z,{sx:{padding:"0 !important"}},i.createElement(l.Z,{sx:{display:"flex",flexDirection:"column",gap:2,"@media (max-width: 600px)":{gap:1.5}}},i.createElement(c.Z,{color:"text.disabled",variant:"body2"},t.frontmatter.date),i.createElement(l.Z,{component:r.Link,to:t.fields.slug,sx:{textDecoration:"none",color:"unset","& h2:hover":{color:"primary.main"},"@media (max-width: 900px)":{"& h2:hover":{color:"unset"}}}},i.createElement(c.Z,{variant:"h2",gutterBottom:!0,style:s,sx:{fontWeight:"700",lineHeight:"28px",fontSize:"22px !important",letterSpacing:"0",color:"text.primary",transition:"color 0.2s ease-in-out","@media (max-width: 600px)":{marginBottom:"0",lineHeight:"20px",fontSize:"16px !important"}}},t.frontmatter.title||t.fields.slug),i.createElement(c.Z,{variant:"body1",gutterBottom:!0,style:s,sx:{display:"initial",fontFamily:"Charter",marginBottom:"1rem",color:"text.postBody","@media (max-width: 600px)":{display:"none !important"}}},t.frontmatter.description+" —"+t.excerpt)),i.createElement(l.Z,{sx:{display:"flex",gap:2,alignItems:"center"}},t.frontmatter.category&&i.createElement(o.Z,{label:t.frontmatter.category,size:"small",disabled:!0}),i.createElement(c.Z,{sx:{color:"text.secondary"},variant:"body2"},t.timeToRead+" min read")))),i.createElement(r.Link,{to:t.fields.slug},i.createElement(l.Z,{sx:{width:"100px","@media (max-width: 600px)":{width:"80px"}}},i.createElement(n.G,{image:a,alt:t.frontmatter.featuredImage.name,style:{borderRadius:"4px"}})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b93850459bc44298f6e6.js.map