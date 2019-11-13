var ra= document.createElement('p');
ra.textContent=(Math.random()*100)+'\n\r';
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
      ra.textContent+=('Your PWA has been installed\n\r');
    } else {
      ra.textContent+=('User chose to not install your PWA\n\r');
    }

    deferredPrompt = null;

    });


  }
}
