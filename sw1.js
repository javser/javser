self.addEventListener('install',(event)=>{
  event.waitUntil(
    caches.open('v1').then((cache)=>{
      return cache.addAll(['./','offline.html']);
    })
  );
});

self.addEventListener('fetch',(event)=>{
  event.respondWith(caches.match(event.request).then((response)=>{
    if(response!==undefined){
      return response;
    } else {
      return fetch(event.request).then((response)=>{
        let resClone = response.clone();
        caches.open(v1).then((cache)=>{
          cache.put(event.request, resClone);
        });
        return response;
      }).catch(()=>{
        return caches.match('/offline.html');
      });
    }
  }));
});
