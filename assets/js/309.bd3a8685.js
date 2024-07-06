"use strict";(self.webpackChunk_playwright_extensions_source=self.webpackChunk_playwright_extensions_source||[]).push([[309],{6535:(e,r,a)=>{a.d(r,{A:()=>A});var t=a(8587),s=a(6540),n=a(8215),l=a(781),i=a(4581),o=a(8774),c=a(1312),m=a(6347),d=a(9169);function u(e){var r=(0,m.zy)().pathname;return(0,s.useMemo)((function(){return e.filter((function(e){return function(e,r){return!(e.unlisted&&!(0,d.ys)(e.permalink,r))}(e,r)}))}),[e,r])}const h={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=a(4848);function v(e){var r=e.sidebar,a=u(r.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,n.A)(h.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,n.A)(h.sidebarItemTitle,"margin-bottom--md"),children:r.title}),(0,g.jsx)("ul",{className:(0,n.A)(h.sidebarItemList,"clean-list"),children:a.map((function(e){return(0,g.jsx)("li",{className:h.sidebarItem,children:(0,g.jsx)(o.A,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var f=a(5600);function x(e){var r=u(e.sidebar.items);return(0,g.jsx)("ul",{className:"menu__list",children:r.map((function(e){return(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(o.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function j(e){return(0,g.jsx)(f.GX,{component:x,props:e})}function b(e){var r=e.sidebar,a=(0,i.l)();return null!=r&&r.items.length?"mobile"===a?(0,g.jsx)(j,{sidebar:r}):(0,g.jsx)(v,{sidebar:r}):null}var p=["sidebar","toc","children"];function A(e){var r=e.sidebar,a=e.toc,s=e.children,i=(0,t.A)(e,p),o=r&&r.items.length>0;return(0,g.jsx)(l.A,Object.assign({},i,{children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(b,{sidebar:r}),(0,g.jsx)("main",{className:(0,n.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:s}),a&&(0,g.jsx)("div",{className:"col col--2",children:a})]})})}))}},4651:(e,r,a)=>{a.d(r,{A:()=>F});a(6540);var t=a(8215),s=a(7131),n=a(4848);function l(e){var r=e.children,a=e.className;return(0,n.jsx)("article",{className:a,children:r})}var i=a(8774);const o={title:"title_f1Hy"};function c(e){var r=e.className,a=(0,s.e)(),l=a.metadata,c=a.isBlogPostPage,m=l.permalink,d=l.title,u=c?"h1":"h2";return(0,n.jsx)(u,{className:(0,t.A)(o.title,r),children:c?d:(0,n.jsx)(i.A,{to:m,children:d})})}var m=a(1312),d=a(5846),u=a(6266);const h={container:"container_mt6G"};function g(e){var r,a=e.readingTime,t=(r=(0,d.W)().selectMessage,function(e){var a=Math.ceil(e);return r(a,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return(0,n.jsx)(n.Fragment,{children:t(a)})}function v(e){var r=e.date,a=e.formattedDate;return(0,n.jsx)("time",{dateTime:r,children:a})}function f(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function x(e){var r,a=e.className,l=(0,s.e)().metadata,i=l.date,o=l.readingTime,c=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,t.A)(h.container,"margin-vert--md",a),children:[(0,n.jsx)(v,{date:i,formattedDate:(r=i,c.format(new Date(r)))}),void 0!==o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsx)(g,{readingTime:o})]})]})}function j(e){return e.href?(0,n.jsx)(i.A,Object.assign({},e)):(0,n.jsx)(n.Fragment,{children:e.children})}function b(e){var r=e.author,a=e.className,s=r.name,l=r.title,i=r.url,o=r.imageURL,c=r.email,m=i||c&&"mailto:"+c||void 0;return(0,n.jsxs)("div",{className:(0,t.A)("avatar margin-bottom--sm",a),children:[o&&(0,n.jsx)(j,{href:m,className:"avatar__photo-link",children:(0,n.jsx)("img",{className:"avatar__photo",src:o,alt:s})}),s&&(0,n.jsxs)("div",{className:"avatar__intro",children:[(0,n.jsx)("div",{className:"avatar__name",children:(0,n.jsx)(j,{href:m,children:(0,n.jsx)("span",{children:s})})}),l&&(0,n.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const p={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){var r=e.className,a=(0,s.e)(),l=a.metadata.authors,i=a.assets;if(0===l.length)return null;var o=l.every((function(e){return!e.name}));return(0,n.jsx)("div",{className:(0,t.A)("margin-top--md margin-bottom--sm",o?p.imageOnlyAuthorRow:"row",r),children:l.map((function(e,r){var a;return(0,n.jsx)("div",{className:(0,t.A)(!o&&"col col--6",o?p.imageOnlyAuthorCol:p.authorCol),children:(0,n.jsx)(b,{author:Object.assign({},e,{imageURL:null!=(a=i.authorsImageUrls[r])?a:e.imageURL})})},r)}))})}function N(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(x,{}),(0,n.jsx)(A,{})]})}var _=a(440),k=a(8356);function P(e){var r=e.children,a=e.className,l=(0,s.e)().isBlogPostPage;return(0,n.jsx)("div",{id:l?_.blogPostContainerID:void 0,className:(0,t.A)("markdown",a),children:(0,n.jsx)(k.A,{children:r})})}var w=a(7559),I=a(4336),T=a(2053),y=a(8587),L=["blogPostTitle"];function C(){return(0,n.jsx)("b",{children:(0,n.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function M(e){var r=e.blogPostTitle,a=(0,y.A)(e,L);return(0,n.jsx)(i.A,Object.assign({"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:r})},a,{children:(0,n.jsx)(C,{})}))}function O(){var e=(0,s.e)(),r=e.metadata,a=e.isBlogPostPage,l=r.tags,i=r.title,o=r.editUrl,c=r.hasTruncateMarker,m=r.lastUpdatedBy,d=r.lastUpdatedAt,u=!a&&c,h=l.length>0;if(!(h||u||o))return null;if(a){var g=!!(o||d||m);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,n.jsx)("div",{className:(0,t.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(T.A,{tags:l})})}),g&&(0,n.jsx)(I.A,{className:(0,t.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:m})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,n.jsx)("div",{className:(0,t.A)("col",{"col--9":u}),children:(0,n.jsx)(T.A,{tags:l})}),u&&(0,n.jsx)("div",{className:(0,t.A)("col text--right",{"col--3":h}),children:(0,n.jsx)(M,{blogPostTitle:i,to:r.permalink})})]})}function F(e){var r=e.children,a=e.className,i=(0,s.e)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,n.jsxs)(l,{className:(0,t.A)(i,a),children:[(0,n.jsx)(N,{}),(0,n.jsx)(P,{children:r}),(0,n.jsx)(O,{})]})}},7131:(e,r,a)=>{a.d(r,{e:()=>o,i:()=>i});var t=a(6540),s=a(3807),n=a(4848),l=t.createContext(null);function i(e){var r=e.children,a=e.content,s=e.isBlogPostPage,i=function(e){var r=e.content,a=e.isBlogPostPage;return(0,t.useMemo)((function(){return{metadata:r.metadata,frontMatter:r.frontMatter,assets:r.assets,toc:r.toc,isBlogPostPage:a}}),[r,a])}({content:a,isBlogPostPage:void 0!==s&&s});return(0,n.jsx)(l.Provider,{value:i,children:r})}function o(){var e=(0,t.useContext)(l);if(null===e)throw new s.dV("BlogPostProvider");return e}},5846:(e,r,a)=>{a.d(r,{W:()=>c});var t=a(6540),s=a(4586),n=["zero","one","two","few","many","other"];function l(e){return n.filter((function(r){return e.includes(r)}))}var i={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,s.A)().i18n.currentLocale;return(0,t.useMemo)((function(){try{return r=e,a=new Intl.PluralRules(r),{locale:r,pluralForms:l(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),i}var r,a}),[e])}function c(){var e=o();return{selectMessage:function(r,a){return function(e,r,a){var t=e.split("|");if(1===t.length)return t[0];t.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+t.length+": "+e);var s=a.select(r),n=a.pluralForms.indexOf(s);return t[Math.min(n,t.length-1)]}(a,r,e)}}}}}]);