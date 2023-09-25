console.log("Background script running");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log("message", msg);
  console.log("sender", sender);
  sendResponse("from the background script");
});
