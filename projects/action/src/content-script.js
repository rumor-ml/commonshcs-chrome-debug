let chcsdebug

window.addEventListener("message", (event) => {
  if (event.source === window && event.data.chcsdebug) {
    chcsdebug = event.data
  }
}, false);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello") {
      sendResponse(chcsdebug);
    } else if (request.fixture) {
      window.postMessage(request)
    }

  }
);