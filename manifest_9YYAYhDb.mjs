import '@astrojs/internal-helpers/path';
import 'cookie';
import './chunks/astro_SNWO-_GZ.mjs';
import 'string-width';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/playwright-extensions/playwright-extensions/_astro/page.36aCzv65.js"}],"styles":[],"routeData":{"type":"endpoint","route":"/playwright-extensions/_astro/ec.0epgx.css","pattern":"^\\/playwright-extensions\\/_astro\\/ec\\.0epgx\\.css$","segments":[[{"content":"playwright-extensions","dynamic":false,"spread":false}],[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.0epgx.css","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/astro-expressive-code/routes/styles.ts","pathname":"/playwright-extensions/_astro/ec.0epgx.css","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/playwright-extensions/playwright-extensions/_astro/page.36aCzv65.js"}],"styles":[],"routeData":{"type":"endpoint","route":"/playwright-extensions/_astro/ec.sgewm.js","pattern":"^\\/playwright-extensions\\/_astro\\/ec\\.sgewm\\.js$","segments":[[{"content":"playwright-extensions","dynamic":false,"spread":false}],[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.sgewm.js","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/astro-expressive-code/routes/scripts.ts","pathname":"/playwright-extensions/_astro/ec.sgewm.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/playwright-extensions/playwright-extensions/_astro/hoisted.al03zf-s.js"},{"type":"external","value":"/playwright-extensions/playwright-extensions/_astro/page.36aCzv65.js"}],"styles":[{"type":"external","src":"/playwright-extensions/playwright-extensions/_astro/index.I8SMNJ_z.css"},{"type":"inline","content":"svg:where(.astro-e5tisrzd){color:var(--sl-icon-color);font-size:var(--sl-icon-size, 1em);width:1em;height:1em}\n"}],"routeData":{"type":"page","route":"/404","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/@astrojs/starlight/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/playwright-extensions/playwright-extensions/_astro/hoisted.al03zf-s.js"},{"type":"external","value":"/playwright-extensions/playwright-extensions/_astro/page.36aCzv65.js"}],"styles":[{"type":"external","src":"/playwright-extensions/playwright-extensions/_astro/index.I8SMNJ_z.css"},{"type":"inline","content":"svg:where(.astro-e5tisrzd){color:var(--sl-icon-color);font-size:var(--sl-icon-size, 1em);width:1em;height:1em}\n"}],"routeData":{"type":"page","route":"/[...slug]","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"../../node_modules/@astrojs/starlight/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://sustainjane98.github.io","base":"/playwright-extensions","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:../../node_modules/@astrojs/starlight/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/utils/routing.ts",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:../../node_modules/@astrojs/starlight/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/utils/navigation.ts",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/components/SidebarSublist.astro",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/components/Page.astro",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/components/PageFrame.astro",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/components/PageSidebar.astro",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/utils/route-data.ts",{"propagation":"in-tree","containsHead":false}],["/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/utils/translations.ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:../../node_modules/astro-expressive-code/routes/styles@_@ts":"pages/playwright-extensions/_astro/ec.0epgx.css.astro.mjs","\u0000@astro-page:../../node_modules/astro-expressive-code/routes/scripts@_@ts":"pages/playwright-extensions/_astro/ec.sgewm.js.astro.mjs","\u0000@astro-page:../../node_modules/@astrojs/starlight/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:../../node_modules/@astrojs/starlight/index@_@astro":"pages/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/../../node_modules/@astrojs/starlight/index.astro":"chunks/pages/index_mnPTQDGU.mjs","/../../node_modules/astro-expressive-code/routes/scripts.ts":"chunks/pages/scripts_lQlsPtV2.mjs","/../../node_modules/astro-expressive-code/routes/styles.ts":"chunks/pages/styles_c5C5d23g.mjs","\u0000@astrojs-manifest":"manifest_9YYAYhDb.mjs","/Users/janewill/Documents/playwright-extensions/docs/playwright-extensions/src/content/docs/getting_started.md?astroContentCollectionEntry=true":"chunks/getting_started_9RN9aZx8.mjs","/Users/janewill/Documents/playwright-extensions/docs/playwright-extensions/src/content/docs/index.mdx?astroContentCollectionEntry=true":"chunks/index_108blGh1.mjs","/Users/janewill/Documents/playwright-extensions/docs/playwright-extensions/src/content/docs/installation.md?astroContentCollectionEntry=true":"chunks/installation_YnL0dl6d.mjs","/Users/janewill/Documents/playwright-extensions/docs/playwright-extensions/src/content/docs/getting_started.md?astroPropagatedAssets":"chunks/getting_started_2beBvrXS.mjs","/Users/janewill/Documents/playwright-extensions/docs/playwright-extensions/src/content/docs/index.mdx?astroPropagatedAssets":"chunks/index_mgPFZE75.mjs","/Users/janewill/Documents/playwright-extensions/docs/playwright-extensions/src/content/docs/installation.md?astroPropagatedAssets":"chunks/installation_wF8SLX3v.mjs","/Users/janewill/Documents/playwright-extensions/docs/playwright-extensions/src/content/docs/getting_started.md":"chunks/getting_started_XAQmL3n2.mjs","/Users/janewill/Documents/playwright-extensions/docs/playwright-extensions/src/content/docs/index.mdx":"chunks/index_hVnnb5fa.mjs","/Users/janewill/Documents/playwright-extensions/docs/playwright-extensions/src/content/docs/installation.md":"chunks/installation_8fY57tH6.mjs","/Users/janewill/Documents/playwright-extensions/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts":"playwright-extensions/_astro/Tabs.astro_astro_type_script_index_0_lang.YYQMiWOA.js","astro:scripts/page.js":"playwright-extensions/_astro/page.36aCzv65.js","/astro/hoisted.js?q=0":"playwright-extensions/_astro/hoisted.al03zf-s.js","/Users/janewill/Documents/playwright-extensions/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"playwright-extensions/_astro/ui-core.YUtqJlFW.js","astro:scripts/before-hydration.js":""},"assets":["/playwright-extensions/playwright-extensions/_astro/page.36aCzv65.js"]});

export { manifest };
