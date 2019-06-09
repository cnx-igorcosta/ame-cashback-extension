chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var currTab = tabs[0];
  if (currTab) { 
    alert(currTab.url);
  }
});