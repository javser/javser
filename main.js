alert(Math.random()*100);
alert(6);
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  //e.preventDefault();
  // Stash the event so it can be triggered later.
  //deferredPrompt = e;
  alert(7);
});

