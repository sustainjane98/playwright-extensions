(self.webpackChunk_playwright_extensions_source=self.webpackChunk_playwright_extensions_source||[]).push([[934],{7293:(e,n,t)=>{"use strict";t.d(n,{A:()=>L});var a=t(6540),s=t(4848);function r(e){var n,t=function(e){var n=a.Children.toArray(e),t=n.find((function(e){return a.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),r=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:r.length>0?(0,s.jsx)(s.Fragment,{children:r}):null}}(e.children),r=t.mdxAdmonitionTitle,i=t.rest,o=null!=(n=e.title)?n:r;return Object.assign({},e,o&&{title:o},{children:i})}var i=t(8215),o=t(1312),c=t(7559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){var n=e.type,t=e.className,a=e.children;return(0,s.jsx)("div",{className:(0,i.A)(c.G.common.admonition,c.G.common.admonitionType(n),l.admonition,t),children:a})}function u(e){var n=e.icon,t=e.title;return(0,s.jsxs)("div",{className:l.admonitionHeading,children:[(0,s.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function m(e){var n=e.children;return n?(0,s.jsx)("div",{className:l.admonitionContent,children:n}):null}function h(e){var n=e.type,t=e.icon,a=e.title,r=e.children,i=e.className;return(0,s.jsxs)(d,{type:n,className:i,children:[a||t?(0,s.jsx)(u,{title:a,icon:t}):null,(0,s.jsx)(m,{children:r})]})}function f(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var p={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,s.jsx)(h,Object.assign({},p,e,{className:(0,i.A)("alert alert--secondary",e.className),children:e.children}))}function v(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var j={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,s.jsx)(h,Object.assign({},j,e,{className:(0,i.A)("alert alert--success",e.className),children:e.children}))}function x(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var y={icon:(0,s.jsx)(x,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,s.jsx)(h,Object.assign({},y,e,{className:(0,i.A)("alert alert--info",e.className),children:e.children}))}function N(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var k={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function B(e){return(0,s.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var w={icon:(0,s.jsx)(B,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var C={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var O={note:g,tip:b,info:A,warning:function(e){return(0,s.jsx)(h,Object.assign({},k,e,{className:(0,i.A)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,s.jsx)(h,Object.assign({},w,e,{className:(0,i.A)("alert alert--danger",e.className),children:e.children}))}},_={secondary:function(e){return(0,s.jsx)(g,Object.assign({title:"secondary"},e))},important:function(e){return(0,s.jsx)(A,Object.assign({title:"important"},e))},success:function(e){return(0,s.jsx)(b,Object.assign({title:"success"},e))},caution:function(e){return(0,s.jsx)(h,Object.assign({},C,e,{className:(0,i.A)("alert alert--warning",e.className),children:e.children}))}};const E=Object.assign({},O,_);function L(e){var n,t=r(e),a=(n=t.type,E[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),E.info));return(0,s.jsx)(a,Object.assign({},t))}},4336:(e,n,t)=>{"use strict";t.d(n,{A:()=>j});t(6540);var a=t(8215),s=t(1312),r=t(7559),i=t(8774),o=t(8587);const c={iconEdit:"iconEdit_Z9Sw"};var l=t(4848),d=["className"];function u(e){var n=e.className,t=(0,o.A)(e,d);return(0,l.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.A)(c.iconEdit,n),"aria-hidden":"true"},t,{children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function m(e){var n=e.editUrl;return(0,l.jsxs)(i.A,{to:n,className:r.G.common.editThisPage,children:[(0,l.jsx)(u,{}),(0,l.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var h=t(6266);function f(e){var n=e.lastUpdatedAt,t=new Date(n),a=(0,h.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,l.jsx)(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function p(e){var n=e.lastUpdatedBy;return(0,l.jsx)(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:n})},children:" by {user}"})}function g(e){var n=e.lastUpdatedAt,t=e.lastUpdatedBy;return(0,l.jsxs)("span",{className:r.G.common.lastUpdated,children:[(0,l.jsx)(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,l.jsx)(f,{lastUpdatedAt:n}):"",byUser:t?(0,l.jsx)(p,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const v={lastUpdated:"lastUpdated_JAkA"};function j(e){var n=e.className,t=e.editUrl,s=e.lastUpdatedAt,r=e.lastUpdatedBy;return(0,l.jsxs)("div",{className:(0,a.A)("row",n),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(m,{editUrl:t})}),(0,l.jsx)("div",{className:(0,a.A)("col",v.lastUpdated),children:(s||r)&&(0,l.jsx)(g,{lastUpdatedAt:s,lastUpdatedBy:r})})]})}},8356:(e,n,t)=>{"use strict";t.d(n,{A:()=>fe});var a=t(6540),s=t(8453),r=t(5260),i=t(8587),o=t(2303),c=t(8215),l=t(5293),d=t(6342);function u(){var e=(0,d.p)().prism,n=(0,l.G)().colorMode,t=e.theme,a=e.darkTheme||t;return"dark"===n?a:t}var m=t(7559),h=t(8634),f=t(8426),p=t.n(f),g=(0,h.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),v=(0,h.A)(/\{([\d,-]+)\}/,{range:1}),j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b=Object.assign({},j,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),x=Object.keys(j);function y(e,n){var t=e.map((function(e){var t=b[e],a=t.start,s=t.end;return"(?:"+a+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+s+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function A(e,n){var t=e.replace(/\n$/,""),a=n.language,s=n.magicComments,r=n.metastring;if(r&&v.test(r)){var i=r.match(v).groups.range;if(0===s.length)throw new Error("A highlight range has been given in code block's metastring (``` "+r+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var o=s[0].className,c=p()(i).filter((function(e){return e>0})).map((function(e){return[e-1,[o]]}));return{lineClassNames:Object.fromEntries(c),code:t}}if(void 0===a)return{lineClassNames:{},code:t};for(var l=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],n);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],n);case"html":return y(["js","jsBlock","html"],n);case"python":case"py":case"bash":return y(["bash"],n);case"markdown":case"md":return y(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return y(["tex"],n);case"lua":case"haskell":case"sql":return y(["lua"],n);case"wasm":return y(["wasm"],n);case"vb":case"vba":case"visual-basic":return y(["vb","rem"],n);case"vbnet":return y(["vbnet","rem"],n);case"batch":return y(["rem"],n);case"basic":return y(["rem","f90"],n);case"fsharp":return y(["js","ml"],n);case"ocaml":case"sml":return y(["ml"],n);case"fortran":return y(["f90"],n);case"cobol":return y(["cobol"],n);default:return y(x,n)}}(a,s),d=t.split("\n"),u=Object.fromEntries(s.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(s.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),h=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),f=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),g=0;g<d.length;){var j=d[g].match(l);if(j){var b=j.slice(1).find((function(e){return void 0!==e}));m[b]?u[m[b]].range+=g+",":h[b]?u[h[b]].start=g:f[b]&&(u[f[b]].range+=u[f[b]].start+"-"+(g-1)+","),d.splice(g,1)}else g+=1}t=d.join("\n");var A={};return Object.entries(u).forEach((function(e){var n=e[0],t=e[1].range;p()(t).forEach((function(e){null!=A[e]||(A[e]=[]),A[e].push(n)}))})),{lineClassNames:A,code:t}}const N={codeBlockContainer:"codeBlockContainer_Ckt0"};var k=t(4848),B=["as"];function w(e){var n=e.as,t=(0,i.A)(e,B),a=function(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var a=e[0],s=e[1],r=n[a];r&&"string"==typeof s&&(t[r]=s)})),t}(u());return(0,k.jsx)(n,Object.assign({},t,{style:a,className:(0,c.A)(t.className,N.codeBlockContainer,m.G.common.codeBlock)}))}const C={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function O(e){var n=e.children,t=e.className;return(0,k.jsx)(w,{as:"pre",tabIndex:0,className:(0,c.A)(C.codeBlockStandalone,"thin-scrollbar",t),children:(0,k.jsx)("code",{className:C.codeBlockLines,children:n})})}var _=t(3807),E={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,n){var t=(0,a.useState)(),s=t[0],r=t[1],i=(0,a.useCallback)((function(){var n;r(null==(n=e.current)?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((function(){i()}),[i]),function(e,n,t){void 0===t&&(t=E);var s=(0,_._q)(n),r=(0,_.Be)(t);(0,a.useEffect)((function(){var n=new MutationObserver(s);return e&&n.observe(e,r),function(){return n.disconnect()}}),[e,s,r])}(s,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(n(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var T=t(4876);const S={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function U(e){var n=e.line,t=e.classNames,a=e.showLineNumbers,s=e.getLineProps,r=e.getTokenProps;1===n.length&&"\n"===n[0].content&&(n[0].content="");var i=s({line:n,className:(0,c.A)(t,a&&S.codeLine)}),o=n.map((function(e,n){return(0,k.jsx)("span",Object.assign({},r({token:e})),n)}));return(0,k.jsxs)("span",Object.assign({},i,{children:[a?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:S.codeLineNumber}),(0,k.jsx)("span",{className:S.codeLineContent,children:o})]}):o,(0,k.jsx)("br",{})]}))}var M=t(1312);function z(e){return(0,k.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function I(e){return(0,k.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){var n=e.code,t=e.className,s=(0,a.useState)(!1),r=s[0],i=s[1],o=(0,a.useRef)(void 0),l=(0,a.useCallback)((function(){!function(e,n){var t=(void 0===n?{}:n).target,a=void 0===t?document.body:t;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var s=document.createElement("textarea"),r=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";var i=document.getSelection(),o=i.rangeCount>0&&i.getRangeAt(0);a.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}s.remove(),o&&(i.removeAllRanges(),i.addRange(o)),r&&r.focus()}(n),i(!0),o.current=window.setTimeout((function(){i(!1)}),1e3)}),[n]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(o.current)}}),[]),(0,k.jsx)("button",{type:"button","aria-label":r?(0,M.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.A)("clean-btn",t,H.copyButton,r&&H.copyButtonCopied),onClick:l,children:(0,k.jsxs)("span",{className:H.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(z,{className:H.copyButtonIcon}),(0,k.jsx)(I,{className:H.copyButtonSuccessIcon})]})})}function V(e){return(0,k.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const W={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function D(e){var n=e.className,t=e.onClick,a=e.isEnabled,s=(0,M.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:t,className:(0,c.A)("clean-btn",n,a&&W.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,k.jsx)(V,{className:W.wordWrapButtonIcon,"aria-hidden":"true"})})}function P(e){var n,t,s,r,i,o,l,m,h,f,p,v=e.children,j=e.className,b=void 0===j?"":j,x=e.metastring,y=e.title,N=e.showLineNumbers,B=e.language,O=(0,d.p)().prism,_=O.defaultLanguage,E=O.magicComments,S=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=B?B:null==(t=b.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:t.replace(/language-/,""))?n:_),M=u(),z=(s=(0,a.useState)(!1),r=s[0],i=s[1],o=(0,a.useState)(!1),l=o[0],m=o[1],h=(0,a.useRef)(null),f=(0,a.useCallback)((function(){var e=h.current.querySelector("code");r?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),i((function(e){return!e}))}),[h,r]),p=(0,a.useCallback)((function(){var e=h.current,n=e.scrollWidth>e.clientWidth||h.current.querySelector("code").hasAttribute("style");m(n)}),[h]),L(h,p),(0,a.useEffect)((function(){p()}),[r,p]),(0,a.useEffect)((function(){return window.addEventListener("resize",p,{passive:!0}),function(){window.removeEventListener("resize",p)}}),[p]),{codeBlockRef:h,isEnabled:r,isCodeScrollable:l,toggle:f}),I=function(e){var n,t;return null!=(n=null==e||null==(t=e.match(g))?void 0:t.groups.title)?n:""}(x)||y,H=A(v,{metastring:x,language:S,magicComments:E}),V=H.lineClassNames,W=H.code,P=null!=N?N:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(x);return(0,k.jsxs)(w,{as:"div",className:(0,c.A)(b,S&&!b.includes("language-"+S)&&"language-"+S),children:[I&&(0,k.jsx)("div",{className:C.codeBlockTitle,children:I}),(0,k.jsxs)("div",{className:C.codeBlockContent,children:[(0,k.jsx)(T.f4,{theme:M,code:W,language:null!=S?S:"text",children:function(e){var n=e.className,t=e.style,a=e.tokens,s=e.getLineProps,r=e.getTokenProps;return(0,k.jsx)("pre",{tabIndex:0,ref:z.codeBlockRef,className:(0,c.A)(n,C.codeBlock,"thin-scrollbar"),style:t,children:(0,k.jsx)("code",{className:(0,c.A)(C.codeBlockLines,P&&C.codeBlockLinesWithNumbering),children:a.map((function(e,n){return(0,k.jsx)(U,{line:e,getLineProps:s,getTokenProps:r,classNames:V[n],showLineNumbers:P},n)}))})})}}),(0,k.jsxs)("div",{className:C.buttonGroup,children:[(z.isEnabled||z.isCodeScrollable)&&(0,k.jsx)(D,{className:C.codeButton,onClick:function(){return z.toggle()},isEnabled:z.isEnabled}),(0,k.jsx)(R,{className:C.codeButton,code:W})]})]})]})}var G=["children"];function q(e){var n=e.children,t=(0,i.A)(e,G),s=(0,o.A)(),r=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),c="string"==typeof r?P:O;return(0,k.jsx)(c,Object.assign({},t,{children:r}),String(s))}function F(e){return(0,k.jsx)("code",Object.assign({},e))}var Z=t(8774);var $=t(5066),J=t(3427),Y=t(1422);const K={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var Q=["summary","children"];function X(e){return!!e&&("SUMMARY"===e.tagName||X(e.parentElement))}function ee(e,n){return!!e&&(e===n||ee(e.parentElement,n))}function ne(e){var n=e.summary,t=e.children,s=(0,i.A)(e,Q);(0,J.A)().collectAnchor(s.id);var r=(0,o.A)(),c=(0,a.useRef)(null),l=(0,Y.u)({initialState:!s.open}),d=l.collapsed,u=l.setCollapsed,m=(0,a.useState)(s.open),h=m[0],f=m[1],p=a.isValidElement(n)?n:(0,k.jsx)("summary",{children:null!=n?n:"Details"});return(0,k.jsxs)("details",Object.assign({},s,{ref:c,open:h,"data-collapsed":d,className:(0,$.A)(K.details,r&&K.isBrowser,s.className),onMouseDown:function(e){X(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;X(n)&&ee(n,c.current)&&(e.preventDefault(),d?(u(!1),f(!0)):u(!0))},children:[p,(0,k.jsx)(Y.N,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){u(e),f(!e)},children:(0,k.jsx)("div",{className:K.collapsibleContent,children:t})})]}))}const te={details:"details_b_Ee"};var ae="alert alert--info";function se(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,k.jsx)(ne,Object.assign({},n,{className:(0,c.A)(ae,te.details,n.className)}))}function re(e){var n=a.Children.toArray(e.children),t=n.find((function(e){return a.isValidElement(e)&&"summary"===e.type})),s=(0,k.jsx)(k.Fragment,{children:n.filter((function(e){return e!==t}))});return(0,k.jsx)(se,Object.assign({},e,{summary:t,children:s}))}var ie=t(1107);function oe(e){return(0,k.jsx)(ie.A,Object.assign({},e))}const ce={containsTaskList:"containsTaskList_mC6p"};function le(e){if(void 0!==e)return(0,c.A)(e,(null==e?void 0:e.includes("contains-task-list"))&&ce.containsTaskList)}const de={img:"img_ev3q"};var ue=t(7293),me=t(418);const he={Head:r.A,details:re,Details:re,code:function(e){return function(e){return void 0!==e.children&&a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))}(e)?(0,k.jsx)(F,Object.assign({},e)):(0,k.jsx)(q,Object.assign({},e))},a:function(e){return(0,k.jsx)(Z.A,Object.assign({},e))},pre:function(e){return(0,k.jsx)(k.Fragment,{children:e.children})},ul:function(e){return(0,k.jsx)("ul",Object.assign({},e,{className:le(e.className)}))},li:function(e){return(0,J.A)().collectAnchor(e.id),(0,k.jsx)("li",Object.assign({},e))},img:function(e){return(0,k.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},e,{className:(n=e.className,(0,c.A)(n,de.img))}));var n},h1:function(e){return(0,k.jsx)(oe,Object.assign({as:"h1"},e))},h2:function(e){return(0,k.jsx)(oe,Object.assign({as:"h2"},e))},h3:function(e){return(0,k.jsx)(oe,Object.assign({as:"h3"},e))},h4:function(e){return(0,k.jsx)(oe,Object.assign({as:"h4"},e))},h5:function(e){return(0,k.jsx)(oe,Object.assign({as:"h5"},e))},h6:function(e){return(0,k.jsx)(oe,Object.assign({as:"h6"},e))},admonition:ue.A,mermaid:me.A};function fe(e){var n=e.children;return(0,k.jsx)(s.x,{components:he,children:n})}},9022:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});t(6540);var a=t(8215),s=t(8774),r=t(4848);function i(e){var n=e.permalink,t=e.title,i=e.subLabel,o=e.isNext;return(0,r.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:t})]})}},6133:(e,n,t)=>{"use strict";t.d(n,{A:()=>o});t(6540);var a=t(8215),s=t(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=t(4848);function o(e){var n=e.permalink,t=e.label,o=e.count,c=e.description;return(0,i.jsxs)(s.A,{href:n,title:c,className:(0,a.A)(r.tag,o?r.tagWithCount:r.tagRegular),children:[t,o&&(0,i.jsx)("span",{children:o})]})}},2053:(e,n,t)=>{"use strict";t.d(n,{A:()=>c});t(6540);var a=t(8215),s=t(1312),r=t(6133);const i={tags:"tags_jXut",tag:"tag_QGVx"};var o=t(4848);function c(e){var n=e.tags;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.A)(i.tags,"padding--none","margin-left--sm"),children:n.map((function(e){return(0,o.jsx)("li",{className:i.tag,children:(0,o.jsx)(r.A,Object.assign({},e))},e.permalink)}))})]})}},6266:(e,n,t)=>{"use strict";t.d(n,{i:()=>s});var a=t(4586);function s(e){void 0===e&&(e={});var n=(0,a.A)().i18n.currentLocale,t=function(){var e=(0,a.A)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}},8426:(e,n)=>{function t(e){let n,t=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))t.push(parseInt(a,10));else if(n=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,s,r]=n;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(r+=e);for(let n=a;n!==r;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},8453:(e,n,t)=>{"use strict";t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);