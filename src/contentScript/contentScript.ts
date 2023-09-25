console.log("content Script running!");

chrome.runtime.sendMessage("Message from the background script", (response) => {
  console.log("Logging response in content script", response);
});
