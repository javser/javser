alert(Math.random()*100);
alert(61);

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
      alert('Your PWA has been installed');
    } else {
      alert('User chose to not install your PWA');
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
    alert("[PWA Builder] active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("sw.js", {
        scope: "./"
      })
      .then(function (reg) {
        alert("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
      });
  }
}
