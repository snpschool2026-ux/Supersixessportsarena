const CACHE="warehouse-pro-staff-v1";
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./Warehouse_Pro_Staff_FINAL.html","./manifest.webmanifest"]))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));