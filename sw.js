/* Geländetaufe – hält die App selbst offline verfügbar (Kartenkacheln speichert die App separat). */
const C='gelaendetaufe-app-v19';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  /* Android: „Teilen mit … Geländetaufe“ (z. B. aus WhatsApp) – Datei zwischenlagern und App öffnen */
  if(e.request.method==='POST'&&u.origin===location.origin&&u.pathname.endsWith('/share')){
    e.respondWith((async()=>{ try{ const fd=await e.request.formData(); const f=fd.get('file')||fd.getAll('file')[0];
        if(f){ const c=await caches.open('gt-share'); await c.put('./shared-file',new Response(await f.text(),{headers:{'content-type':'application/json','x-name':encodeURIComponent((f.name||'Import').replace(/\.json$/i,''))}})); } }catch(x){}
      return Response.redirect('./?shared=1',303); })());
    return;
  }
  if(e.request.method!=='GET'||u.origin!==location.origin) return;   // Karten und Suche nicht anfassen
  e.respondWith(fetch(e.request).then(r=>{ const cp=r.clone(); caches.open(C).then(c=>c.put(e.request,cp)); return r; })
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./index.html'))));
});
