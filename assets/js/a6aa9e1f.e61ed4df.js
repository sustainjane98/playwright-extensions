"use strict";(self.webpackChunk_playwright_extensions_source=self.webpackChunk_playwright_extensions_source||[]).push([[643],{5124:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(6540);var i=a(8215),n=a(4586),r=a(1213),s=a(7559),o=a(6535),l=a(7713),d=a(1463),g=a(3892),c=a(5260),u=a(6676),p=a(4848);function m(e){var t=(0,u.k)(e);return(0,p.jsx)(c.A,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){var t=e.metadata,a=(0,n.A)().siteConfig.title,i=t.blogDescription,s=t.blogTitle,o="/"===t.permalink?a:s;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:o,description:i}),(0,p.jsx)(d.A,{tag:"blog_posts_list"})]})}function b(e){var t=e.metadata,a=e.items,i=e.sidebar;return(0,p.jsxs)(o.A,{sidebar:i,children:[(0,p.jsx)(g.A,{items:a}),(0,p.jsx)(l.A,{metadata:t})]})}function f(e){return(0,p.jsxs)(r.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogListPage),children:[(0,p.jsx)(h,Object.assign({},e)),(0,p.jsx)(m,Object.assign({},e)),(0,p.jsx)(b,Object.assign({},e))]})}},7713:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);var i=a(1312),n=a(9022),r=a(4848);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,r.jsx)(n.A,{permalink:s,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);var i=a(7131),n=a(4651),r=a(4848);function s(e){var t=e.items,a=e.component,s=void 0===a?n.A:a;return(0,r.jsx)(r.Fragment,{children:t.map((function(e){var t=e.content;return(0,r.jsx)(i.i,{content:t,children:(0,r.jsx)(s,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},6676:(e,t,a)=>{a.d(t,{k:()=>g,J:()=>c});var i=a(6025),n=a(4586),r=a(6803);var s=a(7131),o=function(e){return new Date(e).toISOString()};function l(e){var t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,a){return e?{image:(i={imageUrl:t(e,{absolute:!0}),caption:"title image for the blog post: "+a},n=i.imageUrl,r=i.caption,{"@type":"ImageObject","@id":n,url:n,contentUrl:n,caption:r})}:{};var i,n,r}function g(e){var t=(0,n.A)().siteConfig,a=(0,i.hH)().withBaseUrl,r=e.metadata,s=r.blogDescription,g=r.blogTitle,c=r.permalink,u=""+t.url+c;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:g,description:s,blogPost:e.items.map((function(e){return function(e,t,a){var i,n,r=e.assets,s=e.frontMatter,g=e.metadata,c=g.date,u=g.title,p=g.description,m=g.lastUpdatedAt,h=null!=(i=r.image)?i:s.image,b=null!=(n=s.keywords)?n:[],f=""+t.url+g.permalink,j=m?o(m):void 0;return Object.assign({"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:u,name:u,description:p,datePublished:c},j?{dateModified:j}:{},l(g.authors),d(h,a,u),b?{keywords:b}:{})}(e.content,t,a)}))}}function c(){var e,t,a=function(){var e,t=(0,r.A)(),a=null==t||null==(e=t.data)?void 0:e.blogMetadata;if(!a)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return a}(),g=(0,s.e)(),c=g.assets,u=g.metadata,p=(0,n.A)().siteConfig,m=(0,i.hH)().withBaseUrl,h=u.date,b=u.title,f=u.description,j=u.frontMatter,v=u.lastUpdatedAt,x=null!=(e=c.image)?e:j.image,A=null!=(t=j.keywords)?t:[],k=v?o(v):void 0,w=""+p.url+u.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":w,mainEntityOfPage:w,url:w,headline:b,name:b,description:f,datePublished:h},k?{dateModified:k}:{},l(u.authors),d(x,m,b),A?{keywords:A}:{},{isPartOf:{"@type":"Blog","@id":""+p.url+a.blogBasePath,name:a.blogTitle}})}function u(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}}}]);