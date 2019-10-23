/* Discord: Simon();#0001 */

console.log("[Chest Redeemer] Extension loaded!");
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (!mutation.addedNodes) {
      return;
    }
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      try {
        if (mutation.addedNodes[i].classList.contains("tw-absolute")) {
          var button = document.getElementsByClassName("tw-button tw-button--success tw-interactive");

          if (button[0]) {
            button[0].click();
            console.log("[Chest Redeemer] Chest redeemed!");
          }
        }
      } catch {
        return;
      }
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
