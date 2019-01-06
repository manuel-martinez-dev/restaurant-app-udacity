/* ====== Service Worker registration ===== */

if (navigator.serviceWorker){
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log("Successfull Service Worker registration");
  }).catch((event) =>{
    console.log("could not register Service Worker", event);
  });
}
