var ra= document.createElement('p');
ra.textContent=(Math.random()*100)+'\n';
document.body.insertBefore(ra,null);

var bt = document.createElement('button');
bt.textContent = 'install';
bt.onclick = install;
document.body.appendChild(bt);

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

async function install() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    alert(deferredPrompt)
    deferredPrompt.userChoice.then(function(choiceResult){

      if (choiceResult.outcome === 'accepted') {
      ra.textContent+=('Your PWA has been installed\n');
    } else {
      ra.textContent+=('User chose to not install your PWA\n');
    }

    deferredPrompt = null;

    });


  }
}

// This is the "Offline page" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker

// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    ra.textContent+=("[PWA Builder] active service worker found, no need to register\n");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("sw.js", {
        scope: "./"
      })
      .then(function (reg) {
        ra.textContent+=("[PWA Builder] Service worker has been registered for scope: " + reg.scope)+'\n';
      });
  }
}
