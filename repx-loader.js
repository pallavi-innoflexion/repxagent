// Loads the RepX Dev script using the Share ID from config.js.
// Keep config.js before this file on every page.
(function () {
  const shareId = window.REPX_SHARE_ID;
  if (!shareId) {
    console.warn("RepX Share ID is missing. Set window.REPX_SHARE_ID in config.js.");
    return;
  }

  // Avoid inserting the launcher script more than once in the same document.
  if (document.querySelector('script[data-repx-loader="true"]')) return;

  const script = document.createElement("script");
  script.src = `${window.REPX_SCRIPT_URL}?data-id=${encodeURIComponent(shareId)}`;
  script.async = true;
  script.dataset.repxLoader = "true";
  document.head.appendChild(script);
})();
